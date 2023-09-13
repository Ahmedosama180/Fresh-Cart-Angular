import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProudactService } from '../proudact.service';
import { Proudact } from '../proudact';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartserviceService } from '../cartservice.service';


@Component({
  selector: 'app-proudact-detalis',
  templateUrl: './proudact-detalis.component.html',
  styleUrls: ['./proudact-detalis.component.css']
})
export class ProudactDetalisComponent implements OnInit {


  addtoCart(proudId:number){
    this._CartserviceService.addtoCart(proudId).subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }

  productId:any
  productDetalis:Proudact={} as Proudact

  constructor(private _ActivatedRoute :ActivatedRoute,private _ProudactService:ProudactService,private _CartserviceService:CartserviceService ){


  }

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((data)=>{

    this.productId=data.get("id");

    })

this._ProudactService.getProductDetalis(this.productId).subscribe({
  next:(res)=>{
    this.productDetalis=res.data;

  }
});




}



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    // 400: {
    //   items: 2
    // },
    // 740: {
    //   items: 3
    // },
    // 940: {
    //   items: 4
    // }
  },
  nav: true
}

}
