import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { UserDataService } from "../user-data.service";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

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
      this.userDataService.loginUser(this.user).subscribe(
        token => {
          this.cookieService.set("currToken", token.token);
          alert("You just have logged in. Let's search for some pokemons.");
          window.location.href = "/list";
        },
        err => {
          alert("Something is wrong :( Probably you should sign ul first :) ");
        }
      );
    } else if (this.status === "signup") {
      this.userDataService.createUser(this.user).subscribe(
        result => {
          if (result.userCreated) {
            alert(
              "You are with us now! Feel free to Sign In and start catching pokemons!"
            );
            location.reload();
          }
        },
        err => {
          alert("Maybe you alreade have an account?");
        }
      );
    }
  }

  constructor(
    private userDataService: UserDataService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {}
}
