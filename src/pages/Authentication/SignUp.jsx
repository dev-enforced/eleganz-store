import React, { useState } from 'react';
import axios from 'axios';
import { FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthentication } from 'context';
import "./authentication.css";

const SignUp = () => {
    const navigate = useNavigate();
    const { authDispatch } = useAuthentication();
    const initialSignupData = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }
    const [signupData, setSignupData] = useState(initialSignupData);
    const signupDataHandler = (e) => {
        const { name, value } = e.target;
        setSignupData(prevSignupData => ({ ...prevSignupData, [name]: value }))
    }

    const signupHandler = (e) => {
        e.preventDefault();
        (async () => {
            try {
                const { data, status } = await axios.post("/api/auth/signup", {
                    ...signupData
                })
                if (status === 201) {
                    authDispatch({ type: "SIGN-UP", payload: data })
                    localStorage.setItem("authenticationToken", data.encodedToken);
                    navigate("/products")
                }
            } catch {
                console.error("SIGN UP NOT POSSIBLE")
            }

        })()
    }
    return (
        <section className="main-content flex-column flex-center">
            <div className="main-content-container flex-column flex-center p-10">
                <div className="form-name">
                    <h3>SIGNUP</h3>
                </div>
                <form className="gentle-form-group gentle-flex-gap txt-sm" onSubmit={signupHandler}>
                    <div className="gentle-flex-gap name-taker flex-wrap">
                        <div className="gentle-input-group">
                            <label className="gentle-input-label" htmlFor="user-first-name">First Name</label>
                            <input
                                type="text"
                                className="gentle-input"
                                id="user-first-name"
                                name="firstName"
                                placeholder="e.g. Ashok"
                                onChange={signupDataHandler}
                                required
                            />
                        </div>
                        <div className="gentle-input-group">
                            <label className="gentle-input-label txt-sm" htmlFor="user-last-name">Last Name</label>
                            <input
                                type="text"
                                className="gentle-input"
                                id="user-last-name"
                                name="lastName"
                                placeholder="e.g. Kamte"
                                onChange={signupDataHandler}
                                required
                            />
                        </div>
                    </div>
                    <div className="gentle-input-group">
                        <label className="gentle-input-label" htmlFor="user-email-address">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="gentle-input"
                            id="user-email-address"
                            onChange={signupDataHandler}
                            placeholder="e.g. ashok_kamte@rediff.com"
                            required
                        />
                    </div>
                    <div className="gentle-input-group">
                        <label className="gentle-input-label" htmlFor="user-password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="gentle-input"
                            id="user-password"
                            placeholder="******"
                            required
                            onChange={signupDataHandler}
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
                        <Link to="/signin" className="link-none btn btn-link gentle-flex flex-align-center">
                            Already have an Account? Sign In
                            <FaChevronRight />
                        </Link>

                    </div>
                </form>
            </div>
        </section>
    )
}



export { SignUp }