import {connect} from 'react-redux';
import App from './App';

//powiązanie propsów ze stanem aplikacji
const mapStateToProps = state => ({
  // nazwa propsa: wartość właściwości
  title: state.app.title,
  subtitle: state.app.title,
  lists: state.lists,
});

//połączenie kompenentu App z magazynem
export default connect(mapStateToProps)(App);