import React from 'react';
import styles from './App.scss';
import { pageContents, listData } from '../../data/dataStore';
import List from '../List/List';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class App extends React.Component {

  state = {
    lists: this.props.lists|| [],
  }

  addList(title){
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            title,
          }
        ]
      }
    ));
  }
  
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div>
           <List {...listData} />
        </div>
        <div className={styles.creator}>
          <Creator text={settings.listCreatorText} action={title => this.addList(title)} />
        </div>
      </main>
    )
  }
}

export default App;

