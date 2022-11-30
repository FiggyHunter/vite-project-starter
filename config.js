import {resolve} from 'path';

module.exports = {
    publicDir: './public',
    base: './',
    root: '../dev',
    build: {
        outDir: '../production',
        emptyOutDir: true,
        sourcemap: 'inline',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'dev/index.html'),
                nested: resolve(__dirname, 'dev/loader.html'),
            },

            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: ({name}) => {
                  if (/\.(gif|jpeg|jpg|webp|png|svg)$/.test(name ?? '')){
                      return 'assets/images/[name][extname]';
                  }
                  
                  if (/\.css$/.test(name ?? '')) {
                      return 'assets/css/[name][extname]';   
                  }
         
                  // default value
                  // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                  return 'assets/[name][extname]';
                },
          }
        }
    },
    css: {
        devSourcemap: true,
    }
}
