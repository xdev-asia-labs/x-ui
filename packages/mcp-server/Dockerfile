FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY packages/core/package.json ./packages/core/
COPY packages/mcp-server/package.json ./packages/mcp-server/

# Install dependencies
RUN pnpm install --frozen-lockfile --filter @xdev-asia/x-ui-mcp-server...

# Copy source code
COPY packages/core ./packages/core
COPY packages/mcp-server ./packages/mcp-server
COPY tsconfig.json ./

# Build
RUN pnpm --filter @xdev-asia/x-ui-core build
RUN pnpm --filter @xdev-asia/x-ui-mcp-server build

# Set entrypoint
ENTRYPOINT ["node", "/app/packages/mcp-server/dist/index.js"]
