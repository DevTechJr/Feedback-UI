import React from "react";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
const FeedbackList = () => {
  const { feedback, delItem } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet!</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item}  />
      ))}
    </div>
  );
};

export default FeedbackList;
