import surveyListReducer from '../../reducers/survey-list-reducer';
import * as c from '../../actions/ActionTypes';

describe("surveyListReducer", () => {

  let action;
  const surveyData = {
    names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 };

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: { names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }

  test('Should return default state if there is no action type passed into the reducer', () =>{

    expect(surveyListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully delete a survey', () => {
    action = {
      type: c.DELETE_SURVEY,
      id: 1
    };
    expect(surveyListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
      location: '2a',
      issue: 'Reducer has side effects.',
      id: 2 }
    });
  });

});