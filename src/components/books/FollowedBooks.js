import React, { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import BookCard from "./BookCard";
import { AuthContext } from "../../contexts/AuthContext";

const FollowedBooks = () => {
  const books = useContext(BooksContext);
  const authUser = useContext(AuthContext);

  const followedBooks = books.filter((book) =>
    book.followers.includes(authUser.id)
  );
  const booksLists = followedBooks.map((book) => (
    <BookCard key={book.id} book={book} />
  ));
  return (
    <>
      {booksLists.length !== 0 ? (
        booksLists
      ) : (
        <p>You have not followed any book!!</p>
      )}
    </>
  );
};

export default FollowedBooks;
