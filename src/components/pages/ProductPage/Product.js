import React, { useState } from 'react'
import { useStoreContext } from '../../../context'
import { ADD_CART, REMOVE_FROM_CART } from '../../../context/actions'

const Product = ({ product, inCart }) => {
  const [quantityBuy, setQuantityBuy] = useState(1)
  const [addCartSuccess, setAddCartSuccess] = useState(false)
  const { state, dispatch } = useStoreContext()
  const handleAddToCart = () => {
    const productToCart = { ...product, quantity: +quantityBuy }
    ADD_CART(dispatch, productToCart)
    setAddCartSuccess(true)
    setTimeout(() => setAddCartSuccess(false), 1000)
  }

  const handleRemoveFromCart = () => {
    REMOVE_FROM_CART(dispatch, product)
  }
  const isEnableDelete = state.cart.find(v => v.id === product.id)
  const isEnableUpdate = state.cart.find(v => v.id === product.id)
  const cartHandler = () => {
    return !inCart ?
      <>
        <td>
          <input type="number" min="1" max={product.quantity} value={quantityBuy} onChange={(e) => setQuantityBuy(e.target.value)} />
        </td>
        <td>
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button disabled={isEnableDelete}>Delete</button>
          <button disabled={isEnableUpdate}>Update</button>
        </td>
      </> :
      <td>
        <button onClick={handleRemoveFromCart}>Remove</button>
      </td>
  }
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      {addCartSuccess ? <td colSpan={2} style={{ color: 'red' }}>Added To Cart</td> : cartHandler()}
    </tr>

  )
}

export default Product
