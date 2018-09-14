import { Component, ElementRef } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pokedexApp";

  constructor(private elRef: ElementRef) {
	elRef.nativeElement.ownerDocument.body.style.margin = 0;
 }
}
