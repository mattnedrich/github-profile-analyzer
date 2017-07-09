import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';

export interface Props {
  language: ProgrammingLanguage,
  repositoryCount: number
};

export default class LanguageHeader extends React.Component<Props, any> {
  render() {
    return (
      <div className="language-info-title">
        <span className="language-info-title-icon ">
          <i className={`${this.props.language.iconName}`} />
        </span>
        <div className="language-info-title-middle">
          <div className="language-info-title-text">{this.props.language.displayName}</div>
          <div className="language-info-count">{this.props.repositoryCount} Repositories</div>
        </div>
      </div>
    );
  }
};
