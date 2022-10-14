import React from 'react';
import PropTypes from 'prop-types';

import { Buttons } from './FeedbackOptions.styled';
class FeedbackOptions extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.options.map(item => (
            <Buttons
              onClick={() => this.props.onLeaveFeedback(item.name, 1)}
              key={item.id}
            >
              {item.name}
            </Buttons>
          ))}
        </div>
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
