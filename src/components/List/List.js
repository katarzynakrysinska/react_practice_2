import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

const List = props => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={props.title} image={props.image}/>
      <div className={styles.description}>
        {ReactHtmlParser(props.description)}
      </div>
      <div className={styles.columns}>
        {props.columns.map(columnData => (
          <Column key={columnData.id} {...columnData} />
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={props.addColumn} />
      </div>
    </section>
  </Container>
);

List.propTypes = {
  title: PropTypes.node,
  image: PropTypes.string,
  description: PropTypes.node,
  columns: PropTypes.array,
  addColumn: PropTypes.func,
};

List.defaultProps = {
  description: settings.defaultListDescription,
};

export default List;