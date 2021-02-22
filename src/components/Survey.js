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
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Survey;