import React from "react";
import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  }
  onLeaveFeedback = value => {
  this.setState(prevState => ({[value]: prevState[value] + 1}))
  }
  totalFeedbacks = () => {
    return (
      Object.values(this.state).reduce((acc, value) => {
        return acc += value }, 0))
  }
  positiveFeedbacksPrecentage = () => {
    return this.totalFeedbacks() > 0 ? `${Math.round((this.state.good) / (this.totalFeedbacks())*100)} %` : `0%`
  }
  render() {
    return (
      <><Section title='Please leave Feedback'>
        <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} btnNames={Object.keys(this.state)}></FeedbackOptions>
      </Section><Section title='Statistic'>
          {this.totalFeedbacks() ? <Statistics feedbacks={this.state} total={this.totalFeedbacks()} positivePercentage={this.positiveFeedbacksPrecentage()}></Statistics>
          : <Section title='There is no Feedback'></Section>}
        </Section></>
    )
  }
}

