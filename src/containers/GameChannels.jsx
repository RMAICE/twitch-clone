import React from "react";
import { connect } from "react-redux";

import actions from "../store/actions";

import StreamsList from "../components/StreamsList";
import Spinner from "../components/Spinner";

class GameChannels extends React.Component {
  componentDidMount() {
    const { resetStreamsByGame, getStreamsByGame, game_id } = this.props;

    resetStreamsByGame();
    getStreamsByGame(game_id);
  }
  render() {
    const { streams } = this.props;

    return streams.length > 0 ? <StreamsList streams={streams} /> : <Spinner />;
  }
}

function mapState(state, props) {
  return {
    streams: state.storage.streamsByGame,
    game_id: props.location.state.game_id
  };
}

function mapDispatch(dispatch, props) {
  return {
    resetStreamsByGame: () => dispatch(actions.resetStreamsByGame()),
    getStreamsByGame: game_id => dispatch(actions.getStreamsByGame(game_id))
  };
}

export default connect(
  mapState,
  mapDispatch
)(GameChannels);
