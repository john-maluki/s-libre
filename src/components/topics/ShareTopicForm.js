import React from "react";

const ShareTopicForm = ({ showForm }) => {
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
      <form id="topic__form" className="modal__form">
        <label for="modal__username">Handle:</label>
        <input
          className="modal__input"
          id="modal__username"
          type="text"
          placeholder="e.g, @doe"
          required
        />
        <label for="modal__topic-name">Write about:</label>
        <input
          className="modal__input"
          id="modal__topic-name"
          type="text"
          placeholder="topic title"
          required
        />
        <label for="modal__topic-name">Description:</label>
        <textarea
          className="modal__input"
          id="modal__topic-description"
          rows="6"
          placeholder="topic description"
          required
        ></textarea>
        <input className="modal__input" type="submit" value="Share Topic" />
      </form>
    </section>
  );
};

export default ShareTopicForm;
