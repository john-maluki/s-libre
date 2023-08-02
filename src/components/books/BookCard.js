import React from "react";

const BookCard = ({book}) => {
  return (
    <div className="user-card">
      <div className="user-card__profile">
        <img
          className="img-profile"
          src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&amp;ext=jpg&amp;ga=GA1.1.56092171.1688454543&amp;semt=ais"
          alt="Joy Wagere"
        />
      </div>
      <div className="user-card__details">
        <div className="user-card__header">
          <h1 className="user-card__title">
            {book.title}

          </h1>
        </div>
        <p className="user-card__description">
         {book.book_description}
        </p>
        <img
          className="user-card__img"
          src={book.book_pic}
          alt="Joy Wagere"
        />
        <div className="user-card__footer">
          <div className="user-card__expression">
            <i
              className="fa fa-thumbs-up user-card__user-expression-icon"
              title="Follow"
              id="2"
            ></i>
            <h3 className="user-card__expression-number">
              Likes <span>{book.likes.length}</span>
            </h3>
          </div>
          <div className="user-card__expression">
            <i
              className="fa fa-user user-card__user-expression-icon"
              title="Follow"
            ></i>
            <h3 className="user-card__expression-number">
              Followers <span>{book.followers.length}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
