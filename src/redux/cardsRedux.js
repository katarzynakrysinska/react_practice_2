import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards, searchString}, columnId) => cards.filter(card => card.columnId == columnId
  && new RegExp(searchString, 'i').test(card.title));

  
// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
export const createAction_moveCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: MOVE_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
    case MOVE_CARD: {
      const {id, src, dest} = action.payload;
      const targetCard = statePart.filter(card => card.id == id)[0];
      const targetColumnCards = statePart.filter(card => card.columnId == dest.columnId).sort((a, b) => a.index - b.index);
      console.log(targetColumnCards.map(card => `${card.index}, title: ${card.title}`));
      
      return statePart;
     
    }
    default:
      return statePart;
  }
}