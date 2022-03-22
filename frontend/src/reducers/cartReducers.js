import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../actions/cartTypes'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM: {
      const item = action.payload
      // Is item already in cart?
      // const qty = item.qty + 1
      const existItem = state.cartItems.find(pro => pro.product === item.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((prod) =>
            prod.product === existItem.product ? item : prod
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    } // end CART_ADD_ITEM

    case CART_REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(prod => prod.product !== action.payload)
      }
    } // end CART_REMOVE_ITEM

    default:
      return state
  }
}
