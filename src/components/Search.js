import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList';

export default class Search extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

    // Update searchedBooks state
    updateSearchedBooks = (books) => {
        this.setState(() => ({
            searchedBooks: books
        }))
    }

    // Update search query state
    updateQuery = (query) => {
        this.setState(() => ({
          query: query
        }))
    }

    // Search function
    search = (query) => { 
        this.updateSearchedBooks([]) 
        this.updateQuery(query)    
       
        query.trim().length > 0 ? BooksAPI.search(query)
          .then((results) => {
              this.updateSearchedBooks(results)
          })
        : this.updateSearchedBooks([])
    }

    render() {
        const { query, searchedBooks } = this.state
        const { books, onUpdateBookShelf } = this.props

        return (
            <div className="search-books">
              <div className="search-books-bar">
              <Link to='/'><button className="close-search" >Close</button></Link>
                <div className="search-books-input-wrapper">
                  <input 
                    type="text"
                    placeholder="Search by title or author"
                    value={query}
                    onChange={(event) => this.search(event.target.value)}
                    />
                </div>
              </div>
              <div className="search-books-results">
                {
                  searchedBooks.length > 0 &&
                  query.length > 0 &&
                  <BookList allBooks={books} books={searchedBooks} onUpdateBookShelf={onUpdateBookShelf} />
                }
            </div>
          </div>
        )
    }
}