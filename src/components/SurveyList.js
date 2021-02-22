import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

import { useSelector } from 'react-redux'; //hook to extract data from a Redux store
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'; //hook that allows to listen for changes to Firestore w/o using an HOC in a class component

function Survey(props){
  //from react-redux-firebase
  useFirestoreConnect([
    { collection: 'surveys' }
  ]);
  //from react-redux
  const Surveys = useSelector(state => state.firestore.ordered.surveys);

  //react-redux-firebase offers isLoaded() fxn
  if (isLoaded(Surveys)){
  return(
    <React.Fragment>
      <hr/>
      {/* Now need to map over values of an obj not an array */}
      {Survey.map((survey) => {
        return <Survey
          whenSurveyClicked = { props.onSurveySelection }
          names={survey.names}
          location={survey.location}
          issue={survey.issue}
          id={survey.id}
          key={survey.id}/>
      })}
      </React.Fragment>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    )
  }
}

SurveyList.propTypes = {
  onSurveySelection: PropTypes.func
};

export default SurveyList;