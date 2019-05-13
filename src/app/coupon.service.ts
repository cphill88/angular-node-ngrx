import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgRedux } from '@angular-redux/store';
import { InitialState } from './store/reducer';
import { ApplyCoupon } from './store/actions';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<InitialState>) {}

  getCoupon(coupon) {
    this.http.get(`${environment.baseUrl}/coupons?coupon=${coupon}`).subscribe((discount) => {
      if (discount) {
        this.ngRedux.dispatch(ApplyCoupon(discount));
      }
    });
  }
}
