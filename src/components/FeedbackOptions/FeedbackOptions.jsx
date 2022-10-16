import React from 'react';
import PropTypes from 'prop-types';

import { Buttons } from './FeedbackOptions.styled';
class FeedbackOptions extends React.Component {
  render() {
    return (
      <div>
        <div>
          {Object.keys(this.props.options).map((item, index) => (
            <Buttons
              onClick={() => this.props.onLeaveFeedback(item)}
              key={index}
            >
              {item}
            </Buttons>
          ))}
        </div>
      </div>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
