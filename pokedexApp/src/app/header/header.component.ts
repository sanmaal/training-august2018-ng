import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  private loggedIn = false;
  private caughtPage = this.route.snapshot.data["caught"];
  private authPage = this.route.snapshot.data["auth"];

  getStatus(): void {
    if (this.cookieService.get("currToken")) {
      this.loggedIn = true;
    }
  }

  logout(): void {
    this.cookieService.delete("currToken");
    alert("You've just logged out. The page will be reloaded");
    location.reload();
  }

  constructor(
    private cookieService: CookieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getStatus();
  }
}
