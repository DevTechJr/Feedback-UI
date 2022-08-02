import React from "react";
import Card from "../components/shared/Card";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          A sandbox project developed to test out React Router 6 and practice
          React JS Skills.
        </p>
        <p>Made by Anirudh</p>

        <p>
          <Link to="/">Go Back Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
