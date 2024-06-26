import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/graphql': {target: 'http://localhost:5174',
      changeOrigin: true,
      secure: false,
    }
  }
},
  build: {
    rollupOptions: {
      input: './index.html'
    }
  }

});