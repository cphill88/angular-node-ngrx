import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: Array<Product>;

  constructor(private ngRedux: NgRedux<InitialState>) { 
    this.ngRedux.select<Array<Product>>('cart').subscribe((items: Array<Product>) => {
      this.cart = items;
    });
  }

  ngOnInit() {
  }

}
