import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProudactDetalisComponent } from './proudact-detalis/proudact-detalis.component'

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestPipePipe } from './test-pipe.pipe';
import { SrachpipePipe } from './srachpipe.pipe';
import { ChangepaswordComponent } from './setings/changepasword/changepasword.component';
import { ResetpassowrdComponent } from './setings/resetpassowrd/resetpassowrd.component';
import { CheekOutComponent } from './cheek-out/cheek-out.component';
import { HeaderInterceptor } from './header.interceptor';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { SignuppComponent } from './signupp/signupp.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    SignupComponent,
    FeatureProductComponent,
    ProductItemComponent,
    ProudactDetalisComponent,
    MainsliderComponent,
    TestPipePipe,
    SrachpipePipe,
    ChangepaswordComponent,
    ResetpassowrdComponent,
    CheekOutComponent,
    SignuppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
            multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
