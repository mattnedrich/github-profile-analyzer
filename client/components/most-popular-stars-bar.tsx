import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';
import LanguageHeader from './language-header';

export interface Props {
  repository: GitHubRepository,
};

export default class MostPopularStarsBar extends React.Component<Props, any> {
  render() {
  console.log(this.props);
    return (
      <div className="language-info-additional">
        <div className="left-icon">
          <i className="fa fa-star"></i>
          <div>{this.props.repository.starCount}</div>
        </div>
        <div className="left-icon">
          <i className="fa fa-code-fork"></i>
          <div>{this.props.repository.forkCount}</div>
        </div>
        <div className="left-icon">
          <i className="fa fa-exclamation-circle"></i>
          <div>{this.props.repository.issueCount}</div>
        </div>
      </div>
    );
  }
};
