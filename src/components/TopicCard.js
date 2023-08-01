import React from "react";

const TopicCard = () => {
  return (
    <div class="topic-card">
      <div class="user-card__profile">
        <img
          class="img-profile"
          src="https://images.unsplash.com/photo-1466112928291-0903b80a9466?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
          alt="Naniel Leki"
        />
      </div>
      <div class="topic-card__details">
        <div class="topic-card__header">
          <h1 class="topic-card__title">Clean architecture</h1>
        </div>
        <p class="user-card__description user-card__description--more">
          Clean architecture is a software design philosophy that separates the
          elements of a design into ring levels. An important goal of clean
          architecture is to provide developers with a way to organize code in
          such a way that it encapsulates the business logic but keeps it
          separate from the delivery mechanism{" "}
        </p>
        <div class="user-card__footer">
          <div class="user-card__expression">
            <i
              class="fa fa-thumbs-up user-card__user-expression-icon"
              title="Follow"
              id="2"
            ></i>
            <h3 class="user-card__expression-number">
              Likes <span>40</span>
            </h3>
          </div>
          <div class="user-card__expression">
            <i
              class="fa fa-user user-card__user-expression-icon"
              title="Follow"
            ></i>
            <h3 class="user-card__expression-number">
              Followers <span>150</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
