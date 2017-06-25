import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import EnterUsername from '../components/enter-username';


class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div id="profile-container">test</div>
        <div style={{textAlign: 'center'}}>
          <EnterUsername />
        </div>
      </div>
    );
  }
}

export default App;
