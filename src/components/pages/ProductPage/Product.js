import React, { useState } from 'react'
import { useStoreContext } from '../../../context'
import { ADD_CART, DELETE_PRODUCT, REMOVE_FROM_CART } from '../../../context/actions'
import { currency } from '../../../utils/utils'

const Product = ({ product, inCart, update }) => {
  const [quantityBuy, setQuantityBuy] = useState(1)
  const [addCartSuccess, setAddCartSuccess] = useState(false)

  const { base, order } = useStoreContext()

  const handleAddToCart = () => {
    const productToCart = { ...product, quantity: +quantityBuy }
    ADD_CART(base[1], productToCart)
    setAddCartSuccess(true)
    setTimeout(() => setAddCartSuccess(false), 1000)
  }

  const handleRemoveProduct = (productID) => {
    DELETE_PRODUCT(base[1], productID)
  }

  const handleRemoveFromCart = () => {
    REMOVE_FROM_CART(base[1], product)
  }

  const isEnableDelete = base[0].cart.find(v => v.id === product.id)
  const isEnableUpdate = base[0].cart.find(v => v.id === product.id)
  const isEnableAddToCart = product.quantity < 1

  const cartHandler = () => {
    return !inCart ?
      <>
        <td>
          <input type="number" min="1" max={product.quantity} value={quantityBuy} onChange={(e) => setQuantityBuy(e.target.value)} />
        </td>
        <td>
          <button onClick={handleAddToCart} disabled={isEnableAddToCart}>Add to Cart</button>
          <button disabled={isEnableDelete} onClick={() => handleRemoveProduct(product.id)}>Delete</button>
          <button disabled={isEnableUpdate} onClick={() => update(product)}>Update</button>
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
      <td>{currency(product.price)}</td>
      <td>{product.quantity}</td>
      {addCartSuccess ? <td colSpan={2} style={{ color: 'red' }}>Added To Cart</td> : cartHandler()}
    </tr>

  )
}

export default Product
