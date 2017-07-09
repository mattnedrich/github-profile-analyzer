import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';

export interface Props {
  photoUrl: string,
};

export default class UserPhoto extends React.Component<Props, any> {
  render() {
    return (
      <div id="profile-photo">
        <div id="profile-photo-image"><img src={this.props.photoUrl} /></div>
      </div>
    );
  }
};
