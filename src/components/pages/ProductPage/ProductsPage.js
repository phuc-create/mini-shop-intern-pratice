import React, { useState } from 'react'
import { useStoreContext } from '../../../context'
import { ADD_PRODUCT, UPDATE_PRODUCT } from '../../../context/actions'
import AddProductPage from './AddProductPage'
import ProductsList from './ProductsList'
import UpdateProductPage from './UpdateProductPage'

const ProductsPage = () => {
  const [addPd, setAddPd] = useState(false)
  const [updatePrd, setUpdatePrd] = useState({ update: false, product: {} })
  const { base, order } = useStoreContext()

  const onSubmitAddProduct = (values) => {
    const generateIDPr = (Math.random() + "").slice(5, 9)
    const product = { id: generateIDPr, ...values }
    console.log(product)
    ADD_PRODUCT(base[1], product)
    setAddPd(!addPd)
  }

  const onSubmitUpdateProduct = (values) => {
    UPDATE_PRODUCT(base[1], values)
  }

  const updateProduct = (product = {}) => {
    setUpdatePrd({ update: !updatePrd.update, product: product })
    console.log(product, updatePrd)
  }

  return (
    <div className='products-page'>
      <button onClick={() => setAddPd(!addPd)}>{addPd ? 'Back' : 'Add product'}</button>
      {addPd ?
        (<AddProductPage onSubmitAddProduct={onSubmitAddProduct} />)
        :
        (<ProductsList update={updateProduct} />)
      }
      {updatePrd.update
        ? <UpdateProductPage
          onSubmitUpdateProduct={onSubmitUpdateProduct}
          product={updatePrd.product}
        />
        : <></>}
    </div>
  )
}

export default ProductsPage
