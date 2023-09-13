import { Component } from '@angular/core';
import {FormGroup , FormControl,Validators} from'@angular/forms';
import{AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public _AuthService: AuthService,private _Router:Router){
if(localStorage.getItem('userToken')!==null){
  this._Router.navigate(['/home']);
}

  }
  isLodging: boolean=false
  apiErorr:string=''
  loginForm:FormGroup= new FormGroup({

    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),

  });

  handelloginForm(loginForm:FormGroup){
  this.isLodging=true

  if(loginForm.valid){
   this._AuthService.LoginServ(loginForm.value).subscribe({
    next:(data)=>{
      if(data.message ==='success'){
        localStorage.setItem('userToken',data.token);
        this._AuthService.decodedUserData();
        this.isLodging=false
        this._Router.navigate(['/home']);
      }
    },
    error:(err)=>{
      this.isLodging=false
      this.apiErorr=err.error.message;
      console.log(err);



    },
    complete:()=>console.log('complete')



   })
  }

  console.log(loginForm);

}

}
