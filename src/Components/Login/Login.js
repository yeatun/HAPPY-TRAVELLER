import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn =() =>{
        
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    
    const  {displayName, email} = result.user;
    const signedInUser = {displayName,email};
    setLoggedInUser(signedInUser);
   
  }).catch((error) => {
  
    var errorCode = error.code;
    var errorMessage = error.message;
    
    var email = error.email;
 
    var credential = error.credential;
    
  });
    }
    return (
        <div>
         <h1>login</h1>
         <button onClick ={handleGoogleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;