import { storeType } from "./constants"

const ADD_PRODUCT = async (dispatch, payload) => {
  dispatch({ type: storeType.ADD_PRODUCT })
  try {
    const product = payload
    dispatch({ type: storeType.ADD_PRODUCT_SUCCESS, payload: product })

  } catch (error) {
    dispatch({
      type: storeType.ADD_PRODUCT_FAIL,
      payload: { errors: error }
    })
  }
}

const ADD_CART = async (dispatch, payload) => {
  dispatch({ type: storeType.ADD_CART })
  try {
    const product = payload
    dispatch({ type: storeType.ADD_CART_SUCCESS, payload: product })

  } catch (error) {
    dispatch({
      type: storeType.ADD_CART_FAIL,
      payload: { errors: error }
    })
  }
}
const REMOVE_FROM_CART = async (dispatch, payload) => {
  dispatch({ type: storeType.REMOVE })
  try {
    const product = payload
    dispatch({ type: storeType.REMOVE_SUCCESS, payload: product })

  } catch (error) {
    dispatch({
      type: storeType.REMOVE_FAIL,
      payload: { errors: error }
    })
  }
}
export {
  ADD_PRODUCT,
  ADD_CART,
  REMOVE_FROM_CART
}
