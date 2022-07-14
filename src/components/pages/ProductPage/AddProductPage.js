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
          <table border={1}>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name">Name Product :</label>
                </td>
                <td>
                  <Field id="name" name="name" />
                </td>

              </tr>
              <tr>
                <td>
                  <label htmlFor="price">Price : </label>
                </td>
                <td>
                  <Field type="number" id="price" name="price" />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="quantity">Quantity Available</label>
                </td>
                <td>
                  <Field
                    id="quantity"
                    name="quantity"
                    type="number"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit">Add Product</button>
        </Form>
      </Formik>
    </div>
  )
}

export default AddProductPage
