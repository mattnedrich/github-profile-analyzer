import * as React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../application-state';
import * as ActionCreators from '../action-creators/index';

interface GreetingProps {fetchUserProfile: any};

class Greeting extends React.Component<GreetingProps, any> {
  refs: {
    usernameInputRef: HTMLInputElement;
  }

  constructor() {
    super();
    this.fetchUserProfile = this.fetchUserProfile.bind(this);
  }

  fetchUserProfile() {
    this.props.fetchUserProfile(this.refs.usernameInputRef.value);
  }

  render() {
    return (
      <div>
        <h1>  </h1>
        <input placeholder="Enter a GitHub Username" ref="usernameInputRef" type="text"></input>
        <button onClick={this.fetchUserProfile}>Go</button>
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => { return {}; }

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchUserProfile: (username: string) => dispatch(ActionCreators.fetchUserProfile(username))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
