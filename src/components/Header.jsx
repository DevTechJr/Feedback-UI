import React from "react";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className="container">
      <h2>
        <Link to="/about" style={{ color: "white" }}>
          {props.text}
        </Link>
      </h2>
    </div>
  );
}
