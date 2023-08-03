import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { MAIN_DOMAIN } from "../../utils/constants";

const ShareTopicForm = ({ showForm, onAddTopic }) => {
  const authUser = useContext(AuthContext);
  const initialData = {
    title: "",
    topic_description: "",
    userId: authUser.id,
    likes: [],
    followers: [],
  };
  const [topicData, setTopicData] = useState(initialData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTopicData({ ...topicData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${MAIN_DOMAIN}/topics`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(topicData),
    })
      .then((r) => r.json())
      .then((topic) => onAddTopic(topic));
    setTopicData(initialData);
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
      <form id="topic__form" className="modal__form" onSubmit={handleSubmit}>
        {/* <label for="modal__username">Handle:</label>
        <input
          className="modal__input"
          id="modal__username"
          type="text"
          placeholder="e.g, @doe"
          required
        /> */}
        <label for="modal__topic-name">Write about:</label>
        <input
          className="modal__input"
          id="modal__topic-name"
          type="text"
          name="title"
          onChange={handleChange}
          value={topicData.title}
          placeholder="topic title"
          required
        />
        <label for="modal__topic-name">Description:</label>
        <textarea
          className="modal__input"
          id="modal__topic-description"
          rows="6"
          name="topic_description"
          onChange={handleChange}
          value={topicData.topic_description}
          placeholder="topic description"
          required
        ></textarea>
        <input className="modal__input" type="submit" value="Share Topic" />
      </form>
    </section>
  );
};

export default ShareTopicForm;
