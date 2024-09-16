import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vue from "@vitejs/plugin-vue";

import type { UserConfig } from "vite";

export default () => {
  const config: UserConfig = {};

  config.plugins = [vue()];

  config.resolve = {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@app": fileURLToPath(new URL("./src/app", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@ui": fileURLToPath(new URL("./src/shared/ui", import.meta.url)),
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
      "@api": fileURLToPath(new URL("./src/shared/api", import.meta.url)),
      "@widgets": fileURLToPath(new URL("./src/widgets", import.meta.url)),
      "@entities": fileURLToPath(new URL("./src/entities", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@providers": fileURLToPath(
        new URL("./src/shared/providers", import.meta.url),
      ),
    },
  };

  return defineConfig(config);
};
