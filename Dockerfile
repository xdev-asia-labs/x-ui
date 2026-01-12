# Build stage for docs
FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/core/package.json ./packages/core/
COPY packages/react/package.json ./packages/react/
COPY packages/native/package.json ./packages/native/
COPY packages/mcp-server/package.json ./packages/mcp-server/
COPY apps/docs/package.json ./apps/docs/
COPY apps/storybook/package.json ./apps/storybook/
COPY apps/storybook-native/package.json ./apps/storybook-native/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build packages (order matters - dependencies first)
RUN pnpm --filter @xdev-asia/x-ui-core build
RUN pnpm --filter @xdev-asia/x-ui-react build
RUN pnpm --filter @xdev-asia/x-ui-native build
RUN pnpm --filter @xdev-asia/x-ui-docs build
RUN pnpm --filter @xdev-asia/x-ui-storybook build
RUN pnpm --filter @xdev-asia/x-ui-storybook-native build

# Combine outputs
RUN mkdir -p ./apps/docs/out/storybook && \
    cp -r ./apps/storybook/dist/* ./apps/docs/out/storybook/ && \
    mkdir -p ./apps/docs/out/storybook-native && \
    cp -r ./apps/storybook-native/dist/* ./apps/docs/out/storybook-native/

# Production stage
FROM nginx:alpine AS production

# Copy built assets
COPY --from=builder /app/apps/docs/out /usr/share/nginx/html

# Nginx config for SPA
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
