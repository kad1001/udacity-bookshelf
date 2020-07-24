import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './bookshelf'

export default class HomePage extends Component {
    render() {

    // for each of the books getting passed through props
    function filterBooks(props, shelfName) {
        return props.books.filter(book => book.shelf === shelfName);
    }

    const searchButton = (
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    )
    
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>Kelly's Reads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf updateShelf={this.props.updateShelf} shelf="Currently Reading" books={filterBooks(this.props, 'currentlyReading')} />,
                    <BookShelf updateShelf={this.props.updateShelf} shelf="Want to Read" books={filterBooks(this.props, 'wantToRead')} />,
                    <BookShelf updateShelf={this.props.updateShelf} shelf="Read" books={filterBooks(this.props, 'read')} />

                </div>

                {searchButton}

            </div>
        )
    }
}