import React, { useContext } from "react";
import { TopicsContext } from "../../contexts/TopicsContext";
import TopicCard from "./TopicCard";
import { AuthContext } from "../../contexts/AuthContext";

const FollowedTopics = () => {
  const topics = useContext(TopicsContext);
  const authUser = useContext(AuthContext);

  const followedTopics = topics.filter((topic) =>
    topic.followers.includes(authUser.id)
  );
  const topicList = followedTopics.map((topic) => (
    <TopicCard key={topic.id} topic={topic} />
  ));

  return (
    <>{followedTopics.length !== 0 ? topicList : <p>Nothing to show</p>}</>
  );
};

export default FollowedTopics;
