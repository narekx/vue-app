import { createApp } from "vue";
import { mapProviders } from "./providers";
import EntryPoint from "@/app/EntryPoint.vue";

import type { App } from "vue";

import "./style/index.scss";

export function bootstrap(selector: string): App {
  const app: App = mapProviders(createApp(EntryPoint));

  app.mount(selector);

  return app;
}
