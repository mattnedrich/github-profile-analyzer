import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../application-state';
import * as ActionCreators from '../action-creators/index';

interface EnterUsernameProps {fetchUserProfile: any};

class EnterUsername extends React.Component<EnterUsernameProps, any> {
  refs: {
    usernameInputRef: HTMLInputElement;
  }

  constructor() {
    super();
    this.fetchUserProfile = this.fetchUserProfile.bind(this);
  }

  fetchUserProfile(event: any) {
    event.preventDefault();
    this.props.fetchUserProfile(this.refs.usernameInputRef.value);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.fetchUserProfile} >
          <input
              placeholder="Enter a GitHub Username"
              ref="usernameInputRef"
              type="text">
          </input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => { return {}; }

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUserProfile: (username: string) => dispatch(ActionCreators.startFetchUserProfile(username))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterUsername);
