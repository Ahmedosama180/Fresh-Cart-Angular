import { Component, OnInit } from '@angular/core';
import { ProudactService } from '../proudact.service';
import { Proudact } from '../proudact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-feature-product',
  templateUrl: './feature-product.component.html',
  styleUrls: ['./feature-product.component.css']
})
export class FeatureProductComponent implements OnInit {

  ALLproudact:Proudact[] = []
  searchtearm:string=''
constructor(private _ProudactService:ProudactService){

}

ngOnInit(): void {
  this.getAllProudact()
}

getAllProudact(){
  this._ProudactService.getProduct().subscribe({
    next:(res)=>{
      console.log(res);

      this.ALLproudact=res.data;

    }
  })
}
}
