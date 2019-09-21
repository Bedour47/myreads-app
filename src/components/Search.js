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
      this.updateQuery(query)    
      query.trim().length > 0 
      ? BooksAPI.search(query).then((results) => {
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
                {
                  searchedBooks.error === 'empty query' &&
                  <div className="no-results">
                    <p>No Results</p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">view all search terms</button>

                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            ...
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                     {/* <!-- Modal --> */}
                  </div>
                }
            </div>
          </div>
        )
    }
}