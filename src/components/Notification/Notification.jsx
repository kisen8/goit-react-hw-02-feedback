import React from 'react';
import { TitleNotification } from './Notification.styled';
import PropTypes from 'prop-types';
class Notification extends React.Component {
  render() {
    return (
      <div>
        <TitleNotification>{this.props.message}</TitleNotification>
      </div>
    );
  }
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
