import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../application-state';

import UserPhotoComponent from '../components/user-photo';
import { Props as UserPhotoComponentProps } from '../components/user-photo';

type StateProps = UserPhotoComponentProps;

function mapStateToProps(state: ApplicationState): StateProps {
  if(state.user) {
    return {
      photoUrl: state.user.profileImageUrl,
    };
  }
};

function mapDispatchToProps(dispatch: Dispatch<any>): {}{
  return {};
};

const ConnectedUserPhoto = connect<any, any, {}>(
  mapStateToProps,
  mapDispatchToProps,
)(UserPhotoComponent);

export default ConnectedUserPhoto;
