import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { UserDataService } from "../user-data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"]
})
export class LoginPageComponent implements OnInit {
  user: User = {
    name: "",
    password: ""
  };
  status = "login";
  message = "";

  toggleStatus(): void {
    this.status = this.status === "login" ? "signup" : "login";
  }

  submitAction(): void {
    if (this.status === "login") {
      this.userDataService.loginUser(this.user).subscribe();
    } else if (this.status === "signup") {
      this.userDataService.createUser(this.user).subscribe();
    }
  }

  constructor(
    private userDataService: UserDataService
  ) {}

  ngOnInit() {}
}
