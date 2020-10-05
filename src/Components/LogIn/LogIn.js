import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import googleIcon from '../../images/logos/google.png';
import logo from '../../images/logos/Group 1329.png';
import './LogIn.css';


const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIN = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const {displayName, email} = result.user;
            const SignedInUser = {name: displayName, email}
            setLoggedInUser(SignedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    return (
        <div>
            <Link to='/'> <img style={{width:"250px", display:"block",marginTop:"20px", marginLeft:"auto", marginRight:"auto"}} src={logo} alt="Volunteer Network"/> </Link>
            <div className="login-section">
            <h3>Login With</h3>
            <div onClick={handleGoogleSignIN} className="google-btn">
                    <img style={{width:"30px", height:"30px", marginLeft:"40px",marginTop:"10px", cursor:"pointer"}} src={googleIcon} alt=""/>
                    <p style={{cursor:"pointer", marginLeft:"40px"}}>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;