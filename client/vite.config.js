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
  });
};

