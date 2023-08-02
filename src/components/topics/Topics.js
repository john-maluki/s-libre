import React,{useState, useEffect} from "react";
import TopicCard from "./TopicCard";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  
  const fetchTopicsFromServer = () => {
    fetch(`http://localhost:4000/topics`)
      .then((resp) => resp.json())
      .then((topics) => setTopics(topics));
  };

  useEffect(() => {
    fetchTopicsFromServer();
  }, []);

  const topicList = topics.map((topic) => <TopicCard key={topic.id} topic={topic} />);

  return (
    <>
    {topicList}
    </>
  );
};

export default Topics;
