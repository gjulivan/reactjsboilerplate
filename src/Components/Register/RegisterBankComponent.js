import React, { Component } from 'react';
import {Row, Col,
          form,FormGroup,
          InputGroup,
          ControlLabel,
          FormControl,
          HelpBlock,
          Glyphicon,
        Button} from 'react-bootstrap';

class RegisterBankComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.updateBankAccount = this.updateBankAccount.bind(this);
    this.removeBankAccount = this.removeBankAccount.bind(this);
  }

  updateBankAccount(index,field, value){
    this.props.updateBankAccount(index,field,value);
  }

  removeBankAccount(index){
    this.props.removeBankAccount(index);
  }



  render() {
    const {bankAccounts, addBankAccount, updateBankAccount, validationMessage} = this.props;
    let validationState = Array.isArray(validationMessage) ? validationMessage : [bankAccounts.length];
    console.log(validationState);
    return (
      <Row>
        <Col xs={12} className="">
            <h2><strong>Bank Account</strong></h2>
        </Col>
        {
          validationMessage && !Array.isArray(validationMessage)
           && <HelpBlock>{validationMessage}</HelpBlock>
        }
        <Col xs={12}>
               {
                   bankAccounts && bankAccounts.map((b,i)=>{
                     let valState = b;
                   return (<Col xs={12} key={`bank_${i}`}>
                       <FormGroup controlId={`formBankIBAN_${i}`}
                              validationState={validationState[i] && validationState[i].iban ?  validationState[i].iban : null}>
                          <ControlLabel>IBAN</ControlLabel>
                          <InputGroup>
                              <FormControl type="text" value={b.iban}
                                    onChange={(e)=>this.updateBankAccount(i,"iban", e.currentTarget.value)}/>
                              <InputGroup.Addon  style={{cursor : "pointer"}}>
                                <Glyphicon glyph="trash" onClick={(e)=>this.removeBankAccount(i)}/>
                              </InputGroup.Addon>
                          </InputGroup>
                          {validationState[i] && validationState[i].iban==="error" ?  <HelpBlock>Value is required</HelpBlock> : <div /> }
                       </FormGroup>
                       <FormGroup controlId={`formBankName_${i}`} validationState={validationState[i] && validationState[i].bankName ?  validationState[i].bankName : null}>
                          <ControlLabel>Bank Name</ControlLabel>
                          <FormControl type="text" value={b.bankName}
                                onChange={(e)=>this.updateBankAccount(i,"bankName", e.currentTarget.value)}/>
                          {validationState[i] && validationState[i].bankName==="error" ?   <HelpBlock>Value is required</HelpBlock> : <div />}
                       </FormGroup>
                   </Col>)
                 })
               }

                <FormGroup>
                  <Col xs={12} className="text-center">
                    <Button onClick={addBankAccount}>
                      Add Bank Account
                    </Button>
                  </Col>
                </FormGroup>

        </Col>
      </Row>
    );
  }
}

export default RegisterBankComponent;
