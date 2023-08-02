import React from "react";

const TopicCard = ({ topic}) => {
  return (
    <div key={topic.id} className="topic-card">
      <div className="user-card__profile">
        <img
          className="img-profile"
          src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
          alt="Naniel Leki"
        />
      </div>
      <div className="topic-card__details">
        <div className="topic-card__header">
          <h1 className="topic-card__title">{topic.title}</h1>
        </div>
        <p className="user-card__description user-card__description--more">
         {topic.topic_description}
        </p>
        <div className="user-card__footer">
          <div className="user-card__expression">
            <i
              className="fa fa-thumbs-up user-card__user-expression-icon"
              title="Follow"
              id="2"
            ></i>
            <h3 className="user-card__expression-number">
              Likes <span>{topic.likes.length}</span>
            </h3>
          </div>
          <div className="user-card__expression">
            <i
              className="fa fa-user user-card__user-expression-icon"
              title="Follow"
            ></i>
            <h3 className="user-card__expression-number">
              Followers <span>{topic.followers.length}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
