import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    // Custom domain x-ui.xdev.asia - no basePath needed
    images: {
        unoptimized: true,
    },
    transpilePackages: ['@xdev-asia/x-ui-react'],
    experimental: {
        optimizePackageImports: ['@xdev-asia/x-ui-react'],
    },
};

export default nextConfig;

