import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env to allow accessing API_KEY in Chatbot.tsx without errors
    'process.env': process.env
  }
});