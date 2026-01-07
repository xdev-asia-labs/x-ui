import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/tokens/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
});
