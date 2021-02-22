import formVisibleReducer from './form-visible-reducer';
import surveyListReducer from './survey-list-reducer';
// import selectedSurveyReducer from './selected-survey-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
  masterSurveryList: surveyListReducer,
  formVisibleOnPage: formVisibleReducer,
  firestore: firestoreReducer
});

export default rootReducer;