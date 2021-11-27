import React from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import styles from './Home.scss';
import { listData } from '../../data/dataStore';
import ListLink from '../ListLink/ListLink';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class Home extends React.Component {

  state = {
    lists: this.props.listData|| [],
  };

  static propTypes = {
    lists: PropTypes.array,
    listData: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
    moveCard: PropTypes.func,
  };

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length-1].key+1 : 0,
            title,
            description: settings.defaultNewListDescription,
            image: listData.imageNewList,
          },
        ],
      }
    ));
  }
  
  render() {
    const {title, subtitle, lists, moveCard} = this.props;

    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </DragDropContext>
        <div>
          {this.state.lists.map(({key, ...listProps }) =>(
            <ListLink key={key} {...listProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    );
  }
}

export default Home;




