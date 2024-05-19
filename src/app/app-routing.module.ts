import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CardComponent } from './card/components/card/card.component';

const routes: Routes = [
  {path:'all',component:AllProductsComponent},

  {path:'details/:id',component:ProductDetailsComponent},
  {path:'card',component:CardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
