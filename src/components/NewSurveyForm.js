import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function NewSurveyForm(props){
  const firestore = useFirestore();
  function addSurveyToFirestore(event) {
    event.preventDefault();
    props.onNewSurveyCreation();
    //how to add a Survey to firestore with a firestore method
    return firestore.collection('surveys').add(
      {
        names: event.target.names.value,
        location: event.target.location.value,
        issue: event.target.issue.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="names"
          placeholder="Pair Names" />
        <input
          type="text"
          name="location"
          placeholder="Location" />
        <textarea
          name="issue"
          placeholder="Describe your issue." />
          <button type="submit">{props.buttonText}</button>
      </form>
    </>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewSurveyForm;