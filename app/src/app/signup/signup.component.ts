import { Component } from '@angular/core';
import {FormGroup , FormControl,Validators} from'@angular/forms';
import { LoginComponent } from '../login/login.component';
import{AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: './app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent {
constructor(public _AuthService: AuthService,private _Router:Router){
  if(localStorage.getItem('userToken')!==null){
    this._Router.navigate(['/home']);
  }

}
  isLodging: boolean=false
  apiErorr:string=''
  registerer:FormGroup= new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    rePassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
    phone:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}/)]),
  },{validators:this.passwordMach});
passwordMach(registerer:any){
  let passwordMach= registerer.get('password');
  let repasswordMach= registerer.get('rePassword');


  if (passwordMach.value===repasswordMach.value) {
    return null;

   }else{
    repasswordMach.setErrors({passwordMatch: 'password and repassword not match'})
    return {passwordMatch: 'password and repassword not match'}
   }
}



handelRegister(registerer:FormGroup){
  this.isLodging=true
  if(registerer.valid){
   this._AuthService.regsterServ(registerer.value).subscribe({
    next:(data)=>{
      if(data.message ==='success'){
        this.isLodging=false
        this._Router.navigate(['/login']);
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

  console.log(registerer);

}


}
