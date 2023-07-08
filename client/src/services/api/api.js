import axios from "axios";

import { LOCAL_STORAGE_KEYS } from "@/constants";
import authStore from "@store/stores/authStore.js";
import notificationStore from "@store/stores/notificationStore.js";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem(
      LOCAL_STORAGE_KEYS.ACCESS_TOKEN
    )}`,
  },
});

$axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    config.headers.Authorization = "";
  }

  return config;
});

$axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const isRefreshed = await authStore.refresh();

      if (isRefreshed) {
        const authHeader = `Bearer ${localStorage.getItem(
          LOCAL_STORAGE_KEYS.ACCESS_TOKEN
        )}`;

        $axios.defaults.headers.common["Authorization"] = authHeader;
        error.config.headers.Authorization = authHeader;

        return $axios.request(error.config);
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
