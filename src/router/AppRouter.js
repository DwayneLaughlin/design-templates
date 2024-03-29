import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BookList.js';
import EmailForm from '../components/EmailForm';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<BookList/>} path="/" exact={true} />
            <Route element={<AddBook/>} path="/add" />
            <Route element={<EmailForm/>} path="/email" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;