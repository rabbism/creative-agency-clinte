// import React, { useContext, useState } from 'react';
import googleIcon from '../../../images/icons/google.png';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import logo from '../../../images/logos/logo.png'
// import { UserContext } from '../../../App';
// import { Navbar } from 'react-bootstrap';


// const Login = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//     // const [user, setUser] = useState({
//     //     isLoggedIn:false,
//     //     userName: '',
//     //     email: '',
//     //     photo: '',
//     //     error: '',
//     //     success: ''
//     // });

//     const provider = new firebase.auth.GoogleAuthProvider();

//     const history = useHistory();
//     const location = useLocation();

//     let { from } = location.state || { from: { pathname: "/" } };

//     if (firebase.apps.length === 0) {
//         firebase.initializeApp(firebaseConfig);
//     }

//     const handleGoogleSignIn = () => {
//         firebase.auth().signInWithPopup(provider)
//         .then( result => {
//             // var token = result.credential.accessToken;
//             const {displayName, email, photoURL} = result.user;
//             const signInUser = {
//                 userName: displayName,
//                 email: email,
//                 photo: photoURL,
//                 isLoggedIn: true
//             }
//             // setUser(signInUser);
//             setLoggedInUser(signInUser);
//             console.log(signInUser);
//             storeAuthToken();
//             // history.replace(from);
//           })
//           .catch(function(error) {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             var email = error.email;
//             var credential = error.credential;
//             console.log(errorCode, errorMessage, email, credential);
//           });
//     }

//     const storeAuthToken = () => {
//         firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
//         .then(function(idToken) {
//             sessionStorage.setItem('token', idToken);
//             history.replace(from);
//           })
//           .catch(function(error) {
//           });
//     }
//     return (
//         <div align="center">
//             <img className='logo-image' src={logo} alt=""/>
//             <div className='login-area'>
//                 <h3 style={{marginTop: '100px'}}>Login With</h3>
//                 <button className='google-button-style' onClick={handleGoogleSignIn}> <img height="20px" src={googleIcon} alt=""/> Continue With Google</button>
//                 <p>Don't Have An Account ? Create An Account</p>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
        <div align="center">
            <img className='logo-image' src={logo} alt=""/>
            <div className='login-area'>
                <h3 style={{marginTop: '100px'}}>Login With</h3>
                <button className='google-button-style' onClick={handleGoogleSignIn}> <img height="20px" src={googleIcon} alt=""/> Continue With Google</button>
                <p>Don't Have An Account ? Create An Account</p>
            </div>
         </div>
  );
};

export default Login;