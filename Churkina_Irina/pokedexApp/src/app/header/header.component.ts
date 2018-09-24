import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute } from "@angular/router";
import { UserDataService } from "../user-data.service";

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
    this.userDataService.logout();
  }

  constructor(
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {
    this.getStatus();
  }
}
