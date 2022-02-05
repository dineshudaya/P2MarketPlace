import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { FoodListComponent } from './components/shopping-cart/food-list/food-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ShoppingCartComponent,
    CartComponent,
    FiltersComponent,
    FoodListComponent,
    PagenotfoundComponent,
    LoginComponent
    
    
    
  ],
  imports: [
    NgModel,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
   RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@Directive({
  selector: '[attr]',
  exportAs:"ngForm"
  
})
export class NgForm{

}

@Directive({
  selector: '[attr]',
  exportAs:"ngModel"
  
})
export class ngModel {

}
