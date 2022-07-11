## hello world
- list product in store
- add product
- add to cart
- check out


# Product include
- id (format: date-time now + (math.random() + "").slice(5,9))
- name
- price
- quantity

# Cart include
- idCart (format: date-time now + (math.random() + "").slice(5,9))
- details {
  product {
    - id (format: date-time now + (math.random() + "").slice(5,9))
    - name
    - price
    - quantity
  }
}

# Checkout -> Order include
- idOrder (format: date-time now + (math.random() + "").slice(5,9))
- product {
    - id (format: date-time now + (math.random() + "").slice(5,9))
    - name
    - price
    - quantity
}
- totalPrice
- createdAt
