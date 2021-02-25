import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function SurveyDetail(props){
  const { survey, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="container">
        <h1>Survey Detail</h1>
        <h3>{survey.qOne}</h3>
        {/**Dashboard of aOne results */}
        <h3>{survey.qTwo}</h3>
        {/**Dashboard of aOne results */}
        <h3>{survey.qThree}</h3>
        {/**Dashboard of aOne results */}
        <Button onClick={ props.onClickingEdit } variant="warning">Update Survey</Button>{' '}
        <Button onClick={()=> onClickingDelete(survey.id) } variant="danger">Delete Survey</Button>{' '}
        <hr/>
      </div>
    </React.Fragment>
  );
}

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SurveyDetail;