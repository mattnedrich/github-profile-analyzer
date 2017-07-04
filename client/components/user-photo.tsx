import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository, ProgrammingLanguage } from '../types/';

export interface Props {
  photoUrl: string,
};

export default class UserPhoto extends React.Component<Props, any> {
  render() {
  console.log(this.props);
    return (
      <div id="profile-photo">
        <div id="profile-photo-image"><img src={this.props.photoUrl} /></div>
      </div>
    );
  }
};
