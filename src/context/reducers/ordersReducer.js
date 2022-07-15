import { storeType } from "../constants"

export const orderState = {
  orders: [],
  isCreateOrder: false,
  isCreateOrderSuccess: false,
  isCreateOrderFailure: false,
  errors: {}
}

export const OrdersReducers = (state = orderState, action) => {
  switch (action.type) {
    case storeType.CREATE_ORDER:
      return {
        ...state,
        isCreateOrder: true,
        isCreateOrderSuccess: false,
        isCreateOrderFailure: false,
      }
    case storeType.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isCreateOrder: false,
        isCreateOrderSuccess: true,
        isCreateOrderFailure: false,
        orders: [...state.orders, action.payload]
      }
    case storeType.CREATE_ORDER_FAIL:
      return {
        ...state,
        isCreateOrder: false,
        isCreateOrderSuccess: false,
        isCreateOrderFailure: true,
        errors: { err: action.payload.err }
      }

    default:
      return state
  }
}
