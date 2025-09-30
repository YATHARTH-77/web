import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If using React (from your Vite template)
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(), // Keep this if your project uses React
    tailwindcss(),
  ],
});