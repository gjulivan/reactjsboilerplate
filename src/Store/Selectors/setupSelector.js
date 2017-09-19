import { createSelector } from 'reselect';
const BASE = 'setupStore';
/**
 * Direct selector to the setupStore state domain
 */
const setupStoreDomain = (state) => state[BASE];


/**
 * Other specific selectors
 */
 const userValue = createSelector([setupStoreDomain],
   (substate) => substate.get('userValue')
 );


export {
  userValue
};
