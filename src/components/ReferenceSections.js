import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ReferenceSectionsContainer = styled.div`
  padding: 20px 10px;
  width: 90%;
  text-align: left;
`;

const ReferenceSectionsList = styled.li`
  text-align: left;
`;

function ReferenceSections({ referenceLinks }) {
  return (
    <ReferenceSectionsContainer>
      <h3> Useful Links </h3>
      <ul>
        {referenceLinks.map(link => (
          <ReferenceSectionsList>
            <a href={link.href}>{link.text}</a>
          </ReferenceSectionsList>
        ))}
      </ul>
    </ReferenceSectionsContainer>
  );
}

ReferenceSections.propTypes = {
  textContent: PropTypes.string
};

export default ReferenceSections;
