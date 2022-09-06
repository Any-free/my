import { defineConfig } from 'rollup';
export default defineConfig({
    input: "index.js",
    output: [{
        format: "es",
        file: "dist/index.es.js",
        sourcemap: true,
    }, {
        format: "cjs",
        file: "dist/index.cjs.js",
        sourcemap: true,
    }, {
        format: "umd",
        name: "utils_fn",
        file: "dist/index.umd.js",
        sourcemap: true,
    }]
})