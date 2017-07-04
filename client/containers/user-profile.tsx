import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../application-state';

import UserProfileComponent from '../components/user-profile';
import { Props as UserProfileComponentProps } from '../components/user-profile';

type StateProps = UserProfileComponentProps;

function mapStateToProps(state: ApplicationState): StateProps {
  if(state.user) {
    return {
      reposAuthored: 10,
      reposForked: 20,
      mostUsedLanguage: undefined,
      mostStarredRepo: undefined,
      mostForkedRepo: undefined,
      newestRepo: undefined,
    };
  }
};

function mapDispatchToProps(dispatch: Dispatch<any>): {}{
  return {};
};

const ConnectedUserProfile = connect<any, any, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfileComponent);

export default ConnectedUserProfile;
