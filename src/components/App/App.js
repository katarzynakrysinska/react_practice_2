import React from 'react';
import styles from './App.scss';
import { pageContents, listData } from '../../data/dataStore';
import List from '../List/List';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    lists: this.props.listData|| [],
  };

  static propTypes = {
    lists: PropTypes.array,
    listData: PropTypes.array,
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
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
        <div>
          {this.state.lists.map(({key, ...listProps }) =>(
            <List key={key} {...listProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    );
  }
}

export default App;

