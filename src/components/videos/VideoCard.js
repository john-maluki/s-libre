import React, { useContext } from "react";
import { UsersContext } from "../../contexts/UserContext";
import { findUserWithId } from "../../utils/functions";
import { useOutletContext } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const VideoCard = ({ video }) => {
  const users = useContext(UsersContext);
  const user = findUserWithId(users, video.userId);

  const [likeVideo, followVideo] = useOutletContext();
  const authUser = useContext(AuthContext);

  const hasLikedVideo = video.likes.includes(authUser.id);
  const hasFollowedVideo = video.followers.includes(authUser.id);

  return (
    <div className="user-card" key={video.id}>
      <div className="user-card__profile">
        <img className="img-profile" src={user.profile_pic} alt={user.name} />
      </div>
      <div className="user-card__details">
        <div className="user-card__header">
          <h1 className="user-card__title">{video.title}</h1>
        </div>
        <p className="user-card__description">{video.video_description}</p>
        <div className="user-card__video">
          <iframe
            width="100%"
            height="100%"
            src={video.video_url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="user-card__footer">
          <div className="user-card__expression">
            <i
              className={`fa ${
                hasLikedVideo ? "fa-thumbs-up" : "fa-thumbs-o-up"
              } user-card__user-expression-icon`}
              title="Like"
              id="4"
              onClick={() => likeVideo(video)}
            ></i>
            <h3 className="user-card__expression-number">
              {hasLikedVideo ? "Liked " : "Like "}{" "}
              <span>{video.likes.length}</span>
            </h3>
          </div>
          <div className="user-card__expression">
            <i
              className={`fa ${
                hasFollowedVideo ? "fa-user" : "fa-user-o"
              } user-card__user-expression-icon`}
              title="Follow"
              onClick={() => followVideo(video)}
            ></i>
            <h3 className="user-card__expression-number">
              Followers <span>{video.followers.length}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
