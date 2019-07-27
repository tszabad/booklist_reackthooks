import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';



const UpdateBook = (props) => {

  
  const { books, dispatch } = useContext(BookContext);
  const book = books.filter((book)=> book.id === props.match.params.id);
  const {history} = props; 
  const [title, setTitle] = useState([book[0].title]);
  const [author, setAuthor] = useState(book[0].author);
  const [id] = useState(book[0].id);
  console.log(book[0].id);
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_BOOK', id: id, book: { title, author }});
    setTitle('');
    setAuthor('');
    history.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={title} value={title}
        onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder={author} value={author}
        onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="update book" />
    </form>
  );
}
 
export default UpdateBook;