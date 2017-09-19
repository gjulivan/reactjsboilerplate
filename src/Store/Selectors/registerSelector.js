import { createSelector } from 'reselect';
const BASE = 'registerStore';
/**
 * Direct selector to the setupStore state domain
 */
const registerStoreDomain = (state) => state[BASE];


/**
 * Other specific selectors
 */
 const firstName = createSelector([registerStoreDomain],
   (substate) => substate.get('firstName')
 );
 const lastName = createSelector([registerStoreDomain],
   (substate) => substate.get('lastName')
 );
 const email = createSelector([registerStoreDomain],
   (substate) => substate.get('email')
 );

 const bankAccounts = createSelector([registerStoreDomain],
   (substate) => substate.get('bankAccounts').toJS()
 );


export {
  firstName,
  lastName,
  email,
  bankAccounts
};
