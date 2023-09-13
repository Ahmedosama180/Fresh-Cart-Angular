import { Component, OnInit } from '@angular/core';
import { ProudactService } from '../proudact.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  constructor(private _ProudactService:ProudactService){}
  // categories:any;
  getCategory:any[] =[]
 ngOnInit(): void {
  this._ProudactService.getCategory().subscribe({
    next:response=>{
          console.log(response);
          this.getCategory=response.data

        }
  })




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
      items: 7
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
