import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ServiceContext } from '../../Context/ServiceContext';
import Order from './Order';


function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const { user } = useContext(ServiceContext);
  console.log(user);
  const { email } = user;
  useEffect(() => {
    const getAllOrders = async () => {
      const fetchOrders = await axios.get(`https://entouch-server.onrender.com/orderByEmail/${email}`);
      setAllOrders(fetchOrders.data);
      console.log(fetchOrders);
    }
    getAllOrders();
  }, [email]);

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">sL</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order) => <Order order={order} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Orders;