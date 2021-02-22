import formVisibleReducer from './form-visible-reducer';
import surveyListReducer from './survey-list-reducer';
// import selectedSurveyReducer from './selected-survey-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterSurveryList: surveyListReducer,
  formVisibleOnPage: formVisibleReducer
  //selectedSurvey: selectedSurveyReducer
});

export default rootReducer;