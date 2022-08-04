import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "from context",
      rating: 9,
    },
    {
      id: 2,
      text: "from context 2",
      rating: 7,
    },
    {
      id: 3,
      text: "from context 3",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedbackItem = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const delItem = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        delItem,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedbackItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
