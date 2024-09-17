import PiniaProvider from "./Pinia";
import AxiosProvider from "./Axios";
import RouterProvider from "./Router";

import type { App } from "vue";

type ProviderHandle = (app: App) => void;

export function mapProviders(app: App): App {
  const providers: ProviderHandle[] = [
    AxiosProvider,
    PiniaProvider,
    RouterProvider,
  ];
  providers.forEach((provider: ProviderHandle) => app.use(provider));

  return app;
}
