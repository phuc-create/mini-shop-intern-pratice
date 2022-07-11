import React from 'react'
import { useStoreContext } from '../../../context'
import Product from '../ProductPage/Product'

const CartPage = () => {
  const { state } = useStoreContext()
  return (
    <table border={1}>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {state.cart.map(product => {
          return (
            <Product product={product} key={product.id} inCart />
          )
        })}
      </tbody>
    </table>
  )
}

export default CartPage
