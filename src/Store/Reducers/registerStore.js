import { fromJS, Map } from 'immutable';
import * as registerActionsType from '../Constants/registerConstants'

const initialState = fromJS({
  loading: false,
  error: false,
  messages: [],
  firstName : `Grand`,
  lastName : `Julivan`,
  email : `grandjulivan@gmail.com`,
  bankAccounts : []
});

export function registerStore(state = initialState, action) {
    switch (action.type) {
        case registerActionsType.FILL_REGISTER_FORM:{
          return state
                .set('firstName', action.firstName)
                .set('lastName', action.lastName)
                .set('email', action.email);
        }
        case registerActionsType.UPDATE_REGISTER_FORM:{
          return state
                .set(action.field, action.value)
        }
        case registerActionsType.ADD_BANK_ACCOUNT:{
          return state
                .set("bankAccounts", state.get("bankAccounts").push({iban: ``, bankName: `` }));
        }
        case registerActionsType.REMOVE_BANK_ACCOUNT:{
          return state
                .set("bankAccounts",
                  state.get("bankAccounts")
                        .splice(action.index, 1));
        }
        case registerActionsType.UPDATE_BANK_ACCOUNT:{
          let currentBank = state.get("bankAccounts");
          let currentBankIndex = currentBank.get(action.index);
          return state
                .set("bankAccounts",
                currentBank.set(action.index,
                        Object.assign({}, currentBankIndex, {[action.field] : action.value}))
                    );
        }
        break;
        default:
            return state;
    }
}
