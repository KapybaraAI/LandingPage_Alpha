import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    rollupOptions: {
      external: ["/assets/feature1.png","/assets/feature2.png","/assets/feature3.png"], // Add the file path here
    },
  },
})
