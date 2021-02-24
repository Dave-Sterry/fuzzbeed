import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

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
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={addSurveyToFirestore}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Question One</Form.Label>
            <Form.Control type="text" name="names" placeholder="Pair names" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Question Two</Form.Label>
            <Form.Control type="text" name="location" placeholder="Location" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Question Three</Form.Label>
            <Form.Control type="text" name="issue" placeholder="Describe your issue." />
          </Form.Group>
          <Button variant="success" type="submit">
            Create!
          </Button>
        </Form>
      </div>
    </>
  );
}

NewSurveyForm.propTypes = {
  onNewSurveyCreation: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewSurveyForm;

// formSubmissionHandler={addSurveyToFirestore}