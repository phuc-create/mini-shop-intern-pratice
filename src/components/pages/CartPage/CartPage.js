import React, { useCallback, useEffect, useState } from 'react'
import { useStoreContext } from '../../../context'
import { CREATE_ORDER } from '../../../context/actions'
import { CLEAR_CART } from '../../../context/actions/actions'
import { currency } from '../../../utils/utils'
import Product from '../ProductPage/Product'

const CartPage = () => {
  const { base, order } = useStoreContext()
  const [openDraft, setOpenDraft] = useState(false)
  const onCreateOrder = () => setOpenDraft(!openDraft)

  const totaLAmout = useCallback(() => {
    let total = (base[0].cart || []).map(p => p.price * p.quantity).reduce((a, b) => a + b, 0)
    return total
  }, [base])
  const orderID = (Math.random() + "").slice(4, 8)
  const cart = base[0].cart
  const total = totaLAmout()
  const timeStamp = new Date().toISOString()
  const inforOrder = {
    orderId: orderID,
    products: cart,
    totalAmount: total,
    address: "Pending update",
    createdAt: timeStamp
  }
  const handleCreateOrder = () => {
    CREATE_ORDER(order[1], inforOrder)
    CLEAR_CART(base[1])
    setOpenDraft(false)
  }
  useEffect(() => {
    if (cart?.length <= 0) {
      setOpenDraft(false)
    }
  }, [base, cart?.length])

  return (
    <>
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
          {cart && cart.map(product => {
            return (
              <Product product={product} key={product.id} inCart />
            )
          })}
        </tbody>


      </table>
      {openDraft && <PreviewOrder inforOrder={inforOrder} />}

      {!openDraft && cart?.length > 0 && <button onClick={onCreateOrder}>Create Order</button>}
      {openDraft && cart?.length > 0 && <button onClick={handleCreateOrder}>Submit Order</button>}
      <pre>
        {JSON.stringify(order[0].orders, null, 2)}
      </pre>
    </>
  )
}
const PreviewOrder = ({ inforOrder = {} }) => {

  const { products, totalAmount, createdAt } = inforOrder

  return (
    <div style={{ margin: "4rem auto", width: "500px" }}>
      this is order
      <table border={1} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
          </tr>
        </thead>
        <tbody>
          {products.map((prod, idx) => {
            return (
              <tr key={idx}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{currency(prod.price)}</td>
                <td>{prod.quantity}</td>
                <td>{currency(prod.price * prod.quantity)}</td>
              </tr>
            )
          })}
          <tr>
            <td colSpan={4}>
              <span> Total Amount : {currency(totalAmount)}</span>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <span> Created at : {createdAt}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CartPage

