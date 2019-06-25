import React from "react";
import { connect } from "react-redux";

import actions from "../store/actions";

import Player from "../components/Player";
import Chat from "../components/Chat";

import "../components/Channel.scss";

class Channel extends React.Component {
  componentDidMount() {
    const { embedLoaded } = this.props;

    if (!embedLoaded) this.embedLoad();
  }
  render() {
    let channelName = this.props.match.params.channel;

    return channelName === "directory" ? null : (
      <div className="channel">
        <Player channelName={channelName} />
        <Chat channelName={channelName} />
      </div>
    );
  }
  embedLoad = () => {
    const { twitchEmbed } = this.props;
    let script = document.createElement("script");

    script.src = "https://embed.twitch.tv/embed/v1.js";
    script.addEventListener("load", e => {
      twitchEmbed();
    });

    document.body.appendChild(script);
  };
}

function mapState(state, props) {
  return {
    embedLoaded: state.storage.embedLoaded,
    ...props
  };
}

function mapDispatch(dispatch, props) {
  return {
    twitchEmbed: () => dispatch(actions.twitchEmbed())
  };
}

export default connect(
  mapState,
  mapDispatch
)(Channel);
