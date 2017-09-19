import * as registerActionsType from '../Constants/registerConstants'
import * as setupAPI from '../../API/setupAPI'
import { push } from 'react-router-redux'

export function fillRegisterForm(firstName,lastName, email) {
    return {
        type: registerActionsType.FILL_REGISTER_FORM,
        firstName,
        lastName,
        email
    };
}

export function updateRegisterForm(field, value) {
    return {
        type: registerActionsType.UPDATE_REGISTER_FORM,
        field,
        value
    };
}

export function addBankAccount() {
    return {
        type: registerActionsType.ADD_BANK_ACCOUNT
    };
}

export function removeBankAccount(index) {
    return {
        type: registerActionsType.REMOVE_BANK_ACCOUNT,
        index
    };
}

export function updatedBankAccount(index, field, value) {
    return {
        type: registerActionsType.UPDATE_BANK_ACCOUNT,
        index,
        field,
        value
    };
}
