import React from "react";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import actions from "../store/actions";
import Cookies from "js-cookie";

import "./Header.scss";
import logoutIcon from "../icons/logout.svg";

import LoginLink from "./LoginLink";

function CustomLink({ to, className, exactActive, label }) {
  return (
    <Route
      path={to}
      exact={exactActive}
      children={({ match }) => {
        return (
          <Link className={`${className} ${match ? "active" : ""}`} to={to}>
            {label}
          </Link>
        );
      }}
    />
  );
}

function Profile({ user_name, user_picture, revokeTokenId }) {
  let access_token = Cookies.get("react_app_auth");
  let profile = (
    <div className="header__profile">
      <div className="header__profile-name">{user_name}</div>
      <div className="header__profile-pic">
        <img src={user_picture} alt="" />
      </div>
      <button
        type="button"
        onClick={e => revokeTokenId(access_token)}
        className="header__profile-logout"
      >
        Выйти
        <img src={logoutIcon} alt="" />
      </button>
    </div>
  );

  return profile;
}

function Header({ location, auth, user_name, user_picture, revokeTokenId }) {
  let profileProps = {
    user_name,
    user_picture,
    revokeTokenId
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <CustomLink
          className="header__nav-link"
          exactActive={true}
          to="/"
          label="Главная"
        />
        <CustomLink
          className="header__nav-link"
          to="/directory"
          label="Смотреть"
        />
      </nav>
      {auth ? (
        <Profile {...profileProps} />
      ) : (
        <LoginLink className="header__nav-link _log-in" />
      )}
    </header>
  );
}

function mapState(state, props) {
  return {
    auth: state.storage.auth,
    user_name: state.profile.name,
    user_picture: state.profile.picture,
    ...props
  };
}

function mapDispatch(dispatch, props) {
  return {
    ...props,
    revokeTokenId: access_token => dispatch(actions.revokeTokenId(access_token))
  };
}

export default connect(
  mapState,
  mapDispatch
)(withRouter(Header));
