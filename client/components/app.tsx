import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import Greeting from './greeting'


class App extends React.Component<any, any> {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Greeting />
      </div>
    );
  }
}

export default App;
