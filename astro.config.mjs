import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [tailwind()],
  site: "https://tahir.sh",
});
