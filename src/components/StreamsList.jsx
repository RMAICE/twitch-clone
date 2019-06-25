import React from "react";
import { Link } from "react-router-dom";
import { toShortCount } from "../helper.js";

import "./StreamList.scss";

export default function({ streams }) {
  const placeholders = Array(10)
    .fill(null)
    .map((v, i) => {
      return <li className="streams__item" key={`placeholder-${i}`} />;
    });
  const items = streams.map((v, i) => {
    let thumbLink = v.thumbnail_url
      .replace("{width}", 320)
      .replace("{height}", 180);
    let count = toShortCount(v.viewer_count);
    let toStreamConfig = {
      pathname: `/${v.login}`,
      state: { user_id: v.user_id }
    };

    return (
      <li className="streams__item" key={v.id}>
        <Link className="streams__item-thumb" to={toStreamConfig}>
          <img alt="" srcSet={thumbLink} />
          <div className="streams__item-count">{`${count} viewers`}</div>
        </Link>
        <div className="streams__item-description">
          <img
            className="streams__channel-pic"
            srcSet={v.profile_image_url}
            alt=""
          />
          <Link
            className="streams__item-title"
            title={v.title}
            to={toStreamConfig}
          >
            {v.title}
          </Link>
          <span className="streams__channel-name">{v.user_name}</span>
        </div>
      </li>
    );
  });

  return <ul className="streams">{[...items, ...placeholders]}</ul>;
}
