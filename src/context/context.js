import React, { createContext, useContext, useReducer } from "react"
import { StoreReducers, initalizeState } from './reducers'

const StoreContext = createContext(null)

export const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducers, initalizeState)
  const reducer = {
    state,
    dispatch
  }
  return (
    <StoreContext.Provider value={reducer}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)

