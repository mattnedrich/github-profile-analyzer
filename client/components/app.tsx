import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import EnterUsername from '../components/enter-username';


class App extends React.Component<any, any> {
  render() {
    return (
      <div id="app">
        <div style={{textAlign: 'center'}}>
          <EnterUsername />
        </div>
        <div id="profile">
          <div id="profile-photo">
            <div id="profile-photo-image"><img src="https://avatars2.githubusercontent.com/u/4796480?v=3&s=460" /></div>
          </div>
          <div id="profile-details">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </div>
        </div>
        <div id="section1">
          <div className="info">info 1</div>
          <div className="info">info 2</div>
          <div className="info">info 3</div>
          <div className="info">info 4</div>
          <div className="info">info 5</div>
          <div className="info">info 6</div>
        </div>
      </div>
    );
  }
}

export default App;
