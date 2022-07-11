import { Field, Form, Formik } from "formik"


const UpdateProductPage = ({ product, onSubmitUpdateProduct }) => {
  return (
    <div>
      <br />
      <br />
      <Formik
        initialValues={{
          name: product.name,
          price: product.price,
          quantity: product.quantity,
        }}

        onSubmit={(values) => onSubmitUpdateProduct(values)}
      >
        <Form>
          <table border={1}>
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

          </table>
          <button type="submit">Update Product</button>
        </Form>
      </Formik>
    </div>
  )
}

export default UpdateProductPage
