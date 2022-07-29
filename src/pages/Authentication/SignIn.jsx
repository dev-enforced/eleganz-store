import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  initialsignInData,
  guestCredentials,
  RightIndicator,
  routes,
} from "constants";
import { useAuthentication } from "context";
import { useDocumentTitle } from "hooks";
import "./authentication.css";

const SignIn = () => {
  const { signInActionHandler } = useAuthentication();
  const [signinData, setSigninData] = useState(initialsignInData);
  const { HOME_ROUTE, SIGNUP_ROUTE } = routes;
  const signInDataHandler = (e) => {
    const { name, value } = e.target;
    setSigninData((prevSigninData) => ({ ...prevSigninData, [name]: value }));
  };
  useDocumentTitle();

  return (
    <section className="main-content flex-column flex-center">
      <div className="main-content-container flex-column flex-justify-center p-10">
        <div className="form-name text-center">
          <h3>SIGN IN</h3>
        </div>
        <form
          className="gentle-form-group gentle-flex-gap txt-sm"
          onSubmit={(submitEvent) => {
            submitEvent.preventDefault();
            signInActionHandler(signinData);
          }}
        >
          <div className="gentle-input-group">
            <label className="gentle-input-label" htmlFor="user-email">
              Email Address
            </label>
            <input
              type="email"
              className="gentle-input"
              name="email"
              id="user-email"
              placeholder="e.g. ashok_kamte@rediff.com"
              onChange={signInDataHandler}
              required
            />
          </div>
          <div className="gentle-input-group">
            <label className="gentle-input-label" htmlFor="user-password">
              Password
            </label>
            <input
              type="password"
              className="gentle-input"
              name="password"
              id="user-password"
              placeholder="******"
              onChange={signInDataHandler}
              required
            />
          </div>
          <div className="permission-check gentle-flex-gap flex-wrap flex-space-between flex-align-center">
            <label
              name="light"
              htmlFor="user-permission"
              className="gentle-flex-gap flex-align-center text-cursor-pointer checkbox-input-container mb-2"
            >
              <input
                type="checkbox"
                className="checkbox-input text-cursor-pointer"
                id="user-permission"
              />
              <span>Remember Me</span>
            </label>
            <div className="forget-password">
              <Link to={HOME_ROUTE} className="link-none">
                {" "}
                Forgot Password?{" "}
              </Link>
            </div>
          </div>
          <div className="submit-action gentle-flex-gap flex-column flex-align-center">
            <button
              type="submit"
              className="btn btn-info btn-info-hover submit-btn"
            >
              SIGN IN
            </button>
            <button
              onClick={(submitEvent) => {
                submitEvent.preventDefault();
                signInActionHandler(guestCredentials);
              }}
              className="btn btn-info btn-info-hover submit-btn"
            >
              SIGN IN AS GUEST
            </button>
            <Link
              to={SIGNUP_ROUTE}
              className="link-none gentle-flex flex-align-center"
            >
              Create New Account
              <RightIndicator />
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export { SignIn };
