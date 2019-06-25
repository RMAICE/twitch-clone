import React from "react";
import { connect } from "react-redux";

import actions from "../store/actions";

import GamesList from "../components/GamesList";
import Spinner from "../components/Spinner";

class Directory extends React.Component {
  componentDidMount() {
    const { resetGamesTop, getGames } = this.props;

    resetGamesTop();
    getGames();
  }
  render() {
    const { games } = this.props;

    return games.length > 0 ? <GamesList games={games} /> : <Spinner />;
  }
}

function mapStateToProps(state, props) {
  return {
    games: state.storage.games,
    totalGames: state.storage.totalGames,
    ...props
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    resetGamesTop: () => dispatch(actions.resetGamesTop()),
    getGames: () => dispatch(actions.getGames())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Directory);
