import React from 'react'

export default function BookItem (props) {
        return (
            <>
                <li>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                                <select defaultValue={props.shelf} onChange = {(e) => props.onUpdateBookShelf(props.book, e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{props.title}</div>
                        <div className="book-authors">{props.authors}</div>
                    </div>
                </li>
            </>
        )
}