import { fromJS, Map } from 'immutable';
import * as setupActionsType from '../Constants/setupConstants'

const initialState = fromJS({
  loading: false,
  error: false,
  messages: [],
  userValue : "THIS IS A TEST VALUE"
});

export function setupStore(state = initialState, action) {
    switch (action.type) {
        case setupActionsType.INIT_VALUE:
        break;
        case setupActionsType.UPDATE_SETUP_VALUE:
          return state
            .set('userValue', action.value);
        break;
        default:
            return state;
    }
}
