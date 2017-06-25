import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository, ProgrammingLanguage } from '../types/';

export interface Props{
  reposAuthored: number,
  reposForked: number,
  mostUsedLanguage: ProgrammingLanguage,
  mostStarredRepo: GitHubRepository,
  mostForkedRepo: GitHubRepository,
  newestRepo: GitHubRepository,
};

export default class ProfileInfo extends React.Component<Props, any> {
  render() {
  console.log(this.props);
    return (
      <div id="profile-details">
        <div>{this.props.reposAuthored} Repositories Authored</div>
        <div>{this.props.reposForked} Repositories Forked</div>
        <div>Most Popular Language: {this.props.mostUsedLanguage.displayName}</div>
        <div>Most Starred Repository: {this.props.mostStarredRepo.name}</div>
        <div>Most Forked Repository: {this.props.mostForkedRepo.name}</div>
        <div>Most Recent Repository: {this.props.newestRepo.name}</div>
      </div>
    );
  }
};
