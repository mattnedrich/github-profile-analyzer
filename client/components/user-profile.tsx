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
    if(!this.props.reposAuthored) {
      return null;
    }

    const reposAuthored = this.props.reposAuthored || 0;
    const reposForked = this.props.reposForked || 0;
    const mostPopularLanguage = this.props.mostUsedLanguage ? this.props.mostUsedLanguage.displayName : "";
    const mostStarredRepository = this.props.mostStarredRepo ? this.props.mostStarredRepo.name : "";
    const mostStarredRepositoryUrl = this.props.mostStarredRepo ? this.props.mostStarredRepo.url: "";

    const mostForkedRepository = this.props.mostForkedRepo ? this.props.mostForkedRepo.name : "";
    const mostForkedRepositoryUrl = this.props.mostForkedRepo ? this.props.mostForkedRepo.url: "";

    const newestRepository = this.props.newestRepo ? this.props.newestRepo.name : "";
    const newestRepositoryUrl = this.props.newestRepo ? this.props.newestRepo.url: "";

    return (
      <div id="profile-details">
        <div className="profile-detail-item-with-icon">
          <i className="fa fa-github-square"></i>
          <div className="profile-details-item">{reposAuthored} Repositories Authored</div>
        </div>
        <div className="profile-detail-item-with-icon">
          <i className="fa fa-code-fork"></i>
          <div className="profile-details-item">{reposForked} Repositories Forked</div>
        </div>
        <div className="profile-detail-item-with-icon">
          <i className="fa fa-star"></i>
          <div className="profile-details-item">
            Most Starred: <a href={mostStarredRepositoryUrl}>{mostStarredRepository}</a>
          </div>
        </div>
        <div className="profile-detail-item-with-icon">
          <i className="fa fa-code-fork"></i>
          <div className="profile-details-item">
            Most Forked: <a href={mostForkedRepositoryUrl}>{mostForkedRepository}</a>
          </div>
        </div>
        <div className="profile-detail-item-with-icon">
          <i className="fa fa-clock-o"></i>
          <div className="profile-details-item">
            Most Recent: <a href={newestRepositoryUrl}>{newestRepository}</a>
          </div>
        </div>
      </div>
    );
  }
};
