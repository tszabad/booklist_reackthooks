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
      
        return state.map((book, id) => {
          
          if(book.id === action.id) {
            
            return {
              ...book,  
              title: action.book.title, 
              author: action.book.author
            }
          }
          return book;
        })
    default:
      return state;
  }
} 



// const id = action.id;
//const newstate=  state.filter(book => book.id !== action.id);
       // return [ ...newstate,{
         // title: action.book.title, 
        //  author: action.book.author,
        //  id: id  }  
          //    ]