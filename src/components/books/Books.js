import React from "react";
import BookCard from "./BookCard";

const Books = ({ books }) => {
  const booksLists = books.map((book) => (
    <BookCard key={book.id} book={book} />
  ));
  return <>{booksLists}</>;
};

export default Books;
