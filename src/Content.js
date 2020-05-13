import React, { Component } from "react";
import PropTypes from "prop-types";
import ThemeSwitch from "./ThemeSwitch.js";

class Content extends Component {
  render() {
    return (
      <div>
        <p>React.js小书内容</p>
        <ThemeSwitch />
      </div>
    );
  }
}
export default Content;
