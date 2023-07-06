import { makeAutoObservable } from "mobx";
import axios from "../api/api.js";

class AuthStore {
  user = {};
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
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
}

const authStore = new AuthStore();

export default authStore;
