import { Component, OnInit, Input } from "@angular/core";
import { NotifyService } from "../notify.service";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  @Input()
  text: string;
  @Input()
  class: string;
  @Input()
  showModal: boolean;

  constructor(private notify: NotifyService) {}

  closeModal() {
    this.notify.clearNotificationData();
  }

  ngOnInit() {}
}
