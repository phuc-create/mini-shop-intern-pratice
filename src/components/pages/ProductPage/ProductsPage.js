import React, { useState } from 'react'
import { useStoreContext } from '../../../context'
import { ADD_PRODUCT } from '../../../context/actions'
import AddProductPage from './AddProductPage'
import ProductsList from './ProductsList'

const ProductsPage = () => {
  const [addPd, setAddPd] = useState(false)
  const { dispatch } = useStoreContext()

  const onSubmitAddProduct = (values) => {
    const generateIDPr = (Math.random() + "").slice(5, 9)
    const product = { id: generateIDPr, ...values }
    console.log(product)
    ADD_PRODUCT(dispatch, product)
    setAddPd(!addPd)
  }

  return (
    <div className='products-page'>
      <button onClick={() => setAddPd(!addPd)}>{addPd ? 'Back' : 'Add product'}</button>
      {addPd ?
        (<AddProductPage onSubmitAddProduct={onSubmitAddProduct} />)
        :
        (<ProductsList />)
      }
    </div>
  )
}

export default ProductsPage
