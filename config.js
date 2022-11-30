import {resolve} from 'path';

module.exports = {
    server: {
        port: 443
    },
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
                chunkFileNames: 'assets/scripts/[name]-[hash].js',
                entryFileNames: 'assets/scripts/[name]-[hash].js',
                assetFileNames: ({name}) => {
                  if (/\.(gif|jpeg|jpg|webp|png|svg)$/.test(name ?? '')){
                      return 'assets/images/[name][extname]';
                  }
                  
                  if (/\.css$/.test(name ?? '')) {
                      return 'assets/styles/[name][extname]';   
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
