import React, { useState } from 'react'

const BookForm = () => {
    const [book, setBook] = useState('')

    return (
        <div>
            <h2>Add a Book</h2>
            <form>
                <label>Book Title</label>
                <input
                type='text'
                required
                value={book}
                onChange = {(e) => setBook(e.target.ariaValueMin)}
                />
            </form>

            <p>your book title is { book }</p>
        </div>
    )
};

export default BookForm;