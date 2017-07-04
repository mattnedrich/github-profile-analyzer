import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import EnterUsername from '../components/enter-username';

import LanguageCard from '../components/language-card';
import LanguageCards from '../containers/language-cards';
import ProfileInfo from '../components/profile-info';
import { GitHubRepository, ProgrammingLanguage } from '../types';

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
          <ProfileInfo
              reposAuthored={10}
              reposForked={20}
              mostUsedLanguage={undefined}
              mostStarredRepo={undefined}
              mostForkedRepo={undefined}
              newestRepo={undefined}
          />
        </div>
        <div id="section1">
          <LanguageCards />
        </div>
      </div>
    );
  }
}

export default App;
