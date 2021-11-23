import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {

  static propTypes = {
    column: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    icon: PropTypes.node,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} 
          <span className={styles.icon}><Icon name={icon} /></span>
        </h3>
        <div className={styles.columns}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
          </div>*/}
      </section>
    );
  }
}

export default Column;