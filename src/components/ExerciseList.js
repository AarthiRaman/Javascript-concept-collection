import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { connect } from "react-redux";
import ExcerciseContainer from "./ExerciseContainer";

import { goToTopic, goToIndex } from "../actions/index";

const SubText = styled.h1`
  font-size: 1.5em;
  text-align: center;
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
  console.log(i18n);
  console.log(currentTopic);

  return (
    <div>
      {!isIndex && (
        <button onClick={() => dispatchGoToIndex()}>Back to Index</button>
      )}

      {isIndex && (
        <div className="ExerciseList">
          <SubText>Click to load the exercise below</SubText>
          <ul>
            {listOfExcercises.map(obj => (
              <OptionsList onClick={() => dispatchGoToTopic(obj.componentObj)}>
                {obj.name}
              </OptionsList>
            ))}
          </ul>
        </div>
      )}

      {!isIndex && currentTopic && (
        <ExcerciseContainer textContent={i18n[currentTopic]} />
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
