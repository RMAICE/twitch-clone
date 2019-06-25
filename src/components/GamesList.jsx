import React from "react";
import { Link } from "react-router-dom";

import "./GamesList.scss";

export default function({ games }) {
  let placeholders = Array(10)
    .fill(null)
    .map((v, i) => {
      return (
        <li className="games__item _placeholder" key={`placeholder-${i}`} />
      );
    });
  let items = games.map((v, i) => {
    let imageLink = v.box_art_url
      .replace("{width}", 285)
      .replace("{height}", 380);

    let toConfig = {
      pathname: `directory/game/${v.name}`,
      state: { game_id: v.id }
    };

    return (
      <li className="games__item" key={v.id}>
        <Link className="games__item-link" to={toConfig}>
          <div className="games__item-image">
            <img alt="" srcSet={imageLink} />
          </div>
          <span className="games__item-title">{v.name}</span>
        </Link>
      </li>
    );
  });

  return <ul className="games">{[...items, ...placeholders]}</ul>;
}
