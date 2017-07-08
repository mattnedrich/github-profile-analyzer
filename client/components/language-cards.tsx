import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository } from '../types/';
import { ProgrammingLanguage } from '../types/programming-language';

import LanguageCard from './language-card';
import { Props as LanguageCardProps } from './language-card';

export interface Props {
  languageCards: LanguageCardProps[],
};

export default class LanguageCards extends React.Component<Props, any> {
  render() {

    const cards = this.props.languageCards.map((card: LanguageCardProps) => {
      const key = `card_${card.language}_${card.mostPopularRepositories[0].name}`;
      return (<LanguageCard key={key} language={card.language} repositoryCount={card.repositoryCount} mostPopularRepositories={card.mostPopularRepositories} />);
    });

    return (
      <div>{cards}</div>
    );
  }
};
