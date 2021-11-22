import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    column: PropTypes.string,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
          }
        ]
      }
    ));
  }
 
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title} 
          <span className={styles.icon}><Icon name={this.props.icon} /></span>
        </h3>
        <div className={styles.columns}>
          {this.state.cards.map(({key, ...columnProps}) => (
            <Card key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )
  }
}

export default Column;