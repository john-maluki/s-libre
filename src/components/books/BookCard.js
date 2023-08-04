import React, { useContext } from "react";
import { findUserWithId } from "../../utils/functions";
import { UsersContext } from "../../contexts/UserContext";
import { useOutletContext } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const BookCard = ({ book }) => {
  const users = useContext(UsersContext);
  const user = findUserWithId(users, book.userId);
  const [likeBook, followBook] = useOutletContext();
  const authUser = useContext(AuthContext);

  const hasLikedBook = book.likes.includes(authUser.id);
  const hasFollowedBook = book.followers.includes(authUser.id);

  return (
    <div className="user-card">
      <div className="user-card__profile">
        <img className="img-profile" src={user.profile_pic} alt={user.name} />
      </div>
      <div className="user-card__details">
        <div className="user-card__header">
          <h1 className="user-card__title">{book.title}</h1>
        </div>
        <p className="user-card__description">{book.book_description}</p>
        <img className="user-card__img" src={book.book_pic} alt={book.title} />
        <div className="user-card__footer">
          <div className="user-card__expression">
            <i
              className={`fa ${
                hasLikedBook ? "fa-thumbs-up" : "fa-thumbs-o-up"
              } user-card__user-expression-icon`}
              title="Follow"
              id="2"
              onClick={() => likeBook(book)}
            ></i>
            <h3 className="user-card__expression-number">
              {hasLikedBook ? "Liked" : "Like"}
              <span> {book.likes.length}</span>
            </h3>
          </div>
          <div className="user-card__expression">
            <i
              className={`fa ${
                hasFollowedBook ? "fa-user" : "fa-user-o"
              } user-card__user-expression-icon`}
              title="Follow"
              onClick={() => followBook(book)}
            ></i>
            <h3 className="user-card__expression-number">
              {hasFollowedBook ? "Following" : "Follow"}
              <span> {book.followers.length}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
