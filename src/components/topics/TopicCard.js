import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UserContext";
import { findUserWithId } from "../../utils/functions";
import { useOutletContext } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const TopicCard = ({ topic }) => {
  const users = useContext(UsersContext);
  const user = findUserWithId(users, topic.userId);

  const [likeTopic, followTopic] = useOutletContext();
  const authUser = useContext(AuthContext);

  const hasLikedTopic = topic.likes.includes(authUser.id);
  const hasFollowedTopic = topic.followers.includes(authUser.id);

  return (
    <div key={topic.id} className="topic-card">
      <div className="user-card__profile">
        <img className="img-profile" src={user.profile_pic} alt={user.name} />
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
              className={`fa ${
                hasLikedTopic ? "fa-thumbs-up" : "fa-thumbs-o-up"
              } user-card__user-expression-icon`}
              title="Follow"
              id="2"
              onClick={() => likeTopic(topic)}
            ></i>
            <h3 className="user-card__expression-number">
              {hasLikedTopic ? "Liked " : "Like "}
              <span>{topic.likes.length}</span>
            </h3>
          </div>
          <div className="user-card__expression">
            <i
              className={`fa ${
                hasFollowedTopic ? "fa-user" : "fa-user-o"
              } user-card__user-expression-icon`}
              title="Follow"
              onClick={() => followTopic(topic)}
            ></i>
            <h3 className="user-card__expression-number">
              {hasFollowedTopic ? "Following" : "Follow"}{" "}
              <span>{topic.followers.length}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
