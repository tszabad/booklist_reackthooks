import uuid from 'uuid/v4';

export const bookReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        title: action.book.title, 
        author: action.book.author, 
        id: uuid()}
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    case 'UPDATE_BOOK':
        return  [...state, 
          state.map(book => {
              return book.id === action.payload.id ? action.payload : book;
          })
        ]
    default:
      return state;
  }
} 