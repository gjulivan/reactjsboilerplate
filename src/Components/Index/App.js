import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux'
import logo from '../../logo.svg';
import './App.css';
import * as setupActions from '../../Store/Actions/setupActions';
import * as SELECTORS from '../../Store/Selectors/setupSelector';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.changeUserValue = this.changeUserValue.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
  }

  changeUserValue(){
      const {setupActions} = this.props;

      setupActions.updateValue(this.refs["email"].value);
  }

  changeRoute(){
    const {setupActions} = this.props;
    setupActions.goToAboutPage();
  }

  render() {
    const {userValue} = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{userValue}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" ref="email" className="form-control" id="email" />
              </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12">
                <button className="btn btn-primary" onClick={this.changeUserValue}>
                    CHANGE!
                </button>
                <button className="btn btn-primary" onClick={this.changeRoute}>
                    ABOUT!
                </button>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userValue: SELECTORS.userValue(state)
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
         setupActions: bindActionCreators(setupActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
