import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Snippets from "../components/Snippets";
import Heading from "../components/Heading";
import ReferenceSections from "../components/ReferenceSections";
import Definition from "../components/Definition";
import Notes from "../components/Notes";
import Gist from "react-gist";

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
    referenceLinks: ReferenceSections,
    gist: Gist
  };

  return (
    <ExcerciseWrapper>
      {textContent.map(item => {
        const Component = itemMap[item.type];

        if (item.type === "gist") {
          return <Gist id="7d3f59ee5a070b2125cefa8da4e18f4d" />;
        }
        return Component && <Component textContent={item.text} />;
      })}
    </ExcerciseWrapper>
  );
}

ExcerciseContainer.propTypes = {
  children: PropTypes.node
};

export default ExcerciseContainer;
