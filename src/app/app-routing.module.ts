import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {NotfoundComponent} from './notfound/notfound.component'
import {ProductsComponent} from './products/products.component'
const routes: Routes = [
{	path : '', redirectTo: '/home', pathMatch: 'full'},
{	path : 'home', component: HomeComponent},
{ 	path : 'products', component: ProductsComponent},
{	path : '**', component : NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
