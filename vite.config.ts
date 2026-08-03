import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: '/',
  // inspectAttr aggiunge attributi `code-path` a ogni elemento: utile in sviluppo,
  // da tenere fuori dalla build (inquinerebbe l'HTML servito a utenti e crawler).
  plugins: [...(command === 'serve' ? [inspectAttr()] : []), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
