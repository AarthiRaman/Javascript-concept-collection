import React from "react";

import ExcerciseList from "./components/ExerciseList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Javascript Exercises and Examples</h1>
      <ExcerciseList
        listOfExcercises={[
          {
            name: "Closures",
            componentObj: "Closure"
          },
          {
            name: "React Pure Components",
            componentObj: "PureComponent"
          }
        ]}
      />
    </div>
  );
}

export default App;
