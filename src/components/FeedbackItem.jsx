import React, { useState } from "react";
import Card from "./shared/Card";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { delItem, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div key={item.id} className="num-display">
        {item.rating}
      </div>
      <button className="edit">
        <FaEdit color="gray" onClick={() => editFeedback(item)} />
      </button>
      <button className="close" onClick={() => delItem(item.id)}>
        <FaTrashAlt color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

Card.defaultProps = {
  rating: Number,
  text: String,
};

export default FeedbackItem;
