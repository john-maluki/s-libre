import React, { useContext, useEffect, useState } from "react";
import RightMainBar from "../components/RightMainBar";
import ShareBookForm from "../components/books/ShareBookForm";
import ShareButton from "../components/ShareButton";
import Search from "../components/Search";
import { MAIN_DOMAIN } from "../utils/constants";
import { Link, Outlet } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";
import { getLinkStyle } from "../utils/functions";
import { AuthContext } from "../contexts/AuthContext";

const BooksPage = () => {
  const [showBookForm, setShowBookForm] = useState(false);
  const [books, setBooks] = useState([]);
  const authUser = useContext(AuthContext);

  const showForm = () => {
    setShowBookForm(!showBookForm);
  };

  const fetchBooks = () => {
    fetch(`${MAIN_DOMAIN}/books`)
      .then((response) => response.json())
      .then((books) => setBooks(books));
  };

  const likeBook = (book) => {
    const hasLiked = checkIfUserLikedBook(book);
    let newData;
    if (hasLiked) {
      newData = {
        ...book,
        likes: [...book.likes.filter((id) => id !== authUser.id)],
      };
    } else {
      newData = { ...book, likes: [...book.likes, authUser.id] };
    }
    updateBookOnServer(newData);
  };

  const followBook = (book) => {
    const hasFollowed = checkIfUserFolloedBook(book);
    let newData;
    if (hasFollowed) {
      newData = {
        ...book,
        followers: [...book.followers.filter((id) => id !== authUser.id)],
      };
    } else {
      newData = { ...book, followers: [...book.followers, authUser.id] };
    }
    updateBookOnServer(newData);
  };

  const updateBookOnServer = (book) => {
    fetch(`${MAIN_DOMAIN}/books/${book.id}`, {
      method: "PATCH",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((book) => updateBook(book));
  };

  const checkIfUserLikedBook = (book) => {
    return book.likes.includes(authUser.id);
  };

  const checkIfUserFolloedBook = (book) => {
    return book.followers.includes(authUser.id);
  };

  const updateBook = (book) => {
    const newbooks = books.map((b) => (b.id === book.id ? book : b));
    setBooks(newbooks);
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
              <h4>
                <Link to="../books" style={getLinkStyle()}>
                  Books
                </Link>
              </h4>
              <h4>
                <Link to="followed_books" style={getLinkStyle()}>
                  Following
                </Link>
              </h4>
            </div>
          </div>
          <div className="container-card__content">
            {/* <!-- Books list goes here --> */}
            <BooksContext.Provider value={books}>
              <Outlet context={[likeBook, followBook]} />
            </BooksContext.Provider>
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
