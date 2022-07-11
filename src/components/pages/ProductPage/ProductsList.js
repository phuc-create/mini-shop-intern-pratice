import React from 'react'
import { useStoreContext } from '../../../context/context'
import Product from './Product'

const ProductsList = () => {
  const { state } = useStoreContext()
  return (
    <table border={1}>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Choose quantity</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {state.products.map(product => {
          return (
            <Product product={product} key={product.id} />
          )
        })}
      </tbody>
    </table>
  )
}

export default ProductsList
