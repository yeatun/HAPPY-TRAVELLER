import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

import { createContext, useState } from 'react';
import Book from './Components/Book/Book';
import Log from './Components/Log/Log';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookingPage from './Components/BookingPage/BookingPage';



export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] =useState({});
  return (
    <div className="App">
     
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      {/* <p>{loggedInUser.email}</p> */}
      <Router>
      <div>
      <nav className="navbar navbar-light bg-light justify-content-left nav">
                <Link to="/" className="navbar-brand">HAPPY TRAVELLER</Link>
                <Link to="/">Home</Link>
                <Link to="/book/:id">Book</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact"> Contact </Link>
                <p>{loggedInUser.email}</p>
            </nav>
        
     {/* <Link to="/">Home</Link>
            
          
         
          
            <Link to="/book/:id">Book</Link>
           
           
            <Link to="/login">Login</Link> */}
            
            
        
     
      

        
        <hr />
       
        
        <Switch>
          <Route exact path="/">
           <Home></Home></Route>
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}
          
            
         
          <PrivateRoute path="/book/:id">
           <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/bookingPage">
           <BookingPage></BookingPage>
          </PrivateRoute>
          <Route path ="/home">
            <Home></Home>
          </Route>
          <Route path ="/login">
          <Log></Log>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
     
    </div>
  );
}

export default App;
