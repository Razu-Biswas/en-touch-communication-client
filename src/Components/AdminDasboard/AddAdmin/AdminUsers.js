import React from 'react'

function AdminUsers({ user, makeAdmin }) {
  const { email, name, role, } = user
  return (
    <tr>
      <th scope="row">{name}</th>
      <th scope="row">{email}</th>
      <th scope="row">{role}</th>
      <th scope="row">
        <button class="btn btn-info" onClick={() => makeAdmin(email)}> Make A Admin</button>
      </th>
    </tr>
  )
}

export default AdminUsers;