import React from "react";
import firebase from "firebase/app";
import { useAlert } from 'react-alert';

function Signin(){
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

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      alert.show("Successfully signed in!");
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
  </React.Fragment>
  );
}

export default Signin;