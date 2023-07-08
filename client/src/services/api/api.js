import axios from "axios";

import authStore from "@store/stores/authStore.js";
import notificationStore from "@store/stores/notificationStore.js";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

$axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
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
        const authHeader = `Bearer ${localStorage.getItem("token")}`;

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
