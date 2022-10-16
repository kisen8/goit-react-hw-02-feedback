import React from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

import { Box } from 'App.styled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateState = key => {
    this.setState({ [key]: this.state[key] + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const number = this.state.good + this.state.neutral + this.state.bad;
    if (number === 0) {
      return 0;
    }
    return ((this.state.good * 100) / number).toFixed();
  };
  render() {
    return (
      <Box>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateState}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </Box>
    );
  }
}

export default App;
