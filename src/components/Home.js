import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList';

export default class Home extends Component {
    
    render() {
        const { books, onUpdateBookShelf } = this.props

        const currentlyReadingBooks = books.filter( book => {
            return book.shelf === 'currentlyReading'
        })
        const wantToReadBooks = books.filter( book => {
            return book.shelf === 'wantToRead'
        })
        const readBooks = books.filter( book => {
            return book.shelf === 'read'
        })

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <BookList books={currentlyReadingBooks} onUpdateBookShelf={onUpdateBookShelf} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BookList books={wantToReadBooks} onUpdateBookShelf={onUpdateBookShelf} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BookList books={readBooks} onUpdateBookShelf={onUpdateBookShelf} />
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'><button>Add a book</button></Link>
            </div>
          </div>
        )
    }
}
