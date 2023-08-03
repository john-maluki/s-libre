import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MAIN_DOMAIN } from "../../utils/constants";

const ShareVideoForm = ({ showForm, onAddVideo }) => {
  const authUser = useContext(AuthContext);
  const initialData = {
    title: "",
    video_description: "",
    video_url: "",
    userId: authUser.id,
    likes: [],
    followers: [],
  };
  const [videoData, setVideoData] = useState(initialData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setVideoData({ ...videoData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${MAIN_DOMAIN}/videos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(videoData),
    })
      .then((r) => r.json())
      .then((video) => onAddVideo(video));
    setVideoData(initialData);
  };

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
      <form id="video__form" className="modal__form" onSubmit={handleSubmit}>
        {/* <label for="modal__handle">Username:</label>
        <input
          className="modal__input"
          id="modal__handle"
          type="text"
          placeholder="e.g, @username"
          required
        /> */}
        <label for="modal__video-name">Video Title:</label>
        <input
          className="modal__input"
          id="modal__video-name"
          type="text"
          name="title"
          onChange={handleChange}
          value={videoData.title}
          placeholder="Title"
          required
        />
        <label for="modal__video-description">Video Description:</label>
        <textarea
          className="modal__input"
          id="modal__video-description"
          rows="3"
          name="video_description"
          onChange={handleChange}
          value={videoData.video_description}
          placeholder="Video description"
          required
        ></textarea>
        <label for="modal__video-url">Video Url:</label>
        <input
          className="modal__input"
          id="modal__video-url"
          type="url"
          name="video_url"
          onChange={handleChange}
          value={videoData.video_url}
          placeholder="Video url"
          required
        />
        <input className="modal__input" type="submit" value="Share Video" />
      </form>
    </section>
  );
};

export default ShareVideoForm;
