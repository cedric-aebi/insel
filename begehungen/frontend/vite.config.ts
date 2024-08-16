import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import eslintPlugin from "@nabla/vite-plugin-eslint"
import checker from "vite-plugin-checker"

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
          lintCommand: "eslint -c .eslint.config.js ./src",
        },
      }),
      eslintPlugin(),
      // svgr options: https://react-svgr.com/docs/options/
      svgr({ svgrOptions: { icon: true } }),
    ],
  }
})
