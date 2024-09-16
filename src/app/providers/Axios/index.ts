import { createAxios } from "@api";

import type { App } from "vue";
import type { AxiosInstance } from "axios";

export default (app: App): void => {
  const $axios: AxiosInstance = createAxios({
    baseURL: "/",
    withCredentials: true,
    headers: {
      Accept: "application/json",
    },
  });

  app.provide<AxiosInstance>("axios", $axios);
};
