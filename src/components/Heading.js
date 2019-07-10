import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefinitionHeading = styled.h3`
  margin: 45px 0 0px;
  text-align: left;
  font-size: ${props => `${props.order / 0.25}em`};
`;

const Heading = ({ order, textContent, notes }) => (
  <DefinitionHeading>{textContent}</DefinitionHeading>
);

Heading.proptypes = {
  textContent: PropTypes.string
};

Heading.defaultProps = {
  order: 1
};

export default Heading;
