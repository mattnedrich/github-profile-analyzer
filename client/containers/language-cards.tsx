import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ApplicationState } from '../application-state';

import LanguageCardsComponent from '../components/language-cards';
import { Props as LanguageCardsProps } from '../components/language-cards';

import { GitHubRepository } from '../types/';

type StateProps = LanguageCardsProps;

import * as _ from 'lodash';

function groupByLanguage(repos: GitHubRepository[]): {string: GitHubRepository[]} {
  const groups = _.groupBy(repos, (repo) => {return repo.language.displayName});
  console.log(groups);
  return groups as {string: GitHubRepository[]};
}
function getMostPopularRepository(repos: GitHubRepository[]): GitHubRepository {
  return repos[0];
}

function mapStateToProps(state: ApplicationState): StateProps {
  if(state.userRepos) {
    const groups = groupByLanguage(state.userRepos) as any;
    const displayRepos = Object.keys(groups).map((languageKey: string) => {
      return {
        language: groups[languageKey][0].language,
        repositoryCount: groups[languageKey].length,
        mostPopular: groups[languageKey][0],
      }
    });

    return {
      languageCards: displayRepos,
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
