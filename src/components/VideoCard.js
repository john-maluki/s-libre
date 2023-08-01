import React from "react";

const VideoCard = () => {
  return (
    <div class="user-card">
      <div class="user-card__profile">
        <img
          class="img-profile"
          src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.56092171.1688454543&amp;semt=ais"
          alt="Joy Wagere"
        />
      </div>
      <div class="user-card__details">
        <div class="user-card__header">
          <h1 class="user-card__title">how I would learn digital marketing</h1>
          <span class="user-card__handle">@joy</span>
        </div>
        <p class="user-card__description">
          If I have to learn Digital Marketing from scratch again, I will do if
          differently to ensure I learn things quicker, have a stronger profile
          and grow quicker. I would learn things systematically keeping in mind
          the long term success and avoid shortcuts and avoid the noise in this
          space about learning
        </p>
        <div class="user-card__video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/aUerDG2SNTA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen=""
          ></iframe>
        </div>
        <div class="user-card__footer">
          <div class="user-card__expression">
            <i
              class="fa fa-thumbs-up user-card__user-expression-icon"
              title="Like"
              id="4"
            ></i>
            <h3 class="user-card__expression-number">
              Likes <span>0</span>
            </h3>
          </div>
          <div class="user-card__expression">
            <i
              class="fa fa-user user-card__user-expression-icon"
              title="Follow"
            ></i>
            <h3 class="user-card__expression-number">
              Followers <span>0</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
