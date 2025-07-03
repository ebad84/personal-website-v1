import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/REPOSITORY-NAME/', // اسم repository رو اینجا بذار
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});