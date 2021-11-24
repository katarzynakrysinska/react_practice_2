import {connect} from 'react-redux';
import { createAction_moveCard } from '../../redux/cardsRedux';
import App from './App';

//powiązanie propsów ze stanem aplikacji
const mapStateToProps = state => ({
  // nazwa propsa: wartość właściwości
  title: state.app.title,
  subtitle: state.app.title,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard({
    payload,
  })),
});

//połączenie kompenentu App z magazynem
export default connect(mapStateToProps, mapDispatchToProps)(App);