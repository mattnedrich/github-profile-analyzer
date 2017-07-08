import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';
import LanguageHeader from './language-header';
import * as moment from 'moment';

export interface Props {
  repository: GitHubRepository,
};

export default class MostPopularHeader extends React.Component<Props, any> {
  render() {
    const createdAt = `created ${moment(this.props.repository.created).fromNow()}`;
    return (
      <div className="language-info-most-popular-header">
        <div className="language-info-most-popular-header-name">
          <a href={this.props.repository.url}>{this.props.repository.name}</a>
        </div>
        <div className="language-info-most-popular-header-date">{createdAt}</div>
      </div>
    );
  }
};
