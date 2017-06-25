import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import EnterUsername from '../components/enter-username';


class App extends React.Component<any, any> {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <EnterUsername />
      </div>
    );
  }
}

export default App;
