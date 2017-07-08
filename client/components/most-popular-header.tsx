import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';
import LanguageHeader from './language-header';

export interface Props {
  repository: GitHubRepository,
};

export default class MostPopularHeader extends React.Component<Props, any> {
  render() {
  console.log(this.props);
    return (
      <div className="language-info-most-popular-header">
        <div className="language-info-most-popular-name">{this.props.repository.name}</div>
        <div className="language-info-most-popular-meta">
          <i className="devicon-git-plain"></i>
          <div className="language-info-most-popular-text">Most Popular</div>
        </div>
      </div>
    );
  }
};
