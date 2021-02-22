import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import surveyListReducer from '../../reducers/survey-list-reducer';
import { createStore } from 'redux';
import * as c from '../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  //we should be ashamed of this test
  // test('Should return default state if no action type is recognized', () => {
  //   expect(expect.objectContaining(rootReducer({}), { type: null, id: undefined })).toEqual(expect.objectContaining({
  //     masterSurveyList: {},
  //     formVisibleOnPage: false
  //   }));
  // });

  //this is a filthy, filthy test
  test('Check that initial state of surveyListReducer matches root reducer', () => {
    expect(store.getState().masterSurveyList).toEqual(expect.objectContaining(surveyListReducer(undefined, { type: null })));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});