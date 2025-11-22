import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html')
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      }
    }
  },
  server: {
    port: 5173,
    open: true,
    cors: true
  },
  preview: {
    port: 4173,
    open: true
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@js': resolve(__dirname, './src/js'),
      '@css': resolve(__dirname, './src/css'),
      '@assets': resolve(__dirname, './src/assets')
    }
  }
});
