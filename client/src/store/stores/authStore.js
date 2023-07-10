import { makeAutoObservable } from "mobx";

import axios from "@services/api/api.js";
import { API_AUTH_ROUTES, LOCAL_STORAGE_KEYS } from "@/constants";

class AuthStore {
  user = {};
  isAuth = false;
  isAuthChecked = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthUser(res) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, res.data.accessToken);

    this.user = res.data.user;
    this.isAuth = true;
  }

  removeUser() {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, "");

    this.user = {};
    this.isAuth = false;
  }

  async checkAuth() {
    try {
      this.isAuthChecked = false;
      const response = await axios.get(API_AUTH_ROUTES.CHECK_AUTH);

      this.user = response.data.user;
      this.isAuth = true;

      return true;
    } catch (error) {
      return null;
    } finally {
      this.isAuthChecked = true;
    }
  }

  async refresh() {
    try {
      const response = await axios.get(API_AUTH_ROUTES.REFRESH_TOKENS);
      this.setAuthUser(response);

      return true;
    } catch (error) {
      this.removeUser();
      return null;
    }
  }

  async login(request) {
    try {
      const response = await axios.post(API_AUTH_ROUTES.LOGIN, request);
      this.setAuthUser(response);

      return true;
    } catch (error) {
      return null;
    }
  }

  async registration(request) {
    try {
      const response = await axios.post(API_AUTH_ROUTES.REGISTRATION, request);
      this.setAuthUser(response);

      return true;
    } catch (error) {
      return null;
    }
  }

  async logout() {
    try {
      await axios.get(API_AUTH_ROUTES.LOGOUT);
      this.removeUser();

      return true;
    } catch (error) {
      return null;
    }
  }
}

const authStore = new AuthStore();

export default authStore;
