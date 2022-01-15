import React from "react";
import PropTypes from "prop-types";
import { StatisticsList, StatisticsItem } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive fedback: {positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  tottal: PropTypes.number,
  positivePercentage: PropTypes.number,
};
