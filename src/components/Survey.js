import React from "react";
import PropTypes from "prop-types";

function Survey(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSurveyClicked(props.id)}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
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
  qOne: PropTypes.string.isRequired,
  aOne: PropTypes.string.isRequired,
  qTwo: PropTypes.string.isRequired,
  aTwo: PropTypes.string.isRequired,
  qThree: PropTypes.string.isRequired,
  aThree: PropTypes.string.isRequired,
  whenTicketClicked: PropTypes.func
};

export default Survey;