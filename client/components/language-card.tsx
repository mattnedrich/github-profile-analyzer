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
  mostPopularRepositories: GitHubRepository[]
};

export default class LanguageCard extends React.Component<Props, any> {

  getRepositoryMarkup(repo: GitHubRepository) {
    return (
      <div key={`repo-${this.props.language.name}-${repo.name}`}>
          <MostPopularHeader repository={repo} />
          <MostPopularStarsBar repository={repo} />
      </div>
    );
  }

  render() {
    const popularReposMarkup = this.props.mostPopularRepositories.map((repo: GitHubRepository) => {
      return this.getRepositoryMarkup(repo);
    });

    return (
      <div className="language-info">
        <LanguageHeader
            language={this.props.language}
            repositoryCount={this.props.repositoryCount}
        />
        <div className="language-info-most-popular">
          <div className="language-info-most-popular-meta">
            <i className="devicon-git-plain"></i>
            <div className="language-info-most-popular-text">Most Popular</div>
          </div>
          { popularReposMarkup }
        </div>
      </div>
    );
  }
};
