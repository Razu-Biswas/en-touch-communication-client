import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Order from './Order';

function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  console.log(allOrders)
  useEffect(() => {
    const getAllOrders = async () => {
      const fetchOrders = await axios.get(`https://entouch-server.onrender.com/getOrders`);
      setAllOrders(fetchOrders.data);
      console.log(fetchOrders);
    }
    getAllOrders();
  }, [])
  const updateOrder = async (id, status) => {
    try {
      await axios.post(`https://entouch-server.onrender.com/orderStatus/${id}`, { status });

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">sL</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => <Order order={order} updateOrder={updateOrder} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Orders;