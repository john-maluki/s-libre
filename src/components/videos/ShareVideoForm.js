import React from "react";

const ShareVideoForm = ({ showForm }) => {
  return (
    <section className="modal">
      <div
        id="modal__video-close"
        className="modal__close"
        title="close"
        onClick={showForm}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </div>
      <form id="video__form" className="modal__form">
        <label for="modal__handle">Username:</label>
        <input
          className="modal__input"
          id="modal__handle"
          type="text"
          placeholder="e.g, @username"
          required
        />
        <label for="modal__video-name">Video Title:</label>
        <input
          className="modal__input"
          id="modal__video-name"
          type="text"
          placeholder="Title"
          required
        />
        <label for="modal__video-description">Video Description:</label>
        <textarea
          className="modal__input"
          id="modal__video-description"
          rows="3"
          placeholder="Video description"
          required
        ></textarea>
        <label for="modal__video-url">Image Url:</label>
        <input
          className="modal__input"
          id="modal__video-url"
          type="url"
          placeholder="Video url"
          required
        />
        <input className="modal__input" type="submit" value="Share Video" />
      </form>
    </section>
  );
};

export default ShareVideoForm;
