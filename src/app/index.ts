import { createApp } from "vue";
import { mapProviders } from "./providers";
import EntryPoint from "@/app/EntryPoint.vue";

import "@/app/assets/styles/index.scss";

import type { App } from "vue";

export function bootstrap(selector: string): App {
  const app: App = mapProviders(createApp(EntryPoint));

  app.mount(selector);

  return app;
}
