import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="user-card" key={video.id}>
      <div className="user-card__profile">
        <img
          className="img-profile"
          src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.56092171.1688454543&amp;semt=ais"
          alt="Joy Wagere"
        />
      </div>
      <div className="user-card__details">
        <div className="user-card__header">
          <h1 className="user-card__title">{video.title}</h1>
          <span className="user-card__handle">@joy</span>
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
              className="fa fa-thumbs-up user-card__user-expression-icon"
              title="Like"
              id="4"
            ></i>
            <h3 className="user-card__expression-number">
              Likes <span>{video.likes.length}</span>
            </h3>
          </div>
          <div className="user-card__expression">
            <i
              className="fa fa-user user-card__user-expression-icon"
              title="Follow"
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
