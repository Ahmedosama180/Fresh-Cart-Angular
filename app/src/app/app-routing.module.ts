import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { ProudactDetalisComponent } from './proudact-detalis/proudact-detalis.component';
import { CheekOutComponent } from './cheek-out/cheek-out.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:"full",title:'login page'},
  {path:'home',canActivate:[authGuard] ,component:HomeComponent,title:'Home page'},
  {path:'about', canActivate:[authGuard], component:AboutComponent,title:'About page'},
  {path:'categories',canActivate:[authGuard], component:CategoriesComponent,title:'Categories page'},
  {path:'cart',canActivate:[authGuard], component:CartComponent,title:'Cart page'},
  {path:'cheekOut',canActivate:[authGuard], component:CheekOutComponent},
  {path:'Productdetails/:id',canActivate:[authGuard], component:ProudactDetalisComponent,title:'Productdetails page'},
  {path:'brandeis',canActivate:[authGuard], component:BrandsComponent,title:'Brandeis page'},
  {path:'login', component:LoginComponent,title:'login page'},
  {path:'register', component:SignupComponent,title:'singup page'},
  {path:'register', component:RegisterComponent,title:'login page'},
  {path:'setings',loadChildren:()=>import('./setings-moudel/setings-moudel.module').then((n)=>n.SetingsMoudelModule),title:'Settings page'},
  {path:'**', component:NotfoundComponent,title:'notfound page'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
