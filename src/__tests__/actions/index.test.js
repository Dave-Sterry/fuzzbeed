import * as a from './../../actions/index';
import * as c from './../../actions/ActionTypes'

describe('survey actions', () => {
  it('DELETE_SURVEY should create DELETE_SURVEY action', () => {
    expect(a.deleteSurvey(1)).toEqual({
      type: c.DELETE_SURVEY,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', ()=>{
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});