import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

class Column extends React.Component {
  static propTypes = {
    columnTitle: PropTypes.string,
  }
 
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.columnTitle}</h3>
      </section>
    )
  }
}

export default Column;