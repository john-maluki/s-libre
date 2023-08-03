import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MAIN_DOMAIN } from "../../utils/constants";

const ShareBookForm = ({ showForm, onAddBook }) => {
  const authUser = useContext(AuthContext);
  const initialData = {
    title: "",
    author: "",
    book_description: "",
    book_pic:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80",
    userId: authUser.id,
    likes: [],
    followers: [],
  };

  const [formData, setFormData] = useState(initialData);
  const postDataToServer = (newBook) => {
    fetch(`${MAIN_DOMAIN}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((book) => onAddBook(book));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const bookData = { ...formData, [name]: value };
    setFormData(bookData);
  };

  const handleFormSubmision = (e) => {
    e.preventDefault();
    postDataToServer(formData);
    setFormData(initialData);
  };

  return (
    <section className="modal">
      <div
        id="modal__topic-close"
        className="modal__close"
        title="close"
        onClick={showForm}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <form className="modal__form" onSubmit={handleFormSubmision}>
        <label htmlFor="modal__title">Title:</label>
        <input
          className="modal__input"
          id="modal__title"
          type="text"
          placeholder="Type book author"
          required
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="modal__author">Author:</label>
        <input
          className="modal__input"
          id="modal__author"
          type="text"
          placeholder="Type book author"
          required
          name="author"
          onChange={handleChange}
        />
        <label htmlFor="modal__desc">Short Description:</label>
        <textarea
          className="modal__input"
          id="modal__desc"
          rows="6"
          required
          name="book_description"
          onChange={handleChange}
        ></textarea>
        <label htmlFor="modal__book-url">Image Url:</label>
        <input
          className="modal__input"
          id="modal__book-url"
          type="url"
          placeholder="image url"
          // required
          name="book_pic"
          onChange={handleChange}
        />
        <input className="modal__input" type="submit" value="Share Book" />
      </form>
    </section>
  );
};

export default ShareBookForm;
