import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    // GitHub Pages deploys to https://xdev-asia-labs.github.io/x-ui/
    basePath: isProd ? '/x-ui' : '',
    assetPrefix: isProd ? '/x-ui/' : '',
    images: {
        unoptimized: true,
    },
    transpilePackages: ['@xdev-asia/x-ui-react'],
    experimental: {
        optimizePackageImports: ['@xdev-asia/x-ui-react'],
    },
};

export default nextConfig;
