import * as React from 'react';

import EnterUsername from '../components/enter-username';
import UserPhoto from '../containers/user-photo';
import UserProfile from '../containers/user-profile';
import LanguageCards from '../containers/language-cards';

import { All } from '../types/programming-language';

class App extends React.Component<{}, {}> {

  render() {
    const langs = All.map((l) => {
      return <i className={l.iconName}></i>;
    });

    return (
      <div id="app">
        <EnterUsername />
        <div id="langs">
          {langs}
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
