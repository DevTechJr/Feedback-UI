import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { useContext, useEffect } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedbackItem } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const changeText = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Your message must be more than 10 characters");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = { rating, text };
    if (feedbackEdit.edit == true) {
      updateFeedbackItem(feedbackEdit.item.id, newFeedback);
    } else {
      addFeedback(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
            setText(text);
          }}
        />
        <div className="input-group">
          <input
            onChange={changeText}
            type="text"
            placeholder="Blah blah blah..."
            value={text}
          />
          <Button isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
