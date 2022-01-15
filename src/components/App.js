import React from "react";
import { Container } from "./App.styled";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notofication/Nitification";
import "normalize.css";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // incrGood = () => {
  //   this.setState(prevState => ({
  //       good: prevState.good +1,
  //     }))
  // }

  // incrNeutral = () => {
  //   this.setState(prevState => ({
  //       neutral: prevState.neutral +1,
  //     }))
  // }

  // incrBad = () => {
  //   this.setState(prevState => ({
  //       bad: prevState.bad +1,
  //     }))
  // }

  onLeaveFeedback = (name) => {
    this.setState((prevState) => ({
      [name]: (prevState[name] += 1),
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback">1</Notification>
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
