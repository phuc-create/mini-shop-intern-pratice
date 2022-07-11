import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { CartPage, ProductsPage, WelcomePage } from './components/pages'

function App() {
  return (
    <div className="App">
      <h1> Welcome to my shop</h1>
      <Link to="/">Back to Home</Link> <br />
      <Link to="/products">Products</Link><br />
      <Link to="/cart">Cart</Link>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
