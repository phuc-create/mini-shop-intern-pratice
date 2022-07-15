import React, { createContext, useContext, useMemo, useReducer } from "react"
import { StoreReducers, initState, OrdersReducers, orderState } from './reducers'

const StoreContext = createContext(null)

export const StoreContextProvider = ({ children }) => {
  /*const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce( // use for..in loop, if you prefer it
      (acc, prop) => ({
        ...acc,
        [prop]: slices[prop](acc[prop], action),
      }),
      state
    )
  const rootReducers = combineReducers({ StoreReducers, OrdersReducers })
  const initStates = { initState, orderState }
  const [state, dispatch] = useReducer(rootReducers, initStates)
  const store = useMemo(() => { return { state, dispatch } }, [state])
  const reducer = store*/
  const base = useReducer(StoreReducers, initState)
  const order = useReducer(OrdersReducers, orderState)
  const reducer = {
    base,
    order
  }
  return (
    <StoreContext.Provider value={reducer}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)

