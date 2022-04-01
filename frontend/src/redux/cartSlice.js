import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    carts: [],
    cartQty: 0,
    total: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCarts: (state, action) => {
            state.carts.push(action.payload)
            state.cartQty += 1
            state.total += action.payload.price * action.payload.qty
        },
        removeCart: (state, action) => {
            console.log("Remove ID")
        },
        resetCart: (state) => {
            state = initialState
        },
    },
})

// Action creators are generated for each case reducer function
export const { addCarts, removeCart, resetCart } = cartSlice.actions
export default cartSlice.reducer