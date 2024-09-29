import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mypage', // Asegúrate de que esta ruta coincida con el nombre de tu repositorio
  plugins: [react()],
})