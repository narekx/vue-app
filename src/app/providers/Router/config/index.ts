import { HomePage } from "@pages";

import type { RouteRecordRaw } from "vue-router";

export const ConfigRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: {
      title: "Home page",
      description: "Home page",
    },
  },
];
