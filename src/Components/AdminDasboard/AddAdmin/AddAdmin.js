import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminUsers from './AdminUsers';




function AddAdmin() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const fetchOrders = await axios.get(`https://entouch-server.onrender.com/allusers`);
      setAllUsers(fetchOrders.data);
    }
    getAllOrders();
  }, [])
  const makeAdmin = async (user) => {
    const updateUser = await axios.get(`https://entouch-server.onrender.com/makeAdmin/${user}`);
    console.log(updateUser)
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user) => <AdminUsers user={user} makeAdmin={makeAdmin} />)}
        </tbody>
      </table>
    </div>
  )
}

export default AddAdmin;