import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface userLoginCreds{
  username: string,
  password: string,
  confirmPassword: string
}
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  userSecrets: userLoginCreds = {
    username: "",
    password: "",
    confirmPassword: ""
  }
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  nextPage():void{
    this.route.navigate(['register/userdata'])
  }
}
