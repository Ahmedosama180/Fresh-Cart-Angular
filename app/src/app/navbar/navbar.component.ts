import { Component } from '@angular/core';
import{AuthService} from '../auth.service';
import { CartserviceService } from '../cartservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  islogin: boolean = false;
  numberCartItrem:number =0;
  logOutServ(){
this._AuthService.logout();
  }
  constructor(private _AuthService:AuthService,private _CartserviceService:CartserviceService){
    _CartserviceService.numberofcartitem.subscribe({
      next: (data) => {
        this.numberCartItrem = data;
        console.log (data);
      }
    })

   _AuthService.userData.subscribe({
    next:()=>{
      if(_AuthService.userData.getValue() !==null){
        this.islogin = true;
      }else{
        this.islogin = false;
      }
    }
   })
  }

}
