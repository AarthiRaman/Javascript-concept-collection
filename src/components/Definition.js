import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DefinitionContent = styled.p`
  margin: 10px 0 15px;
  text-align: left;
  font-weight: 500;
`;

function Definition({ title, textContent, notes }) {
  return (
    <div>
      <DefinitionContent>{textContent}</DefinitionContent>;
    </div>
  );
}

Definition.proptypes = {
  textContent: PropTypes.string
};

export default Definition;
