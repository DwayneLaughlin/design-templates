import React from "react";
import BookForm from './BookForm'

const AddBook = () => {
    const handleOnSubmit = (book) => {
        console.log(book);
    };

    return (
        <div>
        <React.Fragment>
            <BookForm handleOnSubmit = {handleOnSubmit} />
        </React.Fragment>
        <p>hwy</p>
        </div>
       
    );
};

export default AddBook;