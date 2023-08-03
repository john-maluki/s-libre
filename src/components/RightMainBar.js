import React from "react";

const RightMainBar = ({ children, showForm, desc, name }) => {
  return (
    <>
      <section className="main__right-pane">{children}</section>
    </>
  );
};

export default RightMainBar;
