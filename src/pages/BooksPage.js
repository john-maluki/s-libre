import React, { useEffect, useState } from "react";
import RightMainBar from "../components/RightMainBar";
import Books from "../components/books/Books";
import ShareBookForm from "../components/books/ShareBookForm";
import ShareButton from "../components/ShareButton";
import Search from "../components/Search";
import { MAIN_DOMAIN } from "../utils/constants";

const BooksPage = () => {
  const [showBookForm, setShowBookForm] = useState(false);
  const [books, setBooks] = useState([]);

  // const [booksComments, setBookComments] = useState([]);

  // const fetchBooksCommentsFromServer = () => {
  //   fetch(`${MAIN_DOMAIN}/books_comments`)
  //     .then((resp) => resp.json())
  //     .then((booksComments) => setBookComments(booksComments));
  // };

  const showForm = () => {
    setShowBookForm(!showBookForm);
  };

  const fetchBooks = () => {
    fetch(`${MAIN_DOMAIN}/books`)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const addBook = (book) => {
    setBooks([book, ...books]);
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
            <Books books={books} />
          </div>
        </div>
      </section>
      <RightMainBar>
        <Search placeholder="Search Books" />
        <ShareButton
          onAction={showForm}
          name="Share Book"
          desc="Share book with others"
        />
      </RightMainBar>
      {showBookForm ? (
        <ShareBookForm showForm={showForm} onAddBook={addBook} />
      ) : null}
    </>
  );
};

export default BooksPage;
