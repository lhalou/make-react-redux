import React, { Component } from "react";
import PropTypes from "prop-types";
class ThemeSwitch extends Component {
  static contextTypes = {
    store: PropTypes.object,
  };
  constructor() {
    super();
    this.state = { themeColor: "" };
  }
  componentWillMount() {
    this._updateThemeColor();
  }
  _updateThemeColor() {
    const { store } = this.context;
    const state = store.getState();
    this.setState({
      themeColor: state.themeColor,
    });
  }
  render() {
    return (
      <div>
        <button style={{ color: this.state.themeColor }}>red</button>
        <button style={{ color: this.state.themeColor }}>blue</button>
      </div>
    );
  }
}
export default ThemeSwitch;
