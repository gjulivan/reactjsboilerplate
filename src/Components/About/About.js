import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import logo from '../../logo.svg';
import './About.css';
import * as setupActions from '../../Store/Actions/setupActions';
import * as SELECTORS from '../../Store/Selectors/setupSelector';

class About extends Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
