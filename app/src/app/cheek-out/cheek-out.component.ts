import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartserviceService } from '../cartservice.service';



@Component({
  selector: 'app-cheek-out',
  templateUrl: './cheek-out.component.html',
  styleUrls: ['./cheek-out.component.css']
})
export class CheekOutComponent {
  constructor(private _CartserviceService:CartserviceService){}

  shippingAddress:FormGroup=new FormGroup({
    details:new FormControl(null),
    phone:new FormControl(null),
    city:new FormControl(null)
  })

  navigateTopage(url:string){
window.location.href=url;
  }
  handelSubmint(shippingAddress:FormGroup){
console.log(shippingAddress.value);

this._CartserviceService.onlinepyment(shippingAddress.value,'64b282b724be57adc9956187').subscribe({
  next:(data:any)=>{
    this.navigateTopage(data.session.url)
    console.log(data.session.url);
  },error:(err)=>{
  console.error(err);
  }
})

  }

}
