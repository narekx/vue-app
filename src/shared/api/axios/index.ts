import axios from "axios";
import { hasInjectionContext, inject } from "vue";

import type {
  AxiosError,
  AxiosResponse,
  AxiosInstance,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios";

// @todo improve
export interface AxiosInterceptorsInterface {
  requestOnFulfilled?: (
    request: InternalAxiosRequestConfig,
  ) => InternalAxiosRequestConfig;
  responseOnFulfilled?: (response: AxiosResponse) => AxiosResponse;
  responseOnRejected?: (error: AxiosError) => AxiosError;
}

export function createAxios(
  options: CreateAxiosDefaults,
  interceptors: AxiosInterceptorsInterface = {},
): AxiosInstance {
  const $axios: AxiosInstance = axios.create(options);

  $axios.interceptors.request.use(interceptors.requestOnFulfilled);

  $axios.interceptors.response.use(
    interceptors.responseOnFulfilled,
    interceptors.responseOnRejected,
  );

  return $axios;
}

export function useAxios(): AxiosInstance {
  if (!hasInjectionContext()) {
    throw new Error("Axios can be injected only in component context");
  }

  return inject<AxiosInstance>("axios")!;
}
