import type {
  NavigationGuardNext,
  RouteLocationNormalizedLoaded,
  RouteLocationNormalizedGeneric,
} from "vue-router";

export default async function (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
): Promise<void> {
  next();
}
