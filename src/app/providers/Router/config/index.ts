import { HomePage } from "@pages";
import { mapRoutes } from "../helpers";
import { guardExample } from "../guards";

import type { RouteRecordRaw } from "vue-router";

export const ConfigRoutes: RouteRecordRaw[] = mapRoutes(
  [guardExample],
  [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        title: "Home page",
        description: "Home page",
      },
    },
  ],
);
