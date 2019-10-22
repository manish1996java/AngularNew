import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthData } from 'src/app/Models/autdata.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    const value = form.value;
    const username = value.username;
    const password = value.password;
    const authData = new AuthData(username,password);
    console.log(authData);
    this.authservice.onSubmit(authData);
  }
}
