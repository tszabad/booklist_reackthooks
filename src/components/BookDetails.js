import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { BookContext } from '../contexts/BookContext';


const BookDetails = ({book}) => {
  const {  dispatch } = useContext(BookContext);
  return (
    <li >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}
      <button onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>Delete</button></div>
      <Link to={"/edit/" + book.id} className="btn btn-primary">
            Edit
          </Link>
    </li>
  );
}

export default BookDetails;