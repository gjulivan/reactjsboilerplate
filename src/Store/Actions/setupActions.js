import * as setupActionsType from '../Constants/setupConstants'
import * as setupAPI from '../../API/setupAPI'
import { push } from 'react-router-redux'
export function initValueFromAPI(){
  return function(dispatch, getState) {
    var initialValue = setupAPI.GetSetupValues();
    dispatch (initValue(initialValue));
  }
}

export function initValue(value) {
    return {
        type: setupActionsType.INIT_VALUE,
        value: value
    };
}

export function updateValue(value) {
    return {
        type: setupActionsType.UPDATE_SETUP_VALUE,
        value:value
    };
}

export function goToAboutPage(){
  return function(dispatch, getState) {
    dispatch(push('/about'));
  }
}
