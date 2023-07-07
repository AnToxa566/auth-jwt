import { makeAutoObservable } from "mobx";
import axios from "../api/api.js";

class AuthStore {
  user = {};
  isAuth = false;
  isAuthChecked = false;

  constructor() {
    makeAutoObservable(this);
  }

  async checkAuth() {
    try {
      this.isAuthChecked = false;
      const response = await axios.get("/auth/check");

      this.user = response.data.user;
      this.isAuth = true;
    } catch (error) {
      console.log(error);
    } finally {
      this.isAuthChecked = true;
    }
  }

  async login(request) {
    try {
      const response = await axios.post("/auth/login", request);

      localStorage.setItem("token", response.data.accessToken);

      this.user = response.data.user;
      this.isAuth = true;
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await axios.get("/auth/logout");

      localStorage.setItem("token", "");

      this.user = {};
      this.isAuth = false;
    } catch (error) {
      console.log(error);
    }
  }
}

const authStore = new AuthStore();

export default authStore;
