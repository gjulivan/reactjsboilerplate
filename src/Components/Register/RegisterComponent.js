import React, { Component } from 'react';
import {Row, Col, form,FormGroup,ControlLabel, FormControl, HelpBlock, Button} from 'react-bootstrap';
import RegisterBankComponent from './RegisterBankComponent';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

      userState : { //["success","warning","error",null]
        firstName : "success",
        lastName : null,
        email : null
      },
      validationMessage : { //["success","warning","error",null]
        firstName : "",
        lastName : "",
        email : ""
      },
      label : {
        firstName : "First Name",
        lastName : "Last Name",
        email : "Email",
        bankAccounts : "bank account"
      }


    }
    this.formFieldChange = this.formFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.inValidateBankAccount = this.inValidateBankAccount.bind(this);
    this.addBankAccount = this.addBankAccount.bind(this);
  //  this.validateRequired = this.validateRequired.bind(this);
  }

  formFieldChange(e, type){
    this.props.changeUserValue(type, e.currentTarget.value);
    //console.log(`${e.currentTarget.value} ++ ${type}`);
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  addBankAccount(){
      this.setState({ validationMessage : Object.assign({}, this.state.validationMessage, {[`bankAccounts`] : ""})});
    this.props.addBankAccount();
  }

  onSubmit(){
    const {user, bankAccounts} = this.props;
    let userState = {}
    let validationMessage= {};
    let valBank = this.inValidateBankAccount(bankAccounts);

    if( !this.validateRequired(user.firstName) ){
      userState.firstName = "error";
      validationMessage.firstName =  `${this.state.label.firstName} is Required`;
    }
    else if( !this.validateRequired(user.lastName) ){
      userState.lastName = "error";
      validationMessage.lastName =  `${this.state.label.lastName} is Required`;
    }
    else if( !this.validateRequired(user.email) ){
      userState.email = "error";
      validationMessage.email =  `${this.state.label.email} is Required`;
    }
    else if(!this.validateEmail(user.email)){
      userState.email = "error";
      validationMessage.email =  `Value should be a valid ${this.state.label.email}`;
    }
    else if(valBank && valBank.length>0){
        validationMessage.bankAccounts =  valBank;
    }
    else{
      this.setState({userState : userState, validationMessage : validationMessage});
      alert(
        JSON.stringify(Object.assign({},user,{bankAccounts : bankAccounts}), null, 4)
      );
      return true;
    }

    this.setState({userState : userState, validationMessage : validationMessage});
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  inValidateBankAccount(bankAccounts) {
    if(bankAccounts.length<=0){
      return `You should provide at least one ${this.state.label.bankAccounts}`;
    }
    else{
      let bankState = [];
      for(let i=0;i<bankAccounts.length;i++){
        let acc = bankAccounts[i];
        let currentState= {};
        if(!this.validateRequired(acc.iban)){
          currentState.iban = "error"
          bankState.push(currentState);
        }
        else if(!this.validateRequired(acc.bankName)){
          currentState.bankName = "error";
          bankState.push(currentState);
        }

      }
      return bankState;
    }

  }

  validateRequired(value){
    if(value && value !==""){
      return true;
    }
    else{
      return false;
    }
  }



  render() {
    const {user, bankAccounts,
      addBankAccount,removeBankAccount, updateBankAccount} = this.props;
    const {userState , validationMessage,label} =this.state;
    return (
      <Row>
        <Col xs={12} className="text-center">
            <h1><strong>Register Account</strong></h1>
        </Col>
        <Col xs={12}>
            <form>
                <FormGroup controlId="formFirstName" validationState={userState.firstName}>
                   <ControlLabel>{label.firstName}</ControlLabel>
                   <FormControl type="text" value={user.firstName} onChange={(e)=>this.formFieldChange(e,`firstName`)}/>
                  {
                    userState.firstName == "success" && userState.firstName!==null ? <div />
                      : <HelpBlock>{validationMessage.firstName}</HelpBlock>
                  }
                </FormGroup>
                <FormGroup controlId="formLastName" validationState={userState.lastName}>
                   <ControlLabel>{label.lastName}</ControlLabel>
                   <FormControl type="text" value={user.lastName}  onChange={(e)=>this.formFieldChange(e,`lastName`)}/>
                   {
                     userState.lastName == "success" && userState.lastName!==null ? <div />
                       : <HelpBlock>{validationMessage.lastName}</HelpBlock>
                   }
                </FormGroup>
                <FormGroup controlId="formEmail" validationState={userState.email}>
                   <ControlLabel>{label.email}</ControlLabel>
                   <FormControl type="text" value={user.email}  onChange={(e)=>this.formFieldChange(e,`email`)}/>
                   {
                     userState.email == "success" && userState.email!==null ? <div />
                       : <HelpBlock>{validationMessage.email}</HelpBlock>
                   }
                </FormGroup>
            </form>
        </Col>
        <Col xs={12}>
            <RegisterBankComponent bankAccounts={bankAccounts}
                    addBankAccount={this.addBankAccount}
                    removeBankAccount={removeBankAccount}
                    updateBankAccount={updateBankAccount}
                    validationMessage={validationMessage.bankAccounts}/>
        </Col>
        <Col xs={12} className="text-right">
             <Button bsStyle="warning" onClick={this.onSubmit}>Submit</Button>
        </Col>
      </Row>
    );
  }
}

export default RegisterComponent;
