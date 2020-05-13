import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import Header from "./Header.js";
import Content from "./Content.js";
import { Provider } from "./react-redux";

function createStore(reducer) {
  let state = null;
  const listeners = [];
  const getState = () => state;
  const subScribe = (listener) => listeners.push(listener);
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };
  dispatch({});
  return { getState, dispatch, subScribe };
}

const themeReducer = (state, action) => {
  if (!state) {
    return {
      themeColor: "red",
    };
  }
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        themeColor: action.themeColor,
      };
    default:
      return state;
  }
};
const store = createStore(themeReducer);

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

//把Provider作为所有组件的根节点
ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
