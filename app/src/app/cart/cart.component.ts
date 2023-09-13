import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  catDetalis:any=null
  constructor(private _CartserviceService:CartserviceService){}


  UpdateItemCount(ProductId:number,count:number){
    this._CartserviceService.UpdateItemCount(ProductId,count).subscribe({
     next:data=>{
       this.catDetalis=data.data;
       console.log(data)
     },
     error:err=>{
             console.log(err)
           }

   })
 }


  RemoveUserCart(ProductId:number){
     this._CartserviceService.RemoveUserCart(ProductId).subscribe({
      next:data=>{
        this.catDetalis=data.data;
        console.log(data)
      },
      error:err=>{
              console.log(err)
            }

    })
  }



  ngOnInit(): void {

    this._CartserviceService.getLoggeUserCart().subscribe({
      next:data=>{

        this.catDetalis=data.data;
        console.log(data.data);
      },
      error:err=>{
              console.log(err);
            }

    });

  }

}
