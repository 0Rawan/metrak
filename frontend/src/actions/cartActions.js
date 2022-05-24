import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_INFORMATION,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const addToCart = (todo) => async (dispatch, getState) => {

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: todo._id,
      name: todo.text,
      description: todo.description,
      quantity: todo.quantity,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const savePaymentInformation = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_INFORMATION,
    payload: data,
  })

  localStorage.setItem('paymentInformation', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}
