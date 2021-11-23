import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import {Droppable} from 'react-beautiful-dnd';

const Column = props => (
  <section className={styles.component}>
    <h3 className={styles.title}>{props.title} 
      <span className={styles.icon}><Icon name={props.icon} /></span>
    </h3>
    <Droppable droppableId={props.id}>
      {provided => (
        <div
          className={styles.cards}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {props.cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
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
  id: PropTypes.string,
};

Column.defaultProps = {
  icon: settings.defaultColumnIcon,
};

export default Column;