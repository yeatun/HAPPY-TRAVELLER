import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
const Log = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [newUser,setNewUser] =useState(false);
  const [user,setUser] =useState({
    inSignedIn : false,
    name : '',
    email : '',
    password: '',
    photo : ''

  })
  const handleBlur = (event) =>{
    
    // console.log(event.target.name,event.target.value);\
    let isFieldValid =true;
    if(event.target.name === 'email'){
         isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
       
    }
    if(event.target.name === 'password'){
      const isPasswordValid = event.target.value.length>6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid =isPasswordValid && passwordHasNumber;
    }
      if(isFieldValid){
        const newUserInfo ={...user};
        
        newUserInfo [event.target.name] = event.target.value; 
        setUser (newUserInfo);
        
      }
}
const handleSubmit = (event) =>{
 
if(newUser && user.email && user.password){  firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
.then(result => {

 const newUserInfo ={...user};
 newUserInfo.error ='';
 newUserInfo.success = true;
 setUser(newUserInfo);
})
.catch((error) => {
  const newUserInfo ={...user};
  newUserInfo.error = error.message;
  newUserInfo.success = false;
  setUser(newUserInfo);
 
 
  // ..
});
    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
.then(result => {
  // Signed in
  const  {displayName, email} = result.user;
    const signedInUser = {displayName,email};
  const newUserInfo ={...user};
  newUserInfo.error ='';
  newUserInfo.success = true;
  setUser(newUserInfo);
 
 setLoggedInUser(signedInUser);
        history.replace(from);
  
  // ...
})
.catch((error) => {
  const newUserInfo ={...user};
  newUserInfo.error = error.message;
  newUserInfo.success = false;
  setUser(newUserInfo);
  
});
    }
    event.preventDefault();
}

const  updateUserName = name =>{
  const user = firebase.auth().currentUser;

user.updateProfile({
displayName:name,
// photoURL: "https://example.com/jane-q-user/profile.jpg"

}).then(function() {
// Update successful.
}).catch(function(error) {
// An error happened.
});
}
    const handleGoogleSignIn =() =>{
        
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    
    const  {displayName, email} = result.user;
    const signedInUser = {displayName,email};
    setLoggedInUser(signedInUser);
    history.replace(from);
   
  }).catch((error) => {
  
    var errorCode = error.code;
    var errorMessage = error.message;
    
    var email = error.email;
 
    var credential = error.credential;
    
  });
    }
    return (

        <from>
             <h1><b>Login</b></h1>
     
     <form onSubmit = {handleSubmit}>
     <div className="form-group">
     {newUser && <input className="form-control"  name ="name" type="text" onBlur ={handleBlur} placeholder ="your Name"  required/>}
     </div>
          <br/>
     <div className="form-group">
     <input className="form-control"  type="text" name ="email" onBlur ={handleBlur} placeholder ="mail address" required/>
     </div>
      <br/>
      <div className="form-group">
      <input className="form-control"  type="password" name="password" onBlur ={handleBlur} placeholder="password" required />
      </div>
      <br/>
      <div className="form-group">
     <input   type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
      <label htmlFor="newUser">new user sign up</label>
     </div>

    <div >
    <input className="form-control" className="btn btn-success btn-lg " onClick ={handleSubmit} type="submit" value={newUser ? 'sign up' : 'sign in'}/>
    </div>
     </form>
     <p style ={{color : "red"}}>{user.error}</p>
     {user.success && <p style ={{color : "green"}}>user {newUser ? 'created': 'logged in'} successfully</p>}


         
        <div>
        <button  className="btn btn-dark btn-lg"  onClick ={handleGoogleSignIn}>Google sign in</button>
       
        </div> </from>
    );
};

export default Log;