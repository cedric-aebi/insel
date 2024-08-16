import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import eslintPlugin from "@nabla/vite-plugin-eslint"
import checker from "vite-plugin-checker"
import { VitePWA } from "vite-plugin-pwa"

/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd())

  return {
    server: {
      port: parseInt(env.VITE_PORT),
      strictPort: true,
    },
    build: {
      outDir: "build",
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: "eslint ./src",
        },
      }),
      eslintPlugin(),
      // svgr options: https://react-svgr.com/docs/options/
      svgr({ svgrOptions: { icon: true } }),
      VitePWA({
        registerType: "autoUpdate",
        devOptions: {
          enabled: true,
        },
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
        manifest: {
          name: "Insel Spitalhygiene - Begehungen",
          short_name: "Begehungen",
          description: "Insel Spitalhygiene - Begehungen",
          theme_color: "#009870",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
  }
})
