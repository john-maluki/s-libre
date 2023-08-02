import React from "react";

const BookCard = () => {
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
          <h1 class="user-card__title">
            Clean Architecture: A Craftsman's Guide to Software Structure and
            Design
          </h1>
        </div>
        <p class="user-card__description">
          Clean architecture is a software design philosophy that separates the
          elements of a design into ring levels. An important goal of clean
          architecture is to provide developers with a way to organize code in
          such a way that it encapsulates the business logic but keeps it
          separate from the delivery mechanism
        </p>
        <img
          class="user-card__img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDULhOY_Xw1fSzhcxycR2hn5ifI07df0N9w&usqp=CAU"
          alt="Joy Wagere"
        />
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

export default BookCard;
