import React, { useState } from 'react';
import firebase from "firebase/app";
import { useAlert } from 'react-alert';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

// const NavBar = () => {
//   const appContext = useContext(AppContext)
//   const [navOpen, toggleOpen] = useState(false)
//   const closeNav = () => {
//     toggleOpen(false)
//   }

//   // Destructure properties from App Level State
//   const { activePath } = appContext

function SiteNavBar() {

  const auth = useState(firebase.auth());
  const auth2 = auth[0];
  // const toggleLogin = useState(false);
  // const changeNav = () => {
  //   toggleLogin(false);
  // }
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
        <Navbar.Brand as={Link} to="/">FuzzBeed</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
            <Nav.Link onClick={doSignOut}>Sign Out</Nav.Link>
            {/* {((isLoaded(auth2)) && (auth2.currentUser != null))
            ? <Nav.Link onClick={doSignOut}>Sign Out</Nav.Link>
            : null
            } */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default SiteNavBar;