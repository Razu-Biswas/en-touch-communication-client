import React from 'react'
import { Route, Switch } from 'react-router'
import AddServices from '../../Admin/AddServices/AddServices';
import AddAdmin from '../AddAdmin/AddAdmin';
import AdminForm from '../AdminForm/AdminForm';
import Orders from '../Orders/Orders';
import Services from '../Service/Services';
import Sidebar from '../Sidebar/Sidebar';


function AdminDashboard() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Switch>

            <Route path='/admin/dashboard/orders'>
              <Orders />
            </Route>
            <Route path='/admin/dashboard/addServices'>
              <AddServices />
            </Route>
            <Route path='/admin/dashboard/addadmin'>
              <AddAdmin />
            </Route>
            <Route path='/admin/dashboard/adminForm'>
              <AdminForm />
            </Route>
            <Route path='/admin/dashboard/service'>
              <Services />
            </Route>
          </Switch>
        </div>

      </div>
    </div>
  )
}

export default AdminDashboard;