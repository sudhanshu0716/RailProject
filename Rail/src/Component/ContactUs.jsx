import React, { useState } from 'react';
import './contact.css';
const ContactUs = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleThemeSwitch = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <>
            <div className={`contact-container ${isDarkMode ? 'dark' : ''}`}>
                <div className="left-col">
                </div>
                <div className="right-col">
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input
                                type="checkbox"
                                id="checkbox"
                                checked={isDarkMode}
                                onChange={handleThemeSwitch}
                            />
                            <div className="slider round" />
                        </label>
                        <div className="description">Dark Mode</div>
                    </div>

                    <h1>Contact Us</h1>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Full Name"
                            required
                        />

                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            required
                        />

                        <label htmlFor="message">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            id="message"
                            name="message"
                            required
                        />

                        <button type="submit" id="submit" name="submit">
                            Send
                        </button>
                    </form>

                    <div id="error" />
                    <div id="success-msg" />
                </div>
            </div>
        </>
    );
};

export default ContactUs;
