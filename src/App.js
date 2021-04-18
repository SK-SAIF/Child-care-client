import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Admin/Admin/Admin';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import UserLogin from './Components/UserLogin/UserLogin';
import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();
export const PaymentContext=createContext();

function App() {
  const [user, setUser] = useState();
  const [paymentInfo,setPaymentInfo]=useState();
  //console.log(user);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <PaymentContext.Provider value={[paymentInfo,setPaymentInfo]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/Admin">
            <Admin></Admin>
          </Route>
          <Route path="/Dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/Login">
            <UserLogin></UserLogin>
          </Route>
        </Switch>

      </Router>
      </PaymentContext.Provider>
    </UserContext.Provider>

  );
}

export default App;
