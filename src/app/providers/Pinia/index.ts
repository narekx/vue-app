import { createPinia } from "pinia";

import type { App } from "vue";
import type { Pinia } from "pinia";

export default function (app: App): void {
  const pinia: Pinia = createPinia();

  app.use(pinia);
}
