import { ConfigRoutes } from "./config";
import { createRouter, createWebHistory } from "vue-router";

import type { App } from "vue";
import type { Router } from "vue-router";

export default function (app: App): void {
  const router: Router = createRouter({
    routes: ConfigRoutes,
    history: createWebHistory("/"),
  });

  app.use(router);
}
