import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Snippets from "../components/Snippets";
import Heading from "../components/Heading";
import ReferenceSections from "../components/ReferenceSections";
import Definition from "../components/Definition";
import Notes from "../components/Notes";

const ExcerciseWrapper = styled.div`
  text-align: left;
  color: charcoal;
  padding: 0 20px;
`;

function ExcerciseContainer({ textContent }) {
  const itemMap = {
    snippet: Snippets,
    heading: Heading,
    text: Notes,
    definition: Notes,
    referenceLinks: ReferenceSections
  };

  return (
    <ExcerciseWrapper>
      {textContent.map(item => {
        const Component = itemMap[item.type];
        return Component && <Component textContent={item.text} />;
      })}
    </ExcerciseWrapper>
  );
}

ExcerciseContainer.propTypes = {
  children: PropTypes.node
};

export default ExcerciseContainer;
