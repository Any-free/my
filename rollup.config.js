export default {
    input: "./src/index.js",
    output: [
      {
        file: './dist/utils_fn.js',
        format: 'umd',
        sourcemap: true,
        name: 'utils_fn',
        //当入口文件有export时，'umd'格式必须指定name
        //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
      },
    //   {
    //     file: './dist/index.es.js',
    //     format: 'es',
    //     sourcemap: true,
    //   },
    //   {
    //     file: './dist/index.cjs.js',
    //     format: 'cjs',
    //     sourcemap: true,
    //   }
    ]
  }