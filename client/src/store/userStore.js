import { makeAutoObservable } from "mobx";
import axios from "../api/api.js";

class UserStore {
  users = [];
  isLoading = false;

  statusCode = 0;
  error = {};

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.isLoading = true;

    try {
      const response = await axios.get("/users");
      console.log(response);
    } catch (error) {
      this.statusCode = error.response.status;
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  }
}

const userStore = new UserStore();

export default userStore;
