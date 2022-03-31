import { createSlice } from '@reduxjs/toolkit'
// Create a new slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: [],
        cartQty: 0,
        total: 0
    },
    reducers: {
        addCarts: (state, action) => {
            state.carts.push(action.payload);
            state.cartQty += 1
            state.total = action.payload.price * action.payload.qty
        },
        reset: (state) => {
            state = initialState
        }
    }

})