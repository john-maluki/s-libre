import React, { useState,useEffect } from "react";
import BookCard from "./BookCard";

const Books = () => {
  const[books,setBooks]=useState([])
  const fetchBooks=()=> {
    fetch("http://localhost:4000/books")
    .then((response)=>response.json())
    .then((books)=>setBooks(books))

  }
  useEffect(()=>{
    fetchBooks()
  },[])
  const booksLists=books.map((book)=><BookCard key={book.id}book={book} />)
  return <>{booksLists}</>
};

export default Books;
