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
      qOne: event.target.qOne.value,
      qTwo: event.target.qTwo.value,
      qThree: event.target.qThree.value,
    }
    return firestore.update({collection: 'surveys', doc: survey.id }, propertiesToUpdate);
  }
  return (
    <>
      <div className="container" style={{width: '48rem'}}>
        <Form onSubmit={addSurveyToFirestore}>
          <Form.Group>
            <Form.Label>Question One</Form.Label>
            <Form.Control
              defaultValue = {props.survey.qThree}
              type="text"
              name="qOne"/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Question Two</Form.Label>
            <Form.Control
              defaultValue = {props.survey.qThree}
              type="text"
              name="qTwo"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Question Three</Form.Label>
            <Form.Control
              defaultValue = {props.survey.qThree}
              type="text"
              name="qThree"/>
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