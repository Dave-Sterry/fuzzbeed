import React from 'react';
import NewSurveyForm from './NewSurveyForm';
import SurveyList from './SurveyList';
import SurveyDetail from './SurveyDetail';
import EditSurveyForm from './EditSurveyForm';
import TakeSurvey from './TakeSurvey';
import { connect } from 'react-redux';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import * as a from './../actions';
import Button from 'react-bootstrap/Button';

class SurveyControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSurvey: null,
      takeSurvey: false,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedSurvey != null) {
      this.setState({
        selectedSurvey: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleTakeClick = () => {
    console.log("clicked");
    this.setState({
      takeSurvey: true,
      selectedSurvey: null
    });
  }

  handleCompletingSurvey = () => {
    this.setState({ takeSurvey: false });
  }

  handleAddingNewSurveyToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedSurvey = (id) => {
    this.props.firestore.get({collection: 'surveys', doc: id}).then((survey) => {
      const firestoreSurvey = {
        qOne: survey.get("qOne"),
        qTwo: survey.get("qTwo"),
        qThree: survey.get("qThree"),
        id: survey.id
      }
      this.setState({selectedSurvey: firestoreSurvey });
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingSurveyInList = () => {
    this.setState({
      editing: false,
      selectedSurvey: null
    });
  }

  handleDeletingSurvey = (id) => {
    this.props.firestore.delete({collection: 'surveys', doc: id});
    this.setState({selectedSurvey: null});
  }

  render(){

    const auth = this.props.firebase.auth();

    if (!isLoaded(auth)) {
      console.log("test loading");
      return (
        <>
          <h1>Loading...</h1>
        </>
      )
    }

    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <>
          <h1>You must be signed in to access FuzzBeed.</h1>
        </>
      )
    }

    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing ) {
        currentlyVisibleState = <EditSurveyForm survey = {this.state.selectedSurvey} onEditSurvey = {this.handleEditingSurveyInList} />
        buttonText = "Return to Survey List";
      } else if (this.state.selectedSurvey != null) {
        currentlyVisibleState =
        <SurveyDetail
          survey = {this.state.selectedSurvey}
          onClickingDelete = {this.handleDeletingSurvey}
          onClickingEdit = {this.handleEditClick}
          onClickingTake = {this.handleTakeClick} />
        buttonText = "Return to Survey List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewSurveyForm onNewSurveyCreation={this.handleAddingNewSurveyToList}  />;
        buttonText = "Return to Survey List";
      } else if (this.state.takeSurvey) {
        currentlyVisibleState = <TakeSurvey survey = {this.state.selectedSurvey} onNewSurveyCompletion={this.handleCompletingSurvey}  />;
        buttonText = "Complete Survey";
      } else {
        currentlyVisibleState = <SurveyList onSurveySelection={this.handleChangingSelectedSurvey} />;
        buttonText = "Add Survey";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <Button onClick={this.handleClick} variant="warning">{buttonText}</Button>{' '}
        </React.Fragment>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

SurveyControl = connect(mapStateToProps)(SurveyControl);

export default withFirestore(SurveyControl);