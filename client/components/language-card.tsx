import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';
import LanguageHeader from './language-header';

export interface Props {
  language: ProgrammingLanguage,
  repositoryCount: number,
  mostPopularRepository: GitHubRepository
};

export default class LanguageCard extends React.Component<Props, any> {
  render() {
  console.log(this.props);
    return (
      <div className="language-info">
        <LanguageHeader language={this.props.language} repositoryCount={this.props.repositoryCount} />
        <div className="language-info-most-popular">
          <div className="language-info-most-popular-heading">Most Popular</div>
          <div className="language-info-most-popular-name">{this.props.mostPopularRepository.name}</div>
          <div className="language-info-most-popular-description">{this.props.mostPopularRepository.description}</div>
          <div className="language-info-additional">
            <div className="language-info-additional-stars">{this.props.mostPopularRepository.starCount}</div>
            <div className="language-info-additional-forks">{this.props.mostPopularRepository.forkCount}</div>
            <div className="language-info-additional-forks">{this.props.mostPopularRepository.issueCount}</div>
          </div>
          <div className="language-info-created">Created {this.props.mostPopularRepository.created.toString()}</div>
          <div className="language-info-modified">Last Updated: {this.props.mostPopularRepository.modified.toString()}</div>
        </div>
      </div>
    );
  }
};
