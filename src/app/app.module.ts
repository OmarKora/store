import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsModule } from './products/products.module';
import { CardModule } from './card/card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/components/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    // CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ProductsModule,
    // CardModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
