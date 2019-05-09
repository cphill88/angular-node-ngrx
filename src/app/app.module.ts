import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { ShopReducer, InitialState, initialState } from './store/reducer';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [BrowserModule, HttpClientModule, NgReduxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<InitialState>) {
    ngRedux.configureStore(ShopReducer, initialState);
  }
}
