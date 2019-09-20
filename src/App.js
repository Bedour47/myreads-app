import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './components/Search';
import Home from './components/Home';

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    // Get all books and update state
    BooksAPI.getAll().then((response) => {
      this.setState(() => ({
        books: response
      }))
    });
 }

  // Update book shelf function
  updateBookShelf = (book, shelf) => {  
    BooksAPI.update(book, shelf).then((response) => {
      book.shelf = shelf
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => {
          return b.id !== book.id
        }).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <Home books={this.state.books} onUpdateBookShelf={this.updateBookShelf} />
        )} />
        <Route exact path='/search' render={() => (
            <Search books={this.state.books} onUpdateBookShelf={this.updateBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
