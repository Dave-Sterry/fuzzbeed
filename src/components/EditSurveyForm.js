import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

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
      <form onSubmit={addSurveyToFirestore}>
        <input
          defaultValue = {props.survey.names}
          type="text"
          name="names"
          placeholder="Pair Names" />
        <input
          defaultValue = {props.survey.location}
          type="text"
          name="location"
          placeholder="Location" />
        <textarea
          defaultValue = {props.survey.issue}
          name="issue"
          placeholder="Describe your issue." />
          <button type="submit">Update Survey</button>
      </form>
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