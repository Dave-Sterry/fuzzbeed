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
        qOne: event.target.qOne.value,
        qTwo: event.target.qTwo.value,
        qThree: event.target.qThree.value,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={addSurveyToFirestore}>
          <Form.Group>
            <Form.Label>Question One</Form.Label>
            <Form.Control
              type="text"
              name="qOne"
              placeholder="If you could ride any animal into battle, what would it be?" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Question Two</Form.Label>
            <Form.Control
              type="text"
              name="qTwo"
              placeholder="What is your favorite color?" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Question Three</Form.Label>
            <Form.Control
              type="text"
              name="qThree"
              placeholder="Who is on your zombie apocolypse squad?" />
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