import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import actions from "./store/actions";

// containers
import Directory from "./containers/Directory";
import GameChannels from "./containers/GameChannels";
import Channel from "./containers/Channel";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Warn from "./components/Warn";

class App extends React.Component {
  componentDidMount() {
    const { auth, fetchUserInfo, location, history, getTokenId } = this.props;

    if (location.search) {
      let regexp = /(code=)(.*)&/g;
      let code = regexp.exec(location.search)[2];
      getTokenId(code);
      history.push(location.pathname);
    }

    if (auth) {
      fetchUserInfo();
    }
  }
  componentDidUpdate() {
    const { auth, fetchUserInfo } = this.props;

    if (auth) {
      fetchUserInfo();
    }
  }
  render() {
    const { auth } = this.props;

    return (
      <Router>
        {auth ? null : <Warn />}
        <Header />

        <Route exact path="/" component={Welcome} />
        <Route exact path="/directory" component={Directory} />
        <Route path={`/directory/game/:name`} component={GameChannels} />
        <Route exact path={`/:channel`} component={Channel} />
      </Router>
    );
  }
}

function mapState(state, props) {
  return {
    ...props,
    auth: state.storage.auth,
    error: state.storage.error
  };
}

function mapDispatch(dispatch, props) {
  return {
    ...props,
    fetchUserInfo: () => dispatch(actions.fetchUserInfo()),
    getTokenId: code => dispatch(actions.getTokenId(code))
  };
}

export default connect(
  mapState,
  mapDispatch
)(withRouter(App));
