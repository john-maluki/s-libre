import React from "react";

const UserCard = () => {
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
          <h1 class="user-card__title">Joy Wagere</h1>
          <span class="user-card__handle">@joy</span>
        </div>
        <p class="user-card__description">
          A difficult boss can be sometimes hard to please but, having him or
          her start their month with a heartfelt message from you elevates you
          to his or her good book. No matter how tough they can be, they will be
          pleased to know you support, care, and share in their success.
        </p>
        <img
          class="user-card__img"
          src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.56092171.1688454543&amp;semt=ais"
          alt="Joy Wagere"
        />
      </div>
    </div>
  );
};

export default UserCard;
