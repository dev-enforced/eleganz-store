import React from 'react';
import "./authentication.css";

const SignUp = () => {
    return (
        <section className="main-content flex-column flex-center">
            <div className="main-content-container flex-column flex-center p-10">
                <div className="form-name">
                    <h3>SIGNUP</h3>
                </div>
                <form className="gentle-form-group gentle-flex-gap txt-sm">
                    <div className="gentle-flex-gap name-taker flex-wrap">
                        <div className="gentle-input-group">
                            <label className="gentle-input-label" htmlFor="user-first-name">First Name</label>
                            <input
                                type="text"
                                className="gentle-input"
                                id="user-first-name"
                                placeholder="e.g. Ashok"
                            />
                        </div>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label txt-sm" htmlFor="user-last-name">Last Name</label>
                            <input
                                type="text"
                                className="gentle-input"
                                id="user-last-name"
                                placeholder="e.g. Kamte"
                            />
                        </div>
                    </div>
                    <div className="gentle-input-group">
                        <label className="gentle-input-label" htmlFor="user-email-address">Email Address</label>
                        <input
                            type="email"
                            className="gentle-input"
                            id="user-email-address"
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
                    <div className="permission-check gentle-flex-gap flex-wrap">
                        <label
                            htmlFor="permission"
                            name="light"
                            className="gentle-flex-gap flex-align-center text-cursor-pointer checkbox-input-container mb-2"
                        >
                            <input
                                type="checkbox"
                                className="checkbox-input text-cursor-pointer"
                                id="permission"
                            />
                            <span>I accept all terms and conditions</span>
                        </label>
                    </div>
                    <div
                        className="submit-action gentle-flex-gap flex-column flex-align-center"
                    >
                        <button
                            type="submit"
                            className="btn btn-info btn-info-hover submit-btn"
                        >
                            CREATE NEW ACCOUNT
                        </button>
                        <a href="auth-login.html" className="link-none btn btn-link"
                        >Already have an Account? Login
                            <i className="fas fa-chevron-right px-1"></i>
                        </a>

                    </div>
                </form>
            </div>
        </section>
    )
}



export { SignUp }