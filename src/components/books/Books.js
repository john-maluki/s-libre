import React, { useContext } from "react";
import BookCard from "./BookCard";
import { BooksContext } from "../../contexts/BooksContext";

const Books = () => {
  const books = useContext(BooksContext);
  const booksLists = books.map((book) => (
    <BookCard key={book.id} book={book} />
  ));
  return <>{booksLists}</>;
};

export default Books;
