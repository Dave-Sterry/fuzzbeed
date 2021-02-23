import React from 'react';
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { useAlert } from 'react-alert';

function NavBar() {

  const alert = useAlert()
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      alert.show("Successfully signed out!");
    }).catch(function(error) {
      alert.show("There was an error signing out");
    });
  }

  return(
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FuzzBeed</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link onClick={doSignOut} className="nav-link" to="/signout">Sign Out</Link>
    {/* <button onClick={doSignOut} className="btn btn-warning">Sign out</button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default NavBar;