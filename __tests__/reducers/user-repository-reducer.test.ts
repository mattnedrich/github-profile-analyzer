import updateState from '../../client/reducers/user-repository-reducer';
import {
  userCreatedReposByLanguage,
  repositoryAuthoredCount,
  repositoryForkedCount,
  mostPopularLanguage,
  mostStarredRepository,
  mostForkedRepository,
  newestRepository,
} from '../../client/reducers/user-repository-reducer';
import * as ActionCreators from '../../client/action-creators';
import { GitHubRepository } from '../../client/types';
import { ApplicationState } from '../../client/application-state';
import { mattNedrichRepos } from '../../test_fixtures/repos/mattnedrich';
import { gitHubResultToLocalTypeMapper } from '../../client/util/api'

function makeSomeRepos(): GitHubRepository[] {
  return [
    {name: "repo1"},
    {name: "repo2"},
    {name: "repo3"},
    {name: "repo4"},
  ] as GitHubRepository[]
}

const initalAppState: any = {
  userRepos: undefined,
  fetchingUserRepos: false,
};

const fetchingAppState: any = {
  userRepos: undefined,
  fetchingUserRepos: true,
};

const fetchingAppStateWithExistingRepos: any = {
  userRepos: makeSomeRepos(),
  fetchingUserRepos: true,
};


describe('UserRepositoryReducer', () => {

  describe('for the mattnedrich user', () => {
    let reduxState: ApplicationState;
    let repos: GitHubRepository[];

    beforeEach(() => {
      reduxState = {} as any;
      repos = gitHubResultToLocalTypeMapper(mattNedrichRepos);
      expect(repos.length).toEqual(27);
      reduxState.userRepos = repos;
    });

    describe('.repositoryAuthoredCount', () => {
      it('returns the correct number of repositories', () => {
        const repoCount = repositoryAuthoredCount(reduxState);
        expect(repoCount).toEqual(25);
      });
    });

    describe('.repositoryForkedCount', () => {
      it('returns the correct number of repositories', () => {
        const repoCount = repositoryForkedCount(reduxState);
        expect(repoCount).toEqual(2);
      });
    });

    describe('.mostPopularLanguage', () => {
      it('returns the correct language', () => {
        const result = mostPopularLanguage(reduxState);
        expect(result.displayName).toEqual("Python");
      });
    });

    describe('.mostStarredRepository', () => {
      it('returns the correct repository', () => {
        const result = mostStarredRepository(reduxState);
        expect(result.name).toEqual("GradientDescentExample");
      });
    });

    describe('.mostForkedRepository', () => {
      it('returns the correct repository', () => {
        const result = mostForkedRepository(reduxState);
        expect(result.name).toEqual("GradientDescentExample");
      });
    });

    describe('.newestRepository', () => {
      it('returns the correct repository', () => {
        const result = newestRepository(reduxState);
        expect(result.name).toEqual("react-redux-typescript");
      });
    });

  });

  describe('.userCreatedReposByLanguage', () => {
    describe('for the mattnedrich user', () => {
      let repos: GitHubRepository[];
      beforeEach(() => {
        repos = gitHubResultToLocalTypeMapper(mattNedrichRepos);
        expect(repos.length).toEqual(27);
      });

      it('returns the correctly grouped result', () => {
        const groupedRepos = userCreatedReposByLanguage(repos);
        expect(groupedRepos.length).toEqual(8);
        expect(groupedRepos[0].language.displayName).toEqual('Python');
        expect(groupedRepos[1].language.displayName).toEqual('Swift');
        expect(groupedRepos[2].language.displayName).toEqual('C#');
        expect(groupedRepos[3].language.displayName).toEqual('JavaScript');
        expect(groupedRepos[4].language.displayName).toEqual('HTML');
        expect(groupedRepos[5].language.displayName).toEqual('TypeScript');
        expect(groupedRepos[6].language.displayName).toEqual('Ruby');
        expect(groupedRepos[7].language.displayName).toEqual('C++');

        expect(groupedRepos[0].mostPopularRepository.name).toEqual('GradientDescentExample');
        expect(groupedRepos[1].mostPopularRepository.name).toEqual('swift-type-inference-bug');
        expect(groupedRepos[2].mostPopularRepository.name).toEqual('algorithms');
        expect(groupedRepos[3].mostPopularRepository.name).toEqual('palette-maker');
        expect(groupedRepos[4].mostPopularRepository.name).toEqual('rickshaw_examples');
        expect(groupedRepos[5].mostPopularRepository.name).toEqual('react-redux-typescript');
        expect(groupedRepos[6].mostPopularRepository.name).toEqual('ruby-excel-library-examples');
        expect(groupedRepos[7].mostPopularRepository.name).toEqual('MeanShift_cpp');
      });
    })
  });

  describe('.updateState for ', () => {

    describe('START_FETCH_USER_REPOSITORIES', () => {
      it('sets fetchingUserRepos to true', () => {
        const startingState = initalAppState;
        const nextState = updateState(startingState, ActionCreators.startFetchUserRepositories("username"))
        expect(nextState.fetchingUserRepos).toEqual(true);
      });

      it('sets fetchingUserRepos to true', () => {
        const startingState = initalAppState;
        const testRepos = makeSomeRepos();
        startingState.userRepos = testRepos;
        expect(startingState.userRepos).toEqual(testRepos);

        const nextState = updateState(startingState, ActionCreators.startFetchUserRepositories("username"))
        expect(nextState.userRepos).toEqual(testRepos);
      });
    });

    describe('FETCH_USER_REPOSITORIES_SUCCESS', () => {
      it('sets fetchingUserRepos to false', () => {
        const startingState = fetchingAppState;
        expect(startingState.fetchingUserRepos).toEqual(true);
        const nextState = updateState(startingState, ActionCreators.fetchUserRepositoriesSuccess([]))
        expect(nextState.fetchingUserRepos).toEqual(false);
      });

      it('assigns the returned repos', () => {
        const startingState = fetchingAppState;
        const testRepos = makeSomeRepos();
        expect(startingState.userRepos).toBeUndefined;

        const nextState = updateState(startingState, ActionCreators.fetchUserRepositoriesSuccess(testRepos))
        expect(nextState.userRepos).toEqual(testRepos);
      });
    });

    describe('FETCH_USER_REPOSITORIES_FAILED', () => {
      it('updates the state correctly', () => {
        const startingState = fetchingAppStateWithExistingRepos;
        expect(startingState.userRepos).toEqual(makeSomeRepos());
        expect(startingState.fetchingUserRepos).toEqual(true);

        const nextState = updateState(startingState, ActionCreators.fetchUserRepositoriesFailed("blah"))
        expect(nextState.userRepos).toBeUndefined;
        expect(nextState.fetchingUserRepos).toEqual(false);
      });
    });
  });

});
