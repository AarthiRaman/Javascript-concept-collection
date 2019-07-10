import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefinitionHeading = styled.h3`
  margin: 45px 0 0px;
  text-align: left;
`;

const DefinitionContent = styled.p`
  margin: 0px 0 15px;
  text-align: left;
`;

function Definition({ title, textContent }) {
  return (
    <div>
      <DefinitionHeading>{title}</DefinitionHeading>;
      <DefinitionContent>{textContent}</DefinitionContent>;
    </div>
  );
}

Definition.proptypes = {
  textContent: PropTypes.string
};

export default Definition;
