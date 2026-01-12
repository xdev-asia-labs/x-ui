import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
    minify: true,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
        options.drop = ['console', 'debugger'];
        options.pure = ['console.log', 'console.info', 'console.debug'];
    },
});
