import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from './store/reducer';
import { ApplyCoupon } from './store/actions';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<InitialState>) {}

  getCoupon(coupon) {
    this.http.get(`http://localhost:4000?coupon=${coupon}`).subscribe((discount) => {
      if (discount) {
        this.ngRedux.dispatch(ApplyCoupon(discount));
      }
    });
  }
}
