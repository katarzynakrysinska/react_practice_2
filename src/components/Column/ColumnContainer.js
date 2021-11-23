import {connect} from 'react-redux';
import Column from './Column';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

//powiązanie propsów ze stanem aplikacji
const mapStateToProps = (state, props) => ({
  // nazwa propsa: wartość właściwości
  cards: getCardsForColumn(state, props.id),
});

//połączenie kompenentu App z magazynem
export default connect(mapStateToProps)(Column);