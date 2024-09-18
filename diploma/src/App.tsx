import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import HomePage from "pages/HomePage";
import BookPage from "pages/BookPage";

import "react-toastify/dist/ReactToastify.css";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
