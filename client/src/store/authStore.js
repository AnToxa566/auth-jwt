import { makeAutoObservable } from "mobx";
import axios from "../api/api.js";

class AuthStore {
  user = {};
  isAuth = false;
  isAuthChecked = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthUser(res) {
    localStorage.setItem("token", res.data.accessToken);

    this.user = res.data.user;
    this.isAuth = true;
  }

  async checkAuth() {
    try {
      this.isAuthChecked = false;
      const response = await axios.get("/auth/check");

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
      const response = await axios.get("/auth/refresh");
      this.setAuthUser(response);

      return true;
    } catch (error) {
      return null;
    }
  }

  async login(request) {
    try {
      const response = await axios.post("/auth/login", request);
      this.setAuthUser(response);

      return true;
    } catch (error) {
      return null;
    }
  }

  async logout() {
    try {
      await axios.get("/auth/logout");

      localStorage.setItem("token", "");

      this.user = {};
      this.isAuth = false;

      return true;
    } catch (error) {
      return null;
    }
  }
}

const authStore = new AuthStore();

export default authStore;
