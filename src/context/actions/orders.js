import { storeType } from "../constants"

const CREATE_ORDER = async (dispatch, payload) => {
  dispatch({ type: storeType.CREATE_ORDER })
  try {
    dispatch({ type: storeType.CREATE_ORDER_SUCCESS, payload })

  } catch (error) {
    dispatch({
      type: storeType.CREATE_ORDER_FAIL,
      payload: { err: error }
    })
  }
}


export {
  CREATE_ORDER
}
