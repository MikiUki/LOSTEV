import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private ruter: Router) { }

  ngOnInit(): void {
    this.signUpButton = document.getElementById("signUp");
    this.signInButton = document.getElementById("signIn");
    this.container = document.getElementById("container");

    this.signUpButton.addEventListener("click", () => {
      this.container.classList.add("right-panel-active");
    });

    this.signInButton.addEventListener("click", () => {
      this.container.classList.remove("right-panel-active");
    });
  }

  signUpButton: HTMLElement;
  signInButton: HTMLElement;
  container: HTMLElement;

  //login
  log_jmbg: string;
  log_password: string;

  //signup
  name: string;
  surname: string;
  jmbg: string;
  password: string;


  login() {
    let users = JSON.parse(localStorage.getItem('users'));
    users.forEach(user => {
      if (this.log_jmbg == user.jmbg && this.log_password == user.password) {

        localStorage.setItem('user', JSON.stringify(user));
        let tip = '/' + user.tip;
        this.ruter.navigate([tip]);
      }
    });

  }

  signup() {

    let users = JSON.parse(localStorage.getItem('users'));
    if (users == null)
      users = [];

    console.log(this.jmbg);

    let user: User;
    user = {} as User;
    user.jmbg = this.jmbg;
    user.name = this.name;
    user.surname = this.surname;
    user.password = this.password;
    user.tip = "user";
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

  }
}
