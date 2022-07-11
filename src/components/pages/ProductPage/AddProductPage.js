import React from 'react'
import { Field, Form, Formik } from 'formik'
const AddProductPage = ({ onSubmitAddProduct }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          price: '',
          quantity: '',
        }}

        onSubmit={(values) => onSubmitAddProduct(values)}
      >
        <Form>
          <label htmlFor="name">Name Product :</label>
          <Field id="name" name="name" placeholder="Coca Cola" />
          <br />
          <label htmlFor="price">Price : </label>
          <Field type="number" id="price" name="price" placeholder="10000" />
          <br />
          <label htmlFor="quantity">Quantity Available</label>
          <Field
            id="quantity"
            name="quantity"
            type="number"
            placeholder="10"
          />
          <br />
          <button type="submit">Add Product</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddProductPage
