import React from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function Order({ order, updateOrder }) {
  const { serviceName, price, quantity, email, status, _id } = order;
  return (
    <tr>
      <th>1</th>
      <th scope="row">{serviceName}</th>
      <th scope="row">{email}</th>
      <th scope="row">{price}</th>
      <th scope="row">{status}</th>
      <th scope="row">{quantity}</th>
      <th scope="row">
        <DropdownButton id="dropdown-item-button" title="Order Status">
          <Dropdown.Item as="button" onClick={() => updateOrder(_id, 'confirm')}>Confirm</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => updateOrder(_id, 'processing')}>Processing</Dropdown.Item>
          <Dropdown.Item as="button" onClick={() => updateOrder(_id, 'done')}>Done</Dropdown.Item>
        </DropdownButton>
      </th>

    </tr>
  )
}

export default Order;