import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList';

export default class Search extends Component {
    state = {
        query: '',
        searchedBooks: []
    }
    componentDidMount(){
        //search test
        BooksAPI.search('Art').then(response => {
        let results = response.map(result => {
            return result;
        })
        this.setState({searchedBooks: results});
        console.log('search results: ', results)
        console.log('search books state: ', this.state.searchedBooks)
        });
    }

    updateQuery = (query) => {
        this.setState(() => ({
          query: query.trim()
        }))
      }

      clearQuery = () => {
        this.updateQuery('')
      }

    render() {
        const { query } = this.state
        const { books, onUpdateBookShelf } = this.props

        // let showingBooks = query === ''
        // ? books
        // : books.filter((b) => (
        //   b.title.toLowerCase().includes(query.toLowerCase()) || b.authors.toLowerCase().includes(query.toLowerCase())
        // ))

        return (
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/'><button className="close-search" >Close</button></Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.updateQuery(event.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <BookList books={this.state.searchedBooks} onUpdateBookShelf={onUpdateBookShelf} />
            </div>
          </div>
        )
    }
}