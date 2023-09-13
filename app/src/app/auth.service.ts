import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

import { Observable,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 userData=new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken')!==null) {
      this.decodedUserData();
    }
  }

decodedUserData(){
 let enocded=JSON.stringify(localStorage.getItem('userToken'));
let decoded:any=jwtDecode(enocded);
console.log(decoded);

this.userData.next(decoded)
}
logout(){
localStorage.removeItem('userToken');
this.userData.next(null);
this._Router.navigate(['/login']);

 }



  regsterServ(userData:object):Observable<any>{
       return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)
  }

  LoginServ(userData:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userData)
}
}
