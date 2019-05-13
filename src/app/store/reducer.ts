import { ActionTypes } from './actions';
import { Product } from '../product/product';

export interface InitialState {
    items: Array<Product>;
    cart: Array<Product>;
}

export const initialState = {
    items: [],
    cart: []
}

export function ShopReducer(state = initialState, action) {
    switch (action.type) {
      case ActionTypes.LoadSuccess:
        return {
          ...state,
          items: [...action.payload]
        };
      case ActionTypes.Add:
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      case ActionTypes.Remove:
        return {
          ...state,
          cart: [...state.cart.filter(item => item.name !== action.payload.name)]
        };
      case ActionTypes.ApplyCoupon:
        return {
          ...state,
          items: state.items.map((element) => {
            let priceReduction;
            if (action.payload.amount_off) {
              priceReduction = action.payload.amount_off / 100;
              return {...element, price: (element.price - priceReduction).toFixed(2)};
            } else if (action.payload.percent_off) {
              priceReduction = action.payload.percent_off / 100;
              return {...element, price: (element.price - element.price * priceReduction).toFixed(2)};
            }
            return element;
          })
        };

      default:
        return state;
    }
  }