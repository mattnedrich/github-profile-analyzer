import {ApplicationState} from '../application-state';
import applicationState from '../application-state';
import * as ActionTypes from '../action-types/index';
import * as Actions from '../actions/index';
import { GitHubRepository } from '../types';
import { ProgrammingLanguage, UnknownLanguage } from '../types/programming-language';
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

function getMostForkedRepository(repos: GitHubRepository[]): GitHubRepository {
  return _.maxBy(repos, (repo: GitHubRepository) => { return repo.forkCount; });
}

function getNewestRepository(repos: GitHubRepository[]): GitHubRepository {
  return _.maxBy(repos, (repo: GitHubRepository) => { return repo.created; });
}

function removeForks(repos: GitHubRepository[]): GitHubRepository[] {
  return _.filter(repos, (repo) => { return !repo.isFork; })
}

function userAuthoredRepos(state: ApplicationState): GitHubRepository[] {
  if (state.userRepos) {
    return removeForks(state.userRepos);
  } else {
    return [];
  }
}

export function repositoryAuthoredCount(state: ApplicationState): number {
  if (state.userRepos) {
    return userAuthoredRepos(state).length;
  } else {
    return 0;
  }
}

export function repositoryForkedCount(state: ApplicationState): number {
  if (state.userRepos) {
    return _.filter(state.userRepos, (repo) => { return repo.isFork;}).length;
  } else {
    return 0;
  }
}

export function mostPopularLanguage(state: ApplicationState): ProgrammingLanguage {
  if (state.userRepos) {
    const userRepos = userAuthoredRepos(state);
    const groups = groupByLanguage(userRepos) as any;
    const mostPopularLanguageInfo = _.chain(Object.keys(groups))
      .map((key) => {
        return {
          language: groups[key][0].language as ProgrammingLanguage,
          count: groups[key].length as number,
        }
      })
      .sortBy((info) => { return info.count})
      .reverse()
      .value();
    return _.head(mostPopularLanguageInfo).language;
  } else {
    return UnknownLanguage;
  }
}

export function mostStarredRepository(state: ApplicationState): GitHubRepository | undefined {
  if (state.userRepos) {
    const userRepos = userAuthoredRepos(state);
    return getMostPopularRepository(userRepos);
  }
}

export function mostForkedRepository(state: ApplicationState): GitHubRepository | undefined {
  if (state.userRepos) {
    const userRepos = userAuthoredRepos(state);
    return getMostForkedRepository(userRepos);
  }
}

export function newestRepository(state: ApplicationState): GitHubRepository | undefined {
  if (state.userRepos) {
    const userRepos = userAuthoredRepos(state);
    return getNewestRepository(userRepos);
  }
}
