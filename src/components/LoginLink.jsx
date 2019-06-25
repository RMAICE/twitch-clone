import React from "react";

export default function LoginLink({ className }) {
  let cliend_id = "client_id=izxh1rvk9shmmposg8pj9ihw0c0vc5";
  let redirect_url = `redirect_uri=http://localhost`;
  let response_type = "response_type=code";
  let scope = "scope=user:read:email%20openid";
  let claims =
    'claims={"userinfo":{"picture":null,"preferred_username": null}}';
  let loginHref = `https://id.twitch.tv/oauth2/authorize?${cliend_id}&${redirect_url}&${response_type}&${scope}&${claims}`;
  let loginLink = (
    <a className={className} href={loginHref}>
      Войти
    </a>
  );

  return loginLink;
}
