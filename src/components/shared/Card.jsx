import React from "react";

const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  reverse: Boolean,
};

export default Card;
