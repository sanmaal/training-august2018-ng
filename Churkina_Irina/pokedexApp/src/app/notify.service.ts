import { Injectable } from "@angular/core";
import { NotificationParams } from "./notification";

@Injectable({
  providedIn: "root"
})
export class NotifyService {
  constructor() {}
  notifyString: string = "";
  notifyClass: string = "";
  showModal: boolean = false;
  params: NotificationParams = {};

  getNotificationInfo() {
    return {
      class: this.notifyClass,
      text: this.notifyString,
      showModal: this.showModal
    };
  }

  defineNotificationData(str, params) {
    this.notifyString = str;
    this.showModal = true;
    this.params = params;
  }

  clearNotificationData() {
    this.notifyString = "";
    this.notifyClass = "";
    this.showModal = false;
    if (this.params.reload) {
      this.params.path ? (location.href = this.params.path) : location.reload();
    }
  }

  success(str, params = {}) {
    this.notifyClass = "success";
    this.defineNotificationData(str, params);
  }

  warning(str, params = {}) {
    this.notifyClass = "warning";
    this.defineNotificationData(str, params);
  }
}
