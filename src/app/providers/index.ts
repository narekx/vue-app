import Pinia from "./Pinia";
import RouterProvider from "./Router";

import type { App } from "vue";

type ProviderHandle = (app: App) => void;

export function mapProviders(app: App): App {
  const providers: ProviderHandle[] = [Pinia, RouterProvider];
  providers.forEach((provider: ProviderHandle) => app.use(provider));

  return app;
}
