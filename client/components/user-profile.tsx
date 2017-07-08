import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';

export interface Props{
  reposAuthored: number,
  reposForked: number,
  mostUsedLanguage: ProgrammingLanguage,
  mostStarredRepo: GitHubRepository,
  mostForkedRepo: GitHubRepository,
  newestRepo: GitHubRepository,
};

export default class UserProfile extends React.Component<Props, any> {
  render() {
    const reposAuthored = this.props.reposAuthored || 0;
    const reposForked = this.props.reposForked || 0;
    const mostPopularLanguage = this.props.mostUsedLanguage ? this.props.mostUsedLanguage.displayName : "";
    const mostStarredRepository = this.props.mostStarredRepo ? this.props.mostStarredRepo.name : "";
    const mostForkedRepository = this.props.mostForkedRepo ? this.props.mostForkedRepo.name : "";
    const newestRepository = this.props.newestRepo ? this.props.newestRepo.name : "";

    return (
      <div id="profile-details">
        <div>{reposAuthored} Repositories Authored</div>
        <div>{reposForked} Repositories Forked</div>
        <div>Most Popular Language: {mostPopularLanguage}</div>
        <div>Most Starred Repository: {mostStarredRepository}</div>
        <div>Most Forked Repository: {mostForkedRepository}</div>
        <div>Most Recent Repository: {newestRepository}</div>
      </div>
    );
  }
};
