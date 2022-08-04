import React from "react";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import Spinner from "./Spinner";
const FeedbackList = () => {
  const { feedback, delItem, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet!</p>;
  }

  return isLoading ? (
    <>
      <h3>Loading... </h3>
      <Spinner />
    </>
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;
