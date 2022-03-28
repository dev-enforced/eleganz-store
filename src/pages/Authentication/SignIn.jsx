import React from 'react'
import "./authentication.css";
const SignIn = () => {
    return (
        <section className="main-content flex-column flex-center">
            <div
                className="main-content-container flex-column flex-justify-center p-10"
            >
                <div className="form-name text-center">
                    <h3>SIGN IN</h3>
                </div>
                <form className="gentle-form-group gentle-flex-gap txt-sm">
                    <div className="gentle-input-group">
                        <label className="gentle-input-label" htmlFor="user-email">Email Address</label>
                        <input
                            type="email"
                            className="gentle-input"
                            id="user-email"
                            placeholder="e.g. ashok_kamte@rediff.com"
                        />
                    </div>
                    <div className="gentle-input-group">
                        <label className="gentle-input-label" htmlFor="user-password">Password</label>
                        <input
                            type="password"
                            className="gentle-input"
                            id="user-password"
                            placeholder="******"
                        />
                    </div>
                    <div
                        className="permission-check gentle-flex-gap flex-wrap flex-space-between flex-align-center"
                    >
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
                            <a href="#" className="link-none"> Forgot Password? </a>
                        </div>
                    </div>
                    <div
                        className="submit-action gentle-flex-gap flex-column flex-align-center"
                    >
                        <button
                            type="submit"
                            className="btn btn-info btn-info-hover submit-btn"
                        >
                            SIGN IN
                        </button>
                        <a href="auth-signup.html" className="link-none"
                        >Create New Account
                            <i className="fas fa-chevron-right px-1"></i>
                        </a>

                    </div>
                </form>
            </div>
        </section>
    )
}

export { SignIn }