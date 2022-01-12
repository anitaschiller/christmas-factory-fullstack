import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

const { PORT = 4000 } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': `http://localhost:${PORT}`,
    },
  },
});
