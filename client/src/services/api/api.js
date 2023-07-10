import axios from "axios";

import { API_AUTH_ROUTES, LOCAL_STORAGE_KEYS } from "@/constants";
import notificationStore from "@store/stores/notificationStore.js";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

$axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    LOCAL_STORAGE_KEYS.ACCESS_TOKEN
  )}`;

  return config;
});

$axios.interceptors.response.use(
  (response) => {
    notificationStore.hiddenNotification();
    return response;
  },
  async (error) => {
    const originRequest = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originRequest._isRetry = true;

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}${API_AUTH_ROUTES.REFRESH_TOKENS}`,
          { withCredentials: true }
        );

        localStorage.setItem(
          LOCAL_STORAGE_KEYS.ACCESS_TOKEN,
          response.data.accessToken
        );

        return $axios.request(originRequest);
      } catch {
        console.log("User is not authorized");
      }
    }

    notificationStore.showErrorNotification(
      error.response.statusText,
      error.response.data.message
    );

    return Promise.reject(error);
  }
);

export default $axios;
