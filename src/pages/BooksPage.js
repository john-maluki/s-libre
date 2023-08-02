import React from "react";
import RightMainBar from "../components/RightMainBar";
import Books from "../components/books/Books";

const BooksPage = () => {
  return (
    <>
      <section class="main__content-pane">
        <div id="home_modal" class="container-card">
          <div class="container-card__header">
            <h1 class="container-card__page">Books</h1>
            <div class="container-card__tabs">
              <h4>Books</h4>
              <h4>Following</h4>
            </div>
          </div>
          <div class="container-card__content">
            {/* <!-- Books list goes here --> */}
            <Books />
          </div>
        </div>
      </section>
      <RightMainBar />
    </>
  );
};

export default BooksPage;
