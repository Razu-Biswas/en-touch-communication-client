import React from 'react'

function Order({ order }) {
  const { serviceName, status, imgUrl, price, quantity } = order;
  return (
    <tr>
      <th>1</th>
      <th scope="row">{serviceName}</th>
      <th scope="row">{price}</th>
      <th scope="row">{status}</th>
      <th scope="row">{quantity}</th>

    </tr>
  )
}

export default Order;
