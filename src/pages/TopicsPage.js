import React, { useEffect, useState } from "react";
import RightMainBar from "../components/RightMainBar";
import Topics from "../components/topics/Topics";
import ShareTopicForm from "../components/topics/ShareTopicForm";
import Search from "../components/Search";
import ShareButton from "../components/ShareButton";
import { MAIN_DOMAIN } from "../utils/constants";

const TopicsPage = () => {
  const [showTopicForm, setShowTopicForm] = useState(false);
  const [topics, setTopics] = useState([]);
  // const [topicComments, setTopicComents] = useState([]);

  const showForm = () => {
    setShowTopicForm(!showTopicForm);
  };

  // const fetchTopicsCommentsFromServer = () => {
  //   fetch(`${MAIN_DOMAIN}/topics_comments`)
  //     .then((resp) => resp.json())
  //     .then((topicsComments) => setTopicComents(topicsComments));
  // };

  const fetchTopicsFromServer = () => {
    fetch(`${MAIN_DOMAIN}/topics`)
      .then((resp) => resp.json())
      .then((topics) => setTopics(topics));
  };

  useEffect(() => {
    fetchTopicsFromServer();
  }, []);

  const addTopic = (topic) => {
    setTopics([topic, ...topics]);
  };
  return (
    <>
      <section className="main__content-pane">
        <div id="topics_modal" className="container-card">
          <div className="container-card__header">
            <h1 className="container-card__page">Topics</h1>
            <div className="container-card__tabs">
              <h4>Topics</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div className="container-card__content">
            {/* <!-- Topics list goes here --> */}
            <Topics topics={topics} />
          </div>
        </div>
      </section>
      <RightMainBar>
        <Search placeholder="Search Topics" />
        <ShareButton onAction={showForm} />
      </RightMainBar>
      {showTopicForm ? (
        <ShareTopicForm showForm={showForm} onAddTopic={addTopic} />
      ) : null}
    </>
  );
};

export default TopicsPage;
