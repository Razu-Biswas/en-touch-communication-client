import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <ul className='d-flex flex-column p-5'>
        <Link to='/admin/dashboard/orders' className='my-3 btn btn-success'>
          All Order
        </Link>
        <Link to='/admin/dashboard/addServices' className='my-3 btn btn-danger'>
          Add Service
        </Link>
        <Link to='/admin/dashboard/addadmin' className='my-3 btn btn-success'>
          Manage User
        </Link>
        <Link to='/admin/dashboard/adminForm' className='my-3 btn btn-danger'>
          Add Admin Form
        </Link>
        <Link to='/admin/dashboard/service' className='my-3 btn btn-success'>
          Manage Service
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar;