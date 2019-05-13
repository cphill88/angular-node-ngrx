import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product/product';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from './store/reducer';
import { LoadItems } from './store/actions';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FoodService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<InitialState>) {}

  getAll() {
    this.http.get(`${environment.baseUrl}:4000/fruits`).subscribe((products: Array<Product>) => {
      this.ngRedux.dispatch(LoadItems(products));
    });
  }
}
