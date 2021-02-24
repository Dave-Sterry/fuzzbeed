import React from 'react';
import firebase from "firebase/app";
import { useAlert } from 'react-alert';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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



      // <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="container-fluid">
      //     <a className="navbar-brand" href="/">FuzzBeed</a>
      //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      //         <li className="nav-item">
      //           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      //         </li>
      //       </ul>
      //       <ul className="navbar-nav ml-auto">
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/signin">Sign In</Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link onClick={doSignOut} className="nav-link" to="/signout">Sign Out</Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </Navbar>