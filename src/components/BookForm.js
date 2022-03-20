import React, { useState } from 'react'

const BookForm = () => {
    const [book, setBook] = useState('')

    const handleSubmit = (e) => {
        // prevent default stops the page from refreshing
        e.preventDefault()

       console.log(book)
    }

    return (
        <div>
            <h2>Add a Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Title</label>
                <input
                type='text'
                required
                value={book}
                onChange = {(e) => setBook(e.target.value)}
                />

                <button>
                    Submit
                </button>
            </form>

            <p>your book title is { book }</p>
        </div>
    )
};

export default BookForm;