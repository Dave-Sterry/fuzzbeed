import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

import { useSelector } from 'react-redux'; //hook to extract data from a Redux store
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'; //hook that allows to listen for changes to Firestore w/o using an HOC in a class component

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
      <div className="container">
        <hr/>
        {surveys.map((survey) => {
          return <Survey
            whenSurveyClicked = { props.onSurveySelection }
            qOne={survey.qOne}
            qTwo={survey.qTwo}
            qThree={survey.qThree}
            id={survey.id}
            key={survey.id}/>
        })}
      </div>
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