import * as React from 'react';
import { connect } from 'react-redux';
import { GitHubRepository, ProgrammingLanguage } from '../types/';

import LanguageCard from './language-card';
import { Props as LanguageCardProps } from './language-card';

export interface Props {
  languageCards: LanguageCardProps[],
};

export default class LanguageCards extends React.Component<Props, any> {
  render() {

    const cards = this.props.languageCards.map((card: LanguageCardProps) => {
      const key = `card_${card.language}_${card.mostPopular.name}`;
      return (<LanguageCard key={key} language={card.language} repositoryCount={card.repositoryCount} mostPopular={card.mostPopular} />);
    });

    return (
      <div>{cards}</div>
    );
  }
};
