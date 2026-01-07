import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        include: ['packages/**/*.test.{ts,tsx}'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules', 'dist', '**/*.d.ts'],
        },
    },
    resolve: {
        alias: {
            '@xdev-asia/x-ui-core': resolve(__dirname, './packages/core/src'),
            '@xdev-asia/x-ui-react': resolve(__dirname, './packages/react/src'),
        },
    },
});
