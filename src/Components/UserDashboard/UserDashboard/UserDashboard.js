import React from 'react'
import { Route, Switch } from 'react-router'
import Orders from '../Orders/Orders'
import Review from '../Review/Review'
import Sidebar from '../Sidebar/Sidebar'


function UserDashboard() {
  return (
    <div>
      <div className="row g-0">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <Switch>

            <Route path='/user/dashboard/order'>
              <Orders />
            </Route>
            <Route path='/user/dashboard/review'>
              <Review />
            </Route>
          </Switch>
        </div>

      </div>
    </div>
  )
}

export default UserDashboard;