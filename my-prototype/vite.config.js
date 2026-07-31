import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Local dev server for your prototype. `npm run dev` starts it and prints a
// http://localhost:5173 link you open in your browser.
//
// `npm run build` uses viteSingleFile to inline everything into one
// downloadable HTML file (dist/index.html) that opens directly via file://,
// no server needed — for sharing the prototype outside this project.
export default defineConfig(({ command }) => ({
  plugins: [react(), ...(command === 'build' ? [viteSingleFile()] : [])],
  server: { port: 5173, strictPort: false },
}))
