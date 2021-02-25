import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

function TakeSurvey(props) {
  const firestore = useFirestore();
  const { survey } = props;
  function addCompletedSurveyToFirestore(event) {
    event.preventDefault();
    props.onEditCompleteSurvey(); //need to create
    return firestore.collection('completedSurveys').add(
      {
        qOne: props.survey.qOne,
        aOne: event.target.aOne.value,
        qTwo: props.survey.qTwo,
        aTwo: event.target.aTwo.value,
        qThree: props.survey.qThree,
        aThree: event.survey.aThree,
        surveyId: survey.id,
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={addCompletedSurveyToFirestore}>
          <Form.Group>
            <Form.Label>{props.survey.qOne}</Form.Label>
            <Form.Control
              type="text"
              name="aOne"/>
          </Form.Group>

          <Form.Group>
            <Form.Label>{props.survey.qTwo}</Form.Label>
            <Form.Control
              type="text"
              name="aTwo"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>{props.survey.qThree}</Form.Label>
            <Form.Control
              type="text"
              name="aThree"/>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit!
          </Button>
        </Form>
      </div>
    </>
  );
}

TakeSurvey.propTypes = {
  onNewSurveyCompletion: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  survey: PropTypes.object,
  buttonText: PropTypes.string
};

export default TakeSurvey;