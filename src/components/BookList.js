import React, { Component } from 'react'
import BookItem from './BookItem';

export default class BookList extends Component {
    render() {
        const { allBooks, books } = this.props

        const bookList = books.map( book => 
            <BookItem 
                key= {book.id} 
                book={book} 
                shelf={
                    allBooks.findIndex(x => x.id === book.id) >= 0 
                    ? allBooks[allBooks.findIndex(x => x.id === book.id)].shelf 
                    : 'none' 
                } 
                title={book.title}  
                authors={
                    book.authors !== undefined && 
                    book.authors.map((author) => ( author+' ' ))
                } 
                thumbnail={
                    book.imageLinks !== undefined 
                    ? book.imageLinks[Object.keys(book.imageLinks)[1]] 
                    : 'https://media.istockphoto.com/photos/white-blank-book-cover-isolated-on-blue-picture-id478484670?k=6&m=478484670&s=612x612&w=0&h=LUWCrPzKDuBjrTE5JjWEhmRfK7ns-OGYX0aPimWx1_Y='
                } 
                onUpdateBookShelf={this.props.onUpdateBookShelf} 
            />
        )
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookList}
                </ol>
            </div>
        )
    }
}
