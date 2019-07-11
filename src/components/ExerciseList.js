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
  const listOfTopicsJS = Object.keys(i18n.js);
  const listOfTopicsReact = Object.keys(i18n.react);

  return (
    <div>
      {!isIndex && (
        <button onClick={() => dispatchGoToIndex()}>Back to Index</button>
      )}

      {isIndex && (
        <div className="ExerciseList">
          <SubText>Contents</SubText>
          <h4>Javascript</h4>
          <ul>
            {listOfTopicsJS.map(topicName => (
              <OptionsList
                onClick={() => dispatchGoToTopic(i18n.js[topicName])}
              >
                {i18n.js[topicName][0].text}
              </OptionsList>
            ))}
          </ul>

          <h4>React</h4>
          <ul>
            {listOfTopicsReact.map(topicName => (
              <OptionsList
                onClick={() => dispatchGoToTopic(i18n.react[topicName])}
              >
                {i18n.react[topicName][0].text}
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
