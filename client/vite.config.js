// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//   ],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './setupTests.js',
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ command }) => {
  return defineConfig({
    plugins: [react()],
    base: command === 'build' ? 'https://pyrography-art-gallery-api.onrender.com/' : '/',
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './setupTests.js',
    },
    build: {
      sourcemap: true,
      target: 'modules',
      outDir: 'dist',
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  });
};

