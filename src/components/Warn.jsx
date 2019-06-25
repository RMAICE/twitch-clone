import React from "react";
import { connect } from "react-redux";

import "./Warn.scss";

function Warn(props) {
  return <div className="warn"> Войдите что бы снять ограничения!</div>;
}

function mapState(state, props) {
  return {
    ...props,
    warn: state.storage.warn
  };
}

export default connect(mapState)(Warn);
