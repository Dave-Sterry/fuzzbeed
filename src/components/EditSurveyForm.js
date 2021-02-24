import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

function EditSurveyForm(props){
  const firestore = useFirestore();
  const { survey } = props;
  function addSurveyToFirestore(event) {
    event.preventDefault();
    props.onEditSurvey();
    //how to add a Survey to firestore with a firestore method
    const propertiesToUpdate = {
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
    }
    return firestore.update({collection: 'surveys', doc: survey.id }, propertiesToUpdate);
  }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={addSurveyToFirestore}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Question One</Form.Label>
            <Form.Control
            defaultValue = {props.survey.names}
            type="text"
            name="names"
            placeholder="Pair names" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Question Two</Form.Label>
            <Form.Control
            defaultValue = {props.survey.location}
            type="text"
            name="location"
            placeholder="Location" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Question Three</Form.Label>
            <Form.Control
            defaultValue = {props.survey.issue}
            type="text"
            name="issue"
            placeholder="Describe your issue." />
          </Form.Group>
          <Button variant="success" type="submit">
            Create!
          </Button>
        </Form>
      </div>
    </>
  );
}

EditSurveyForm.propTypes = {
  onEditSurvey: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  survey: PropTypes.object,
  buttonText: PropTypes.string
};

export default EditSurveyForm;