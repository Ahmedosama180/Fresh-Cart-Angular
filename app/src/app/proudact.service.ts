
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proudact } from './proudact';




@Injectable({
  providedIn: 'root'
})
export class ProudactService {

  constructor( private _HttpClient:HttpClient) {

   }
   getProduct():Observable<any>{
             return this._HttpClient.get('https://route-ecommerce.onrender.com/api/v1/products');
   }

   getProductDetalis(id:string):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`);
}

getCategory():Observable<any>{
  return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`);
}
}
