import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const OptionsList = styled.li`
  font-size: 1em;
  text-align: left;
  color: charcoal;
  text-decoration: underline;
`;

const ContentHeading = styled.h3`
  font-size: 1em;
  text-align: left;
  padding: 0 20px;
  color: blue;
`;

function ExerciseList({ topics, onItemClick }) {
  const [heading, ...listOfTopics] = Object.keys(topics);

  return (
    <div>
      <div className="ExerciseList">
        <ContentHeading>{topics[heading]}</ContentHeading>
        <ul>
          {listOfTopics.map(topicName => (
            <OptionsList onClick={() => onItemClick(topics[topicName])}>
              {topics[topicName][0].text}
            </OptionsList>
          ))}
        </ul>
      </div>
    </div>
  );
}

ExerciseList.defaultProps = {
  listOfExcercises: []
};

ExerciseList.proptypes = {
  topics: PropTypes.arrayOf[PropTypes.object],
  onItemClick: PropTypes.func.isRequired
};

export default ExerciseList;
