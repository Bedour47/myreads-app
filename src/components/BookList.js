import React, { Component } from 'react'
import BookItem from './BookItem';

export default class BookList extends Component {
    render() {
        const bookList = this.props.books.map( book => 
            // book = {
            //     title: book.title,
            //     authors: book.authors.map(author => author),
            //     thumbnail: book.imageLinks[Object.keys(book.imageLinks)[1]]
            //     },
            <BookItem key= {book.id} value={this.props.value} title={book.title}  authors={book.authors.map(author => author)} thumbnail={book.imageLinks[Object.keys(book.imageLinks)[1]]} />
        )
        return (
            <div>
                <ol className="books-grid">
                    {bookList}
                </ol>
            </div>
        )
    }
}
