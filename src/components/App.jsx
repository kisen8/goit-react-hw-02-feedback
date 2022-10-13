import React from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

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
      <div>
        <Feedback onClick={this.updateState} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
