import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = props => (
  <section className={styles.component}>
    <h3>{props.title}</h3>
  </section>
);

Card.propTypes = {
  title: PropTypes.string,
};
 
export default Card;