import React from "react";
import TopicCard from "./TopicCard";

const Topics = ({ topics }) => {
  const topicList = topics.map((topic) => (
    <TopicCard key={topic.id} topic={topic} />
  ));

  return <>{topicList}</>;
};

export default Topics;
