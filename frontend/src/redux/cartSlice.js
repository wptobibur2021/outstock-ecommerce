import { createSlice } from '@reduxjs/toolkit'
import { Store } from 'react-notifications-component';
const initialState = {
    carts: [],
    cartQty: 0,
    total: 0
}
const notification = {
    title: "Wonderful!",
    message: "Configurable",
    type: "success",
    insert: "top",
    container: "top-right",
    dismiss: {
        duration: 5000,
        onScreen: true
    },
    animationIn: ["animate__animated animate__fadeIn"],
    animationOut: ["animate__animated animate__fadeOut"]
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCarts: (state, action) => {
            console.log('Paylod: ', action.payload)
            const itemIndex = state.carts.findIndex((item) => item._id === action.payload._id)
            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += action.payload.qty
                Store.addNotification({
                    ...notification,
                    message: `Increment ${action.payload.name} quantity`,
                    type: "info",
                });
                console.log('Allredy:', itemIndex)
            } else {
                state.carts.push(action.payload)
                state.cartQty += 1
                Store.addNotification({
                    ...notification,
                    message: `${action.payload.name} added to cart successfully`,
                    type: "success",
                });
            }
            state.total += action.payload.price * action.payload.qty
        },
        removeCart: (state, action) => {
            console.log('Remove ID: ', action.payload);
            const newArray = state.carts.filter((cart) => cart._id !== action.payload._id)
            state.carts = newArray
            state.cartQty -= 1
            Store.addNotification({
                ...notification,
                message: `${action.payload.name} remove from cart item`
            })
            const amount = state.total - action.payload.qty * action.payload.price
            state.total = amount;
        },
        resetCart: (state) => {
            state = initialState
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCarts, removeCart, resetCart } = cartSlice.actions
export default cartSlice.reducer