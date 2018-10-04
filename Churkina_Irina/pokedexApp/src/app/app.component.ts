import { Component, ElementRef } from "@angular/core";
import { NotifyService } from "./notify.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pokedexApp";
  text: string = "";
  class: string = "";
  showModal: boolean = true;

  constructor(private elRef: ElementRef, private notify: NotifyService) {
    elRef.nativeElement.ownerDocument.body.style.margin = 0;
  }

  ngDoCheck() {
    let info = this.notify.getNotificationInfo();
    this.text = info.text;
    this.class = info.class;
    this.showModal = info.showModal;
  }
}
