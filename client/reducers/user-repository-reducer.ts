import applicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';
import { GitHubRepository, ProgrammingLanguage } from '../types';
import * as _ from 'lodash';

const defaultState = applicationState;

export default function updateState(state = defaultState, action: Actions.AnyAction) {
  switch(action.type) {

  case ActionTypes.START_FETCH_USER_REPOSITORIES:
    return {
      ...state,
      fetchingUserRepos: true
    }

  case ActionTypes.FETCH_USER_REPOSITORIES_SUCCESS:
    return {
      ...state,
      fetchingUserRepos: false,
      userRepos: action.repositories,
    }

  case ActionTypes.FETCH_USER_REPOSITORIES_FAILED:
    return {
      ...state,
      fetchingUserRepos: false,
      userRepos: undefined,
    }

  default:
    return state;
  }
};

// *******************
// **** SELECTORS ****
// *******************

interface RepoGroupByLanguage {
  language: ProgrammingLanguage,
  repositoryCount: number,
  mostPopularRepository: GitHubRepository,
};

export function userCreatedReposByLanguage(userRepos: GitHubRepository[]): RepoGroupByLanguage[] {
  const userCreatedRepos = removeForks(userRepos);
  const groups = groupByLanguage(userCreatedRepos) as any;

  const displayRepos = Object.keys(groups).map((languageKey: string) => {
    return {
      language: groups[languageKey][0].language,
      repositoryCount: groups[languageKey].length,
      mostPopularRepository: getMostPopularRepository(groups[languageKey]),
    };
  });

  return _.chain(displayRepos)
    .sortBy((repo) => { return repo.language.displayName; })
    .sortBy((repo) => { return repo.repositoryCount; })
    .reverse()
    .value();
}

function groupByLanguage(repos: GitHubRepository[]): {string: GitHubRepository[]} {
  const groups = _.groupBy(repos, (repo) => {return repo.language.displayName});
  return groups as {string: GitHubRepository[]};
}

function getMostPopularRepository(repos: GitHubRepository[]): GitHubRepository {
  return _.maxBy(repos, (repo: GitHubRepository) => { return repo.starCount; });
}

function removeForks(repos: GitHubRepository[]): GitHubRepository[] {
  return _.filter(repos, (repo) => { return !repo.isFork; })
}
