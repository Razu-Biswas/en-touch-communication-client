import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { toast } from 'react-toastify';

function AdminForm() {
  const [adminEmail, setAdminEmail] = useState('');
  const submitAdmin = async () => {
    const adminAdd = await axios.get(`https://warm-temple-20429.herokuapp.com/addAdmin/${adminEmail}`);
    console.log(adminAdd)
    if (adminAdd.data.adminEmail) {
      toast.success('Admin added Successfully');
    } else {
      toast.error('Something Want Wrong');
    }
  }
  return (
    <div className='w-50'>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setAdminEmail(e.target.value)} />
      </Form.Group>
      <button onClick={submitAdmin} className='btn btn-success'> Add Admin</button>
    </div>
  )
}

export default AdminForm;