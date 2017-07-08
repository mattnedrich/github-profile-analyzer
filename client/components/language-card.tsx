import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';
import LanguageHeader from './language-header';
import MostPopularHeader from './most-popular-header';
import MostPopularStarsBar from './most-popular-stars-bar';

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
          <MostPopularHeader repository={this.props.mostPopularRepository} />
          <div className="language-info-most-popular-description">{this.props.mostPopularRepository.description}</div>
          <MostPopularStarsBar repository={this.props.mostPopularRepository} />
          <div className="language-info-created">Created {this.props.mostPopularRepository.created.toString()}</div>
          <div className="language-info-modified">Last Updated: {this.props.mostPopularRepository.modified.toString()}</div>
        </div>
      </div>
    );
  }
};
