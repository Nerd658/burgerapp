/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.js',
  },
  server: {
    host: true, // Permet l'accès depuis d'autres appareils
    port: 5173, // Port par défaut de Vite
    strictPort: true, // Force l'utilisation du port spécifié
    watch: {
      usePolling: true // Utile pour certains environnements
    },
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      port: 5173
    },
    cors: true, // Active CORS pour les requêtes cross-origin
    proxy: {
      // Configuration du proxy si nécessaire
      '/api': {
        target: 'localhost',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
