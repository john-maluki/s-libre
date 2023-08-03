import React,{useState, useEffect} from "react";
import RightMainBar from "../components/RightMainBar";
import Books from "../components/books/Books";
import {MAIN_DOMAIN } from "../utils/constants"

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [topicBooks, setBookComents] =useState([]); 
  const fetchBooksCommentsFromServer = () => {
    fetch(`${ MAIN_DOMAIN }/books_comments`)
      .then((resp) => resp.json())
      .then((books_comments) => setBooks(books_comments));
  };

  const fetchBooksFromServer = () => {
    fetch(`${ MAIN_DOMAIN }/books`)
      .then((resp) => resp.json())
      .then((books) => setBooks(books));
  };
  return (
    <>
      <section className="main__content-pane">
        <div id="home_modal" className="container-card">
          <div className="container-card__header">
            <h1 className="container-card__page">Books</h1>
            <div className="container-card__tabs">
              <h4>Books</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div className="container-card__content">
            {/* <!-- Books list goes here --> */}
            <Books />
          </div>
        </div>
      </section>
      <RightMainBar />
    </>
  );
};

export default BooksPage;
