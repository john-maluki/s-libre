import React,{useState, useEffect} from "react";
import RightMainBar from "../components/RightMainBar";
import Topics from "../components/topics/Topics";
import {MAIN_DOMAIN } from "../utils/constants"

const TopicsPage = () => {
  const [topics, setTopics] = useState([]);
  const [topicComments, setTopicComents] =useState([]); 
  const fetchTopicsCommentsFromServer = () => {
    fetch(`${ MAIN_DOMAIN }/topics_comments`)
      .then((resp) => resp.json())
      .then((topics_comments) => setTopics(topics_comments));
  };

  const fetchTopicsFromServer = () => {
    fetch(`${ MAIN_DOMAIN }/topics`)
      .then((resp) => resp.json())
      .then((topics) => setTopics(topics));
  };

  useEffect(() => {
    fetchTopicsFromServer();
  }, []);

  return (
    <>
      <section class="main__content-pane">
        <div id="topics_modal" class="container-card">
          <div class="container-card__header">
            <h1 class="container-card__page">Topics</h1>
            <div class="container-card__tabs">
              <h4>Topics</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div class="container-card__content">
            {/* <!-- Topics list goes here --> */}
            <Topics />
          </div>
        </div>
      </section>
      <RightMainBar />
    </>
  );
};

export default TopicsPage;
