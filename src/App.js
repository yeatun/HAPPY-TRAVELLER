import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <div className="App">
     
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <p>{loggedInUser.email}</p>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
           
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path ="/home">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
     
    </div>
  );
}

export default App;
