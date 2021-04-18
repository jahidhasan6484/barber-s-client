import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";
import google from "../../icon/google.png";
import welcome from '../../images/welcome.png';
import "./Login.css";

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
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = {
          name: displayName,
          email,
        };
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function (error) {
      });
  }

  return (
    <div className="container login">
      <div className="row">
        <div className="col-md-6 welcome">
          <img src={welcome}></img>
        </div>
        <div className="col-md-6 googleLogin">
          <h3>Login</h3>
          <br></br>
          <button onClick={handleGoogleSignIn}>
            <img src={google}></img> Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
