import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Service from './Service';

function Services() {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    const getAllOrders = async () => {
      const fetchOrders = await axios.get(`https://warm-temple-20429.herokuapp.com/services`);
      setAllServices(fetchOrders.data);
      console.log(fetchOrders);
    }
    getAllOrders();
  }, [])
  const deleteService = async (id) => {
    try {
      const deletedService = await axios.get(`https://warm-temple-20429.herokuapp.com/deleteService/${id}`);
      const updatedService = allServices.filter((service) => service._id !== id);
      toast.success(deletedService.data.message);
      setAllServices(updatedService)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {allServices.map((service) => <Service service={service} deleteService={deleteService} />)}
        </tbody>
      </table>
    </div>
  )
}

export default Services