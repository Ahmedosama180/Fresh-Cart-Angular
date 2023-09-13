import { Component, Input } from '@angular/core';
import { Proudact } from '../proudact';
import { CartserviceService } from '../cartservice.service';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

constructor(private _CartserviceService:CartserviceService){}

addTOCart(proudID:number){
  this._CartserviceService.addtoCart(proudID).subscribe({
    next:data=>{
   this._CartserviceService.numberofcartitem .next(data.numOfCartItems)
   console.log(data)
    },
    error:err=>{
      console.log(err);

    }
  })
}
  @Input()Proudact:Proudact={} as Proudact;
}
