import React from 'react';

import { FeedbackSection, SectionTitle } from './Section.styled';

import PropTypes from 'prop-types';
class Section extends React.Component {
  render() {
    return (
      <FeedbackSection>
        <SectionTitle>{this.props.title}</SectionTitle>
        <div>{this.props.children}</div>
      </FeedbackSection>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
