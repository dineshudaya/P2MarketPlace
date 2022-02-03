import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes =[
{path: '' , redirectTo:'/shop', pathMatch: 'full'},
{component:LoginComponent, path:'Login'},
{path:'register', component:RegisterComponent},
{path:'shop',component:ShoppingCartComponent},
{path:'**', component:PagenotfoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
