import React from "react";

import styled from "styled-components";

import ExcerciseList from "./components/ExerciseList";
import ExcerciseContainer from "./components/ExerciseContainer";

import { connect } from "react-redux";

import { goToTopic, goToIndex } from "./actions/index";

import "./styles.css";

const AppHeading = styled.h1`
  font-size: 1.5em;
  text-align: left;
  padding: 0 20px;
  color: charcoal;
`;

const SubText = styled.h2`
  font-size: 1.3em;
  text-align: left;
  padding: 0 20px;
  color: palevioletred;
`;

function App({
  currentTopic,
  isIndex,
  i18n,
  dispatchGoToIndex,
  dispatchGoToTopic
}) {
  return (
    <div className="App">
      <AppHeading>Javascript Concepts and Examples</AppHeading>
      {!isIndex && (
        <button onClick={() => dispatchGoToIndex()}>Back to Index</button>
      )}
      <SubText>Contents</SubText>
      {isIndex && (
        <ExcerciseList topics={i18n.js} onItemClick={dispatchGoToTopic} />
      )}
      {isIndex && (
        <ExcerciseList topics={i18n.react} onItemClick={dispatchGoToTopic} />
      )}

      {!isIndex && currentTopic && (
        <ExcerciseContainer textContent={currentTopic} />
      )}
    </div>
  );
}

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
)(App);
