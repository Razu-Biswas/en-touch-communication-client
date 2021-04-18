import React from 'react'


function Service({ deleteService, service }) {
  const { agent, image, price, type, _id } = service
  return (
    <tr>
      <th scope="row"><img src={image} alt="" style={{ height: '75px' }} /></th>
      <th scope="row">{agent}</th>
      <th scope="row">{price}</th>
      <th scope="row">{price}</th>
      <th scope="row">{type}</th>
      <th scope="row">
        <button onClick={() => deleteService(_id)} className="btn btn-danger"> Delete</button>
      </th>

    </tr>
  )
}

export default Service;