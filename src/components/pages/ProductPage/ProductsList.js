import React from 'react'
import { useStoreContext } from '../../../context/context'
import Product from './Product'

const ProductsList = ({ update }) => {
  const { base } = useStoreContext()
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
        {base[0].products?.map(product => {
          return (
            <Product product={product} key={product.id} update={update} />
          )
        })}
      </tbody>
    </table>
  )
}

export default ProductsList
