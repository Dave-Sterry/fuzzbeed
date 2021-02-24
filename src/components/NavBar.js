import React, { useState } from 'react';
import firebase from "firebase/app";
import { useAlert } from 'react-alert';
import { Nav, Navbar } from 'react-bootstrap';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { Link } from "react-router-dom";


function SiteNavBar() {

  const auth = useState(firebase.auth());

  const alert = useAlert();

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      alert.show("Successfully signed out!");
    }).catch(function(error) {
      alert.show("There was an error signing out");
    });
  }

  return(
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to ="/">FuzzBeed</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link><Link to="/signin">Home</Link></Nav.Link>
            {((isLoaded(auth)) && (auth.currentUser != null))
            ? <Nav.Link onClick={doSignOut}>Sign Out</Nav.Link>
            : null
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default SiteNavBar;