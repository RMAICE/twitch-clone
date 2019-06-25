import React from "react";

export default function({ channelName }) {
  return (
    <div className="chat">
      <iframe
        src={`https://www.twitch.tv/embed/${channelName}/chat?darkpopout`}
        className="chat__frame"
        title={`${channelName} chat`}
        allowFullScreen={true}
        frameBorder="0"
      />
    </div>
  );
}
