import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import navigationReducer from "./reducers";

import App from "./App";

import "./styles.css";

function Main() {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(navigationReducer, applyMiddleware(sagaMiddleware));

  return (
    <div className="App">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
