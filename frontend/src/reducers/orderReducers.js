import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_PAY_REQUEST,
    ORDER_PAY_FAIL,
    ORDER_PAY_SUCCESS,
    ORDER_PAY_RESET,
    ORDER_LIST_MY_REQUEST,
    ORDER_LIST_MY_SUCCESS,
    ORDER_LIST_MY_FAIL,
    ORDER_LIST_MY_RESET,
    ORDER_LIST_FAIL,
    ORDER_LIST_SUCCESS,
    ORDER_LIST_REQUEST,
    ORDER_DELIVER_FAIL,
    ORDER_DELIVER_SUCCESS,
    ORDER_DELIVER_REQUEST,
    ORDER_DELIVER_RESET,
    ORDER_CREATE_RESET,
    ORDER_PRICES_REQUEST,
    ORDER_PRICES_SUCCESS,
    ORDER_PRICES_FAIL,
    ORDER_SHIPPINGADRESS_REQUEST,
    ORDER_SHIPPINGADRESS_SUCCESS,
    ORDER_SHIPPINGADRESS_FAIL,
    ORDER_PAYMENTMETHOD_REQUEST,
    ORDER_PAYMENTMETHOD_SUCCESS,
    ORDER_PAYMENTMETHOD_FAIL,
  } from '../constants/orderConstants'
  
  export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_CREATE_REQUEST:
        return {
          loading: true,
        }
      case ORDER_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
          order: action.payload,
        }
      case ORDER_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case ORDER_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const orderDetailsReducer = (
    state = { loading: true, orderItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case ORDER_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case ORDER_DETAILS_SUCCESS:
        return {
          loading: false,
          order: action.payload,
        }
      case ORDER_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }
  
  export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_PAY_REQUEST:
        return {
          loading: true,
        }
      case ORDER_PAY_SUCCESS:
        return {
          loading: false,
          success: true,
        }
      case ORDER_PAY_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case ORDER_PAY_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_DELIVER_REQUEST:
        return {
          loading: true,
        }
      case ORDER_DELIVER_SUCCESS:
        return {
          loading: false,
          success: true,
        }
      case ORDER_DELIVER_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case ORDER_DELIVER_RESET:
        return {}
      default:
        return state
    }
  }
  
  
    export const orderPricesReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_PRICES_REQUEST:
        return {
          loading: true,
        }
      case ORDER_PRICES_SUCCESS:
        return {
          loading: false,
          success: true,
          order: action.payload,
        }
      case ORDER_PRICES_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
        
      default:
        return state   
    }
  }
  
  
  export const orderShippingAdressReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_SHIPPINGADRESS_REQUEST:
        return {
          loading: true,
        }
      case ORDER_SHIPPINGADRESS_SUCCESS:
        return {
          loading: false,
          success: true,
          order: action.payload,
        }
      case ORDER_SHIPPINGADRESS_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
        
      default:
        return state   
    }
  }
  
  export const orderPaymentMethodReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_PAYMENTMETHOD_REQUEST:
        return {
          loading: true,
        }
      case ORDER_PAYMENTMETHOD_SUCCESS:
        return {
          loading: false,
          success: true,
          order: action.payload,
        }
      case ORDER_PAYMENTMETHOD_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
        
      default:
        return state   
    }
  }
  
  
  export const orderListMyReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case ORDER_LIST_MY_REQUEST:
        return {
          loading: true,
        }
      case ORDER_LIST_MY_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        }
      case ORDER_LIST_MY_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      case ORDER_LIST_MY_RESET:
        return { orders: [] }
      default:
        return state
    }
  }
  
  export const orderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
      case ORDER_LIST_REQUEST:
        return {
          loading: true,
        }
      case ORDER_LIST_SUCCESS:
        return {
          loading: false,
          orders: action.payload,
        }
      case ORDER_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }
  
