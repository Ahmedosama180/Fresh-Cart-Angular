import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
numberofcartitem=new BehaviorSubject(0);
  constructor(private HttpClient:HttpClient) {
    this.getLoggeUserCart().subscribe({


      next:(resbon)=> {
        this.numberofcartitem.next(resbon.numOfCartItems)
        console.log(resbon.numOfCartItems)
      },
      error:(err)=>(err)

    })
  }




  addtoCart(ProductId:number):Observable<any>{

  return this.HttpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{productId:ProductId},{

  })
  }


  getLoggeUserCart():Observable<any>{

    return this.HttpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{

    })
    }

  RemoveUserCart(productId:number):Observable<any>{

      return this.HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{

      })
      }

       UpdateItemCount(productId:number,count:number):Observable<any>{

        return this.HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {count:count},{

        })
        }


        onlinepyment(shippingAddress:any,caerId:string){

          return this.HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${caerId}?url=http://localhost:4200`,
          {

      shippingAddress:shippingAddress


          },{

          })
          }
}
