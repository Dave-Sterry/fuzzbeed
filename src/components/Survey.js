import React from "react";
import PropTypes from "prop-types";

function Survey(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSurveyClicked(props.id)}>
        <p><em>{props.qOne}</em></p>
        <p><em>{props.qTwo}</em></p>
        <p><em>{props.qThree}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Survey.propTypes = {
  // names: PropTypes.string,
  // location: PropTypes.string,
  // issue: PropTypes.string,
  id: PropTypes.string,
  qOne: PropTypes.string,
  aOne: PropTypes.string,
  qTwo: PropTypes.string,
  aTwo: PropTypes.string,
  qThree: PropTypes.string,
  aThree: PropTypes.string,
  whenSurveyClicked: PropTypes.func
};

export default Survey;