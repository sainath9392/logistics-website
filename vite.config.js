import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Deploy to root of domain (e.g. chromesai.in)
  // If deploying to a subdirectory e.g. chromesai.in/app, change to base: '/app/'
  base: '/',

  server: {
    port: 3000,
    open: false,
  },

  build: {
    outDir: 'dist',
    // Clean dist before each build
    emptyOutDir: true,
    // Minify for smaller file sizes
    minify: 'terser',
    // Raise chunk warning limit slightly (our bundle is fine)
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split vendor libraries into a separate chunk for better caching
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
