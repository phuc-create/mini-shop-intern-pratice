import { storeType } from "../constants"

export const initalizeState = {
  user: 'Anonymous',
  products: [{
    id: 1,
    name: "Product1",
    price: 20000,
    quantity: 20
  }, {
    id: 2,
    name: "Product2",
    price: 32000,
    quantity: 12
  }, {
    id: 3,
    name: "Product3",
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
  isRemovingToCart: false,
  isRemoveToCartSuccess: false,
  isRemoveToCartFail: false,
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
        isRemovingToCart: true,
        isRemoveToCartSuccess: false,
        isRemoveToCartFail: false,
      }
    case storeType.REMOVE_SUCCESS:
      const getIdxPrd = state.products.map(v => v.id).indexOf(action.payload.id)
      state.products[getIdxPrd].quantity += action.payload.quantity
      return {
        ...state,
        isRemovingToCart: false,
        isRemoveToCartSuccess: true,
        isRemoveToCartFail: false,
        cart: state.cart.filter(v => v.id !== action.payload.id)
      }
    case storeType.REMOVE_FAIL:
      return {
        ...state,
        isRemovingToCart: false,
        isRemoveToCartSuccess: false,
        isRemoveToCartFail: true,
        errors: action.payload.errors
      }

    default:
      return {
        ...initalizeState
      }
  }
}
