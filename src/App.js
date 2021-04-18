import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';

import AddServices from './Components/Admin/AddServices/AddServices';
import Checkout from './Components/Home/Checkout/Checkout';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import PaymentCard from './Components/Payment/PaymentCard';
import UserDashboard from './Components/UserDashboard/UserDashboard/UserDashboard';
import AdminDashboard from './Components/AdminDasboard/AdminDashboard/AdminDashboard';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
    
      <ToastContainer />
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Services">
          <AddServices/>
        </Route>
        <PrivateRoute path="/checkout/:id">
          <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute path="/payment">
          <PaymentCard></PaymentCard>
        </PrivateRoute>
        <PrivateRoute path="/user/dashboard">
          <UserDashboard />
        </PrivateRoute>
        <PrivateRoute path="/admin/dashboard">
          <AdminDashboard />
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
