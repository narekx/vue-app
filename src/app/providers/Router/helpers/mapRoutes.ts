import type { NavigationGuard, RouteRecordRaw } from "vue-router";

export function mapRoutes(
  guards: NavigationGuard[],
  routes: RouteRecordRaw[],
): RouteRecordRaw[] {
  return routes.map((route: RouteRecordRaw): RouteRecordRaw => {
    if (!route.beforeEnter) {
      route.beforeEnter = [];
    }

    if (!Array.isArray(route.beforeEnter)) {
      route.beforeEnter = [route.beforeEnter];
    }

    if (guards.length > 0) {
      route.beforeEnter.push(...guards);
    }

    return route;
  });
}
