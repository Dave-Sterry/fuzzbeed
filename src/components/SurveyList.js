import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

import { useSelector } from 'react-redux'; //hook to extract data from a Redux store
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'; //hook that allows to listen for changes to Firestore w/o using an HOC in a class component

function SurveyList(props){
  //from react-redux-firebase
  useFirestoreConnect([
    { collection: 'surveys' }
  ]);
  //from react-redux
  const surveys = useSelector(state => state.firestore.ordered.surveys);

  //react-redux-firebase offers isLoaded() fxn
  if (isLoaded(surveys)){
  return(
    <React.Fragment>
      <hr/>
      {surveys.map((survey) => {
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