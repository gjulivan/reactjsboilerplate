import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import {Row, Col} from 'react-bootstrap';
import logo from '../../logo.svg';
import './App.css';
import * as registerActions from '../../Store/Actions/registerActions';
import * as SELECTORS from '../../Store/Selectors/registerSelector';

import RegisterComponent from './RegisterComponent'
//import
//import $ from "jquery";
// We need to expose jQuery as global variable
//window.jQuery = window.$ = $;
//require('bootstrap');

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.changeUserValue = this.changeUserValue.bind(this);
    this.addBankAccount = this.addBankAccount.bind(this);
    this.removeBankAccount = this.removeBankAccount.bind(this);
    this.updateBankAccount = this.updateBankAccount.bind(this);
  }

  changeUserValue(fieldName, value){
      const {registerActions} = this.props;
      registerActions.updateRegisterForm(fieldName,value)
  }

  addBankAccount(){
      const {registerActions} = this.props;
      registerActions.addBankAccount()
  }

  removeBankAccount(index){
      const {registerActions} = this.props;
      registerActions.removeBankAccount(index);
  }

  updateBankAccount(index,field, value){
      const {registerActions} = this.props;
      registerActions.updatedBankAccount(index,field, value);
  }


  render() {
    const {firstName, lastName, email, bankAccounts} = this.props;

    return (
      <Row>
        <Col xs={2}>
        </Col>
        <Col xs={8} className="RegisterComponent">
            <RegisterComponent
                user={{
                        firstName,
                        lastName,
                        email
                      }}
                bankAccounts={bankAccounts}
            changeUserValue={this.changeUserValue}
            addBankAccount={this.addBankAccount}
            updateBankAccount={this.updateBankAccount}
            removeBankAccount={this.removeBankAccount}/>
        </Col>
        <Col xs={2}>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firstName: SELECTORS.firstName(state),
    lastName: SELECTORS.lastName(state),
    email: SELECTORS.email(state),
    bankAccounts : SELECTORS.bankAccounts(state)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
         registerActions: bindActionCreators(registerActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
