export enum ActionTypes {
    Add = '[Product] Add to cart',
    Remove = '[Product] Remove from cart',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success',
    ApplyCoupon = '[Products] Coupon applied'
}

export const AddToCart = payload => ({
    type: ActionTypes.Add,
    payload
});

export const RemoveFromCart = payload => ({
    type: ActionTypes.Remove,
    payload
});

export const GetItems = () => ({
    type: ActionTypes.LoadItems
});

export const LoadItems = payload => ({
    type: ActionTypes.LoadSuccess,
    payload
});

export const ApplyCoupon = payload => ({
    type: ActionTypes.ApplyCoupon,
    payload
});

