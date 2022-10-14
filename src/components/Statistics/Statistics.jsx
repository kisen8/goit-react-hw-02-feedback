import React from 'react';
import Notification from 'components/Notification/Notification';
import { StatisticsSection, StatList, StatItem } from './Statistics.styled';
import PropTypes from 'prop-types';
class Statistics extends React.Component {
  render() {
    return (
      <StatisticsSection>
        {this.props.total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <StatList>
            <StatItem>Good: {this.props.good}</StatItem>
            <StatItem>Neutral: {this.props.neutral}</StatItem>
            <StatItem>Bad: {this.props.bad}</StatItem>
            <StatItem>Total: {this.props.total}</StatItem>
            <StatItem>
              Positive feedback: {this.props.countPositiveFeedbackPercentage()}%
            </StatItem>
          </StatList>
        )}
      </StatisticsSection>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
export default Statistics;
