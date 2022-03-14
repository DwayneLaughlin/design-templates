import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
    // THIS STORES INPUT DATA FROM THE FORM. IF THE PROP IS PASSED THE BOOKFORM WILL USE THAT DATA. IF NOT IT WILL USE AN EMPTY STRING
  const [book, setBook] = useState({
    bookname: props.book ? props.book.bookname : '',
    author: props.book ? props.book.author : '',
    quantity: props.book ? props.book.quantity : '',
    price: props.book ? props.book.price : '',
    date: props.book ? props.book.date : ''
  });
//   THIS DISPLAYS AN ERROR MESSAGE. USES DESTRUCTURING TO REFER TO ALL PARTS OF THE BOOKFORM
  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, price, quantity } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, price, quantity];
    let errorMsg = '';
// EVERY() METHOD CHECKS FOR EVERY ITEM IN THE VALUES ARRAY. IT CHECKS WHETHER A FUNCTION IS TRUE FOR EACH ELEMENT IN THE ARRAY. IN THIS CASE IT IS CHECKING TO MAKE SURE THAT EACH PART OF THE FORM IS NOT A 0 OR THAT IT HAS NOT BEEN LEFT BLANK. 
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });
// IF THE EVERY() METHOD RETURNS TRUE FOR EACH OF THE ITEMS IN THE VALUES ARRAY IT WILL EXECUTE THIS CODE. THE UUIDV4 METHOD CREATES A UNIQUE ID FOR EACH ITEM ADDED TO THE FORM. 
    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        price,
        quantity,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };
//  HANDLES CHANGES IN INPUTS FOR QUANTITY AND PRICE IN THE FORM. ENTERING INFORMATION INTO THE QUANTITY FIELD CAUSES FIRST SWITCH CASE TO TEST FOR WHETHER OR NOT AN INTEGER HAS BEEN ENTERED INTO THE FIELD. CODE WILL NOT EXECUTE FOR A DECIMAL OR NEGATIVE NUMBER.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
//SECOND CASE CHECKS FOR PRICE. IT WILL ONLY WORK WITH A NUMBER THAT HAS 2 DIGITS AFTER THE DECIMAL. value.match(/^\d{1,}(\.\d{0,2})?$/) IS USED TO CHECK FOR THAT. 
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };
// THIS RETURNS THE FORM WHERE BOOK INFO GETS ENTERED. 
  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Book Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
// this is used on the addbook component