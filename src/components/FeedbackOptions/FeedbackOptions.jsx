import React from "react";
import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {/* <FeedbackItem><button type="button" name="good" onClick={e => {
              onLeaveFeedback(e.currentTarget.name)}}>Good</button></FeedbackItem>
            <FeedbackItem><button type="button" name="neutral" onClick={e => {
              onLeaveFeedback(e.currentTarget.name)}}>Neutral</button></FeedbackItem>
            <FeedbackItem><button type="button" name="bad" onClick={e => {
              onLeaveFeedback(e.currentTarget.name)}}>Bad</button></FeedbackItem> */}
      {Object.keys(options).map((item) => (
        <FeedbackItem key={item}>
          <FeedbackBtn
            type="button"
            name={item}
            onClick={(e) => {
                onLeaveFeedback(e.currentTarget.name);
            }}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </FeedbackBtn>
        </FeedbackItem>
      ))}
    </FeedbackList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
}

