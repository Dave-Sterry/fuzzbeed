import React from "react";
import firebase from "firebase/app";
import { useAlert } from 'react-alert';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';




function Signin(){
  //FirebaseUI
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };
  //react-alert
  const alert = useAlert();
  //Epicodus lessons
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      alert.show('Successfully signed up!');
    }).catch(function(error) {
      alert.show('Not signed up!');
    });
  }

//try to change a pg redirect on sign in with google
//signin.js check event to see if google instance or user input, then redir
//one place or two? probably best practices to one

function doSignIn(event) {
  event.preventDefault();
  const email = event.target.signinEmail.value;
  const password = event.target.signinPassword.value;
  //add an instance of the Google provider object
  //const provider = new this.props.firebase.auth.GoogleAuthProvider();
  //sign in by redirecting to sign-in page
  firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
    alert.show("Successfully signed in!");
  }).catch(function(error) {
    console.log(error.message);
  });
}

function doSignOut() {
  firebase.auth().signOut().then(function() {
    console.log("Successfully signed out!");
  }).catch(function(error) {
    console.log(error.message);
  });
}

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form className="form-row" onSubmit={doSignUp}>
        <div className="form-control">
          <input style={{width: '36rem'}}
            type='text'
            name='email'
            placeholder='handsomecat@umail.com' />
        </div>
        <div className="form-control" style={{width: '36rem'}}>
          <input style={{width: '36rem'}}
            type='password'
            name='password'
            placeholder='Password' />
        </div>
        <div className="form-control">
          <button type='submit' className='btn btn-success'>Sign up</button>
        </div>
      </form>
    <h1>Sign In With Email</h1>
    <form className="form-row" onSubmit={doSignIn}>
        <div className="form-control">
          <input style={{width: '36rem'}}
            type='text'
            name='signinEmail'
            placeholder='handsomecat@umail.com' />
        </div>
        <div className="form-control" style={{width: '36rem'}}>
          <input style={{width: '36rem'}}
            type='password'
            name='signinPassword'
            placeholder='Password' />
        </div>
        <div className="form-control">
          <button type='submit' className='btn btn-success'>Sign in</button>
        </div>
    </form>
    <h1>Sign In With Google:</h1>
      {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
  </React.Fragment>
  );
}

export default Signin;




// // Import FirebaseAuth and firebase.
// import React from 'react';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase';

// // Configure FirebaseUI.
// const uiConfig = {
//   // Popup signin flow rather than redirect flow.
//   signInFlow: 'popup',
//   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
//   signInSuccessUrl: '/signedIn',
//   // We will display Google and Facebook as auth providers.
//   signInOptions: [
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     //firebase.auth.GithubAuthProvider.PROVIDER_ID,
//   ],
// };

// function Signin() {
//   return (
//     <div>
//       <h1>Welcome to FuzzBeed</h1>
//       <p>Please sign-in:</p>
//       <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
//     </div>
//   );
// }

// export default Signin;

