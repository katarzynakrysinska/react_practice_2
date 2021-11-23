import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>{props.title} 
      <span className={styles.icon}><Icon name={props.icon} /></span>
    </h3>
    <div className={styles.columns}>
      {props.cards.map(cardData => (
        <Card key={cardData.id} {...cardData} />
      ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={props.addCard} />
    </div>
  </section>
);

Column.propTypes = {
  column: PropTypes.string,
  cards: PropTypes.array,
  title: PropTypes.string,
  icon: PropTypes.string,
  addCard: PropTypes.func,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;