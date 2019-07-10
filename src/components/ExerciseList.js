import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { connect } from "react-redux";
import ExcerciseContainer from "./ExerciseContainer";

import { goToTopic, goToIndex } from "../actions/index";

const SubText = styled.h1`
  font-size: 1.5em;
  text-align: left;
  padding 0 20px; 
  color: palevioletred;
`;

const OptionsList = styled.li`
  font-size: 1em;
  text-align: left;
  color: charcoal;
  text-decoration: underline;
`;

function ExerciseList({
  isIndex,
  listOfExcercises,
  currentTopic,
  dispatchGoToTopic,
  dispatchGoToIndex,
  i18n
}) {
  const listOfTopics = Object.keys(i18n);

  return (
    <div>
      {!isIndex && (
        <button onClick={() => dispatchGoToIndex()}>Back to Index</button>
      )}

      {isIndex && (
        <div className="ExerciseList">
          <SubText>Contents</SubText>
          <ul>
            {listOfTopics.map(topics => (
              <OptionsList onClick={() => dispatchGoToTopic(i18n[topics])}>
                {i18n[topics][0].text}
              </OptionsList>
            ))}
          </ul>
        </div>
      )}

      {!isIndex && currentTopic && (
        <ExcerciseContainer textContent={currentTopic} />
      )}
    </div>
  );
}

ExerciseList.defaultProps = {
  listOfExcercises: []
};

ExerciseList.proptypes = {
  listOfExcercises: PropTypes.arrayOf[PropTypes.object]
};

const mapStateToProps = ({ currentTopic, isIndex, i18n }) => ({
  currentTopic,
  isIndex,
  i18n
});

const mapDispatchToProps = {
  dispatchGoToTopic: goToTopic,
  dispatchGoToIndex: goToIndex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseList);
