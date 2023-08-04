import React, { useContext } from "react";
import TopicCard from "./TopicCard";
import { TopicsContext } from "../../contexts/TopicsContext";

const Topics = () => {
  const topics = useContext(TopicsContext);
  const topicList = topics.map((topic) => (
    <TopicCard key={topic.id} topic={topic} />
  ));

  return <>{topicList}</>;
};

export default Topics;
