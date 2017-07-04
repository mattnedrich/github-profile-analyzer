import * as React from 'react';

import EnterUsername from '../components/enter-username';
import UserPhoto from '../containers/user-photo';
import UserProfile from '../containers/user-profile';
import LanguageCards from '../containers/language-cards';

class App extends React.Component<{}, {}> {
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
