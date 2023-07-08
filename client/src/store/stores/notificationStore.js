import { makeAutoObservable } from "mobx";

class NotificationStore {
  isError = false;

  title = "";
  message = "";
  style = "hidden";

  constructor() {
    makeAutoObservable(this);
  }

  showNotification() {
    this.style = "block";
  }

  hiddenNotification() {
    this.style = "transition duration-500 opacity-0";
    setTimeout(() => (this.style = "hidden"), 500);
  }

  setIsError(value) {
    this.isError = value;
  }

  setNotificationTitle(title) {
    this.title = title;
  }

  setNotificationMessage(message) {
    this.message = message;
  }

  showErrorNotification(title = "Error", message = "Something went wrong") {
    this.isError = true;

    this.title = title;
    this.message = message;

    this.showNotification();
  }
}

const notificationStore = new NotificationStore();

export default notificationStore;
