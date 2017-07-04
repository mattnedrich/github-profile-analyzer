import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ApplicationState } from '../application-state';

import LanguageCardsComponent from '../components/language-cards';
import { Props as LanguageCardsProps } from '../components/language-cards';

import { GitHubRepository } from '../types/';
import { userCreatedReposByLanguage } from '../reducers/user-repository-reducer';

type StateProps = LanguageCardsProps;

import * as _ from 'lodash';

function mapStateToProps(state: ApplicationState): StateProps {
  if(state.userRepos) {
    const languageCards = userCreatedReposByLanguage(state.userRepos);
    return {
      languageCards: languageCards,
    };
  } else {
    return {languageCards: []};
  }
};

function mapDispatchToProps(dispatch: Dispatch<any>): {}{
  return {};
};

const ConnectedLanguageCards = connect<any, any, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(LanguageCardsComponent);

export default ConnectedLanguageCards;
