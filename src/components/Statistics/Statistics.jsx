import React from 'react';
import Notification from 'components/Notification/Notification';
class Statistics extends React.Component {
  render() {
    return (
      <div>
        <h1>Statistics</h1>
        {this.props.total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <ul>
            <li>Good: {this.props.good}</li>
            <li>Neutral: {this.props.neutral}</li>
            <li>Bad: {this.props.bad}</li>
            <li>Total: {this.props.total}</li>
            <li>
              Positive feedback: {this.props.countPositiveFeedbackPercentage()}%
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default Statistics;
