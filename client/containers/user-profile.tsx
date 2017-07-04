import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../application-state';
import {
  repositoryAuthoredCount,
  repositoryForkedCount,
  mostPopularLanguage,
  mostStarredRepository,
  mostForkedRepository,
  newestRepository,
} from '../reducers/user-repository-reducer';

import UserProfileComponent from '../components/user-profile';
import { Props as UserProfileComponentProps } from '../components/user-profile';

type StateProps = UserProfileComponentProps;

function mapStateToProps(state: ApplicationState): StateProps {
  const authoredCount = repositoryAuthoredCount(state);
  const forkedCount = repositoryForkedCount(state);
  const popularLanguage = mostPopularLanguage(state);
  const starredRepo = mostStarredRepository(state);
  const forkedRepo = mostForkedRepository(state);
  const newest = newestRepository(state);

  return {
    reposAuthored: authoredCount,
    reposForked: forkedCount,
    mostUsedLanguage: popularLanguage,
    mostStarredRepo: starredRepo,
    mostForkedRepo: forkedRepo,
    newestRepo: newest,
  };
};

function mapDispatchToProps(dispatch: Dispatch<any>): {}{
  return {};
};

const ConnectedUserProfile = connect<any, any, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileComponent);

export default ConnectedUserProfile;
