import React from "react";
import BookForm from "./BookForm"

const AddBook = () => {
    const handleOnSumbit = (book) => {
        console.log(book)
    }

    return (
        <React.Fragment>
            <BookForm handleOnSumbit={handleOnSumbit} />
        </React.Fragment>
    );
};

export default AddBook