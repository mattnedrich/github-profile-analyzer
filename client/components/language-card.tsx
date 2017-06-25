import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository, ProgrammingLanguage } from '../types/';

export interface Props {
  language: ProgrammingLanguage,
  repositoryCount: number,
  mostPopular: GitHubRepository
};

export default class LanguageCard extends React.Component<Props, any> {
  render() {
  console.log(this.props);
    return (
      <div className="language-info">
        <div className="language-info-title">{this.props.language.displayName}</div>
        <div className="language-info-count">{this.props.repositoryCount} Repositories</div>
        <div className="language-info-most-popular">
          <div className="language-info-most-popular-heading">Most Popular</div>
          <div className="language-info-most-popular-name">{this.props.mostPopular.name}</div>
          <div className="language-info-most-popular-description">{this.props.mostPopular.description}</div>
          <div className="language-info-additional">
            <div className="language-info-additional-stars">{this.props.mostPopular.starCount}</div>
            <div className="language-info-additional-forks">{this.props.mostPopular.forkCount}</div>
            <div className="language-info-additional-forks">{this.props.mostPopular.issueCount}</div>
          </div>
          <div className="language-info-created">Created {this.props.mostPopular.created.toString()}</div>
          <div className="language-info-modified">Last Updated: {this.props.mostPopular.modified.toString()}</div>
        </div>
      </div>
    );
  }
};
