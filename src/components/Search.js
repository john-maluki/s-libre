import React from "react";

const Search = () => {
  return (
    <div className="main__search">
      <div className="main__user-search">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input type="search" placeholder="Search studentShare" />
      </div>
    </div>
  );
};

export default Search;
