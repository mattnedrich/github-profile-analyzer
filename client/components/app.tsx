import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import EnterUsername from '../components/enter-username';

import UserPhoto from '../containers/user-photo';
import UserProfile from '../containers/user-profile';
import LanguageCard from '../components/language-card';
import LanguageCards from '../containers/language-cards';
import { GitHubRepository, ProgrammingLanguage } from '../types';

class App extends React.Component<any, any> {
  render() {
    return (
      <div id="app">
        <div style={{textAlign: 'center'}}>
          <EnterUsername />
        </div>
        <div id="profile">
          <UserPhoto />
          <UserProfile />
        </div>
        <div id="section1">
          <LanguageCards />
        </div>
      </div>
    );
  }
}

export default App;
