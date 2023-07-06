import axios from "axios";
import notificationStore from "../store/notificationStore.js";

const $axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

$axios.interceptors.request.use(
  (config) => {
    // Выполняется перед отправкой запроса
    // Можно модифицировать конфигурацию или добавить заголовки
    return config;
  },
  (error) => {
    notificationStore.showErrorNotification(
      error.response.statusText,
      error.response.data.message
    );

    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (response) => {
    // Выполняется при получении успешного ответа
    // Можно модифицировать данные ответа или выполнить дополнительные действия
    return response;
  },
  (error) => {
    notificationStore.showErrorNotification(
      error.response.statusText,
      error.response.data.message
    );

    return Promise.reject(error);
  }
);

export default $axios;
