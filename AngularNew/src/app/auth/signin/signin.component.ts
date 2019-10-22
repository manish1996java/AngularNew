import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthData } from 'src/app/Models/autdata.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isloading:boolean = false;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  onSingIn(form:NgForm){
  
    const value = form.value;
    this.authservice.onSingIn(new AuthData(value.username,value.password));
    this.isloading=true;
    
  }

}
