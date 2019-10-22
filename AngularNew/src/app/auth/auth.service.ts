import {OnInit,OnDestroy, Injectable, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from '../Models/autdata.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService implements OnInit,OnDestroy{
    isAuthenticated = false;
    authenticatedListener = new EventEmitter();

    private token;
    constructor(private http:HttpClient,private router:Router){}
    
    ngOnInit(){
        return 
    }

    // getTokkenListener(){
    //     return this.authenticatedListener.asObservable();
    // }
    onSubmit(authdata:AuthData){
        this.http.post('http://localhost:6200/api/user/signup',authdata)
        .subscribe((response)=>{
            console.log(response);
        })
    }
    onSingIn(authdata:AuthData){
        console.log(authdata);
        this.http.post<{token:string}>('http://localhost:6200/api/user/login',authdata)
        .subscribe((response)=>{
            const token = response.token;
            this.token = token;
            if(token){
            this.authenticatedListener.emit(true);
            this.router.navigate(["/"]);
            }
        })
    }
    onLogout(){
        this.token = null;
        this.isAuthenticated = false;
        this.authenticatedListener.emit(false);
        this.router.navigate(["/"]);
    }
    getToken(){
        return this.token;
    }

    ngOnDestroy(){

    }
}