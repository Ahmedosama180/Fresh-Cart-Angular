import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepaswordComponent } from '../setings/changepasword/changepasword.component';
import { ResetpassowrdComponent } from '../setings/resetpassowrd/resetpassowrd.component';

const routes: Routes = [
  {path:'',redirectTo:'change',pathMatch:'full',title:'Change page'},
  {path:'change', component:ChangepaswordComponent,title:'Change page'},
  {path:'reset', component:ResetpassowrdComponent,title:'Change page'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetingsMoudelRoutingModule { }
