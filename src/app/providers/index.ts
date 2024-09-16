import RouterProvider from "./router";

import type { App } from "vue";

type ProviderHandle = (app: App) => void;

export function mapProviders(app: App): App {
  const providers: ProviderHandle[] = [RouterProvider];
  providers.forEach((provider: ProviderHandle) => app.use(provider));

  return app;
}
