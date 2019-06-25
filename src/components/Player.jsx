import React from "react";

export default function({ channelName }) {
  return (
    <div className="player">
      <iframe
        src={`https://player.twitch.tv/?channel=${channelName}`}
        className="player__frame"
        title={channelName}
        allowFullScreen={true}
        frameBorder="0"
      />
    </div>
  );
}
