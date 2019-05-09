import { Component, Input, OnInit } from '@angular/core';
import { AddToCart, RemoveFromCart } from '../store/actions';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from '../store/reducer';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  inCart = false;
  @Input() product: Product;

  constructor(private ngRedux: NgRedux<InitialState>) { }

  addToCart(item: Product) {
    this.ngRedux.dispatch(AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: Product) {
    this.ngRedux.dispatch(RemoveFromCart(item));
    this.inCart = false;
  }

  ngOnInit() {
  }

}
