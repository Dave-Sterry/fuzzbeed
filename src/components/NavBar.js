import React from 'react';
import firebase from "firebase/app";
import { useAlert } from 'react-alert';
import { Nav, Navbar } from 'react-bootstrap';

function SiteNavBar() {

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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">FuzzBeed</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link onClick={doSignOut} href="/signout">Sign Out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default SiteNavBar;