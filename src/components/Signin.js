import React from "react";
import firebase from "firebase/app";
import { useAlert } from 'react-alert';



function Signin(){
  const alert = useAlert()
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

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form className="form-row" onSubmit={doSignUp}>
        <div class="form-control">
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
      <button
      onClick={() => {
        alert.show('Oh look, an alert!')
      }}
    >
      Show Alert
    </button>
  </React.Fragment>
  );
}

export default Signin;

{/* <h1>Sign Out</h1>
<button onClick={doSignOut}>Sign out</button>
</React.Fragment> */}