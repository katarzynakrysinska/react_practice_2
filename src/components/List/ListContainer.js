import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn } from '../../redux/columnsRedux';

//export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);

//powiązanie propsów ze stanem aplikacji
const mapStateToProps = (state, props) => ({
  // nazwa propsa: wartość właściwości
  columns: getColumnsForList(state, props.id),
});


const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

//połączenie kompenentu App z magazynem
export default connect(mapStateToProps, mapDispatchToProps)(List);