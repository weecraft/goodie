import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    nitro(),
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src/app",
      sitemap: {
        enabled: true,
        host: "https://acronim.vercel.app",
      },
    }),
    react(),
  ],
});

export default config;
