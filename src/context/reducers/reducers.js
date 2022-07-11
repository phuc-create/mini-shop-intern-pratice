import { storeType } from "../constants"

export const initalizeState = {
  user: 'Anonymous',
  products: [{
    id: 1232,
    name: "Water Melon Smoothie",
    price: 93000,
    quantity: 22
  }, {
    id: 2321,
    name: "Orange juice",
    price: 123000,
    quantity: 101
  }, {
    id: 3122,
    name: "Chery Smoothie",
    price: 321000,
    quantity: 32
  }],
  cart: [],
  errors: null,
  orders: [],

  //handle add product
  isAddingProduct: false,
  isAddedProduct: false,
  isAddProductFail: false,

  //handle add to cart
  isAddingToCart: false,
  isAddToCartSuccess: false,
  isAddToCartFail: false,

  //handle add to cart
  isRemoving: false,
  isRemoveSuccess: false,
  isRemoveFail: false,
  //handle add to cart
  isUpdating: false,
  isUpdateSuccess: false,
  isUpdateFail: false,
}

export const StoreReducers = (state, action) => {
  switch (action.type) {
    case storeType.ADD_PRODUCT:
      return {
        ...state,
        isAddingProduct: true,
        isAddedProduct: false,
        isAddProductFail: false,
      }
    case storeType.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isAddingProduct: false,
        isAddedProduct: true,
        isAddProductFail: false,
        products: [...state.products, action.payload]
      }
    case storeType.ADD_PRODUCT_FAIL:
      return {
        ...state,
        isAddingProduct: false,
        isAddedProduct: false,
        isAddProductFail: true,
        errors: action.payload.errors
      }
    case storeType.ADD_CART:
      return {
        ...state,
        isAddingToCart: true,
        isAddToCartSuccess: false,
        isAddToCartFail: false,
      }
    case storeType.ADD_CART_SUCCESS:
      const cartIdx = state.cart.map(v => v.id).indexOf(action.payload.id)
      const prdIdx = state.products.map(v => v.id).indexOf(action.payload.id)
      if (cartIdx >= 0) {
        state.cart[cartIdx].quantity = +state.cart[cartIdx].quantity + +action.payload.quantity
        state.products[prdIdx].quantity -= +action.payload.quantity
      } else {
        state.cart = [...state.cart, action.payload]
        state.products[prdIdx].quantity -= +action.payload.quantity
      }
      return {
        ...state,
        isAddingToCart: false,
        isAddToCartSuccess: true,
        isAddToCartFail: false
      }
    case storeType.REMOVE:
      return {
        ...state,
        isRemoving: true,
        isRemoveSuccess: false,
        isRemoveFail: false,
      }
    case storeType.REMOVE_SUCCESS:
      const getIdxPrd = state.products.map(v => v.id).indexOf(action.payload.id)
      state.products[getIdxPrd].quantity += action.payload.quantity
      return {
        ...state,
        isRemoving: false,
        isRemoveSuccess: true,
        isRemoveFail: false,
        cart: state.cart.filter(v => v.id !== action.payload.id)
      }
    case storeType.REMOVE_FAIL:
      return {
        ...state,
        isRemoving: false,
        isRemoveSuccess: false,
        isRemoveFail: true,
        errors: action.payload.errors
      }
    case storeType.REMOVE_PRODUCT:
      return {
        ...state,
        isRemoving: true,
        isRemoveSuccess: false,
        isRemoveFail: false,
      }
    case storeType.REMOVE_PRODUCT_SUCCESS:
      return {
        ...state,
        isRemoving: false,
        isRemoveSuccess: true,
        isRemoveFail: false,
        products: state.products.filter(product => product.id !== action.payload)
      }
    case storeType.REMOVE_PRODUCT_FAIL:
      return {
        ...state,
        isRemoving: false,
        isRemoveSuccess: false,
        isRemoveFail: true,
        errors: action.payload.errors
      }
    case storeType.UPDATE_PRODUCT:
      const idxUpdate = state.products.map(v => v.id).indexOf(action.payload.id)
      state.products[idxUpdate] = action.payload
      return {
        ...state,
        isUpdating: true,
        isUpdateSuccess: false,
        isUpdateFail: false,
      }
    case storeType.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        isUpdateSuccess: true,
        isUpdateFail: false,
        products: state.products.filter(product => product.id !== action.payload)
      }
    case storeType.UPDATE_PRODUCT_FAIL:
      return {
        ...state,
        isUpdating: false,
        isUpdateSuccess: false,
        isUpdateFail: true,
        errors: action.payload.errors
      }

    default:
      return {
        ...initalizeState
      }
  }
}
