import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';
import UpdateBook from './components/UpdateBook';


function App() {
  return (
    <div className="App">
      <Router >
      <BookContextProvider>
        <Navbar />
        <Route path="/" exact component={BookList} />
        <Route path="/edit/:id" component={UpdateBook} />
        <NewBookForm />
      </BookContextProvider>
      </Router>
    </div>
  );
}

export default App;
