import React, { useContext, useEffect, useState } from "react";
import RightMainBar from "../components/RightMainBar";
import ShareTopicForm from "../components/topics/ShareTopicForm";
import Search from "../components/Search";
import ShareButton from "../components/ShareButton";
import { MAIN_DOMAIN } from "../utils/constants";
import { TopicsContext } from "../contexts/TopicsContext";
import { Link, Outlet } from "react-router-dom";
import { getLinkStyle } from "../utils/functions";
import { AuthContext } from "../contexts/AuthContext";
import LoaderComponent from "../components/LoaderComponent";

const TopicsPage = () => {
  const [showTopicForm, setShowTopicForm] = useState(false);
  const [topics, setTopics] = useState([]);
  const authUser = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const showForm = () => {
    setShowTopicForm(!showTopicForm);
  };

  const fetchTopicsFromServer = () => {
    setIsLoading(true);
    fetch(`${MAIN_DOMAIN}/topics`)
      .then((resp) => resp.json())
      .then((topics) => {
        setIsLoading(false);
        setTopics(topics);
      });
  };

  useEffect(() => {
    fetchTopicsFromServer();
  }, []);

  const addTopic = (topic) => {
    setTopics([topic, ...topics]);
  };

  const likeTopic = (topic) => {
    const hasLiked = checkIfUserLikedTopic(topic);
    let newData;
    if (hasLiked) {
      newData = {
        ...topic,
        likes: [...topic.likes.filter((id) => id !== authUser.id)],
      };
    } else {
      newData = { ...topic, likes: [...topic.likes, authUser.id] };
    }
    updateTopicOnServer(newData);
  };

  const followTopic = (topic) => {
    const hasFollowed = checkIfUserFollowedTopic(topic);
    let newData;
    if (hasFollowed) {
      newData = {
        ...topic,
        followers: [...topic.followers.filter((id) => id !== authUser.id)],
      };
    } else {
      newData = { ...topic, followers: [...topic.followers, authUser.id] };
    }
    updateTopicOnServer(newData);
  };

  const checkIfUserLikedTopic = (topic) => {
    return topic.likes.includes(authUser.id);
  };

  const checkIfUserFollowedTopic = (topic) => {
    return topic.followers.includes(authUser.id);
  };

  const updateTopicOnServer = (topic) => {
    fetch(`${MAIN_DOMAIN}/topics/${topic.id}`, {
      method: "PATCH",
      body: JSON.stringify(topic),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((topic) => updateTopic(topic));
  };

  const updateTopic = (topic) => {
    const newTopics = topics.map((t) => (t.id === topic.id ? topic : t));
    setTopics(newTopics);
  };

  return (
    <>
      <section className="main__content-pane">
        <div id="topics_modal" className="container-card">
          <div className="container-card__header">
            <h1 className="container-card__page">Topics</h1>
            <div className="container-card__tabs">
              <h4>
                <Link to="../topics" style={getLinkStyle()}>
                  Topics
                </Link>
              </h4>
              <h4>
                <Link to="followed_topics" style={getLinkStyle()}>
                  Following
                </Link>
              </h4>
            </div>
          </div>
          <div className="container-card__content">
            {/* <!-- Topics list goes here --> */}
            {isLoading ? (
              <LoaderComponent />
            ) : (
              <TopicsContext.Provider value={topics}>
                <Outlet context={[likeTopic, followTopic]} />
              </TopicsContext.Provider>
            )}
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
