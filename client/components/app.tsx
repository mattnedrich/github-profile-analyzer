import * as React from 'react';
import { connect } from 'react-redux';

import * as ActionCreators from '../action-creators/index';
import EnterUsername from '../components/enter-username';

import LanguageCard from '../components/language-card';
import ProfileInfo from '../components/profile-info';
import { GitHubRepository, ProgrammingLanguage } from '../types';

const sampleLanguages: ProgrammingLanguage[] = [
  {
    displayName: "JavaScript",
    id: 1,
  },
  {
    displayName: "Python",
    id: 2,
  },
  {
    displayName: "Ruby",
    id: 3,
  },
];

const sampleRepositories: GitHubRepository[] = [
  {
    name: 'foo',
    description: 'bar',
    starCount: 1,
    forkCount: 2,
    issueCount: 4,
    created: new Date(),
    modified: new Date(),
  },
  {
    name: 'foo',
    description: 'bar',
    starCount: 1,
    forkCount: 2,
    issueCount: 4,
    created: new Date(),
    modified: new Date(),
  },
];

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
              mostUsedLanguage={sampleLanguages[0]}
              mostStarredRepo={sampleRepositories[0]}
              mostForkedRepo={sampleRepositories[0]}
              newestRepo={sampleRepositories[0]}
          />
        </div>
        <div id="section1">
          <LanguageCard language={sampleLanguages[0]} repositoryCount={3} mostPopular={sampleRepositories[0]} />
          <LanguageCard language={sampleLanguages[1]} repositoryCount={10} mostPopular={sampleRepositories[1]} />
          <LanguageCard language={sampleLanguages[2]} repositoryCount={1} mostPopular={sampleRepositories[0]} />
        </div>
      </div>
    );
  }
}

export default App;
