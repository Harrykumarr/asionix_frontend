import React from 'react';

import { Link } from 'react-router-dom';
const AndroidDevelopment = () => {
  return (
    <>
{/*  Hero Section  */}
    <section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1607252656733-fd7458c5c7ce?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Android Development</h2>
            <h1>Mobile App Development</h1>
        </div>
    </section>

    {/*  Main Service Section  */}
    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-lightbulb"></i> Concept Design</h4>
                        <p>We transform your app idea into a detailed concept with wireframes and user flow diagrams.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-mobile-alt"></i> Mobile Application Development</h4>
                        <p>Native Android end-to-end app development for smartphones and tablets.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-line"></i> App Analytics</h4>
                        <p>Integrate analytics to track user behavior and optimize app performance.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-comments"></i> Mobile Technology Consulting</h4>
                        <p>Expert guidance on technology stack, architecture, and best practices.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-globe"></i> App Localization</h4>
                        <p>Reach global audiences with multi-language support and regional customization.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tools"></i> Maintenance & Support</h4>
                        <p>Ongoing maintenance, updates, and 24/7 technical support services.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fab fa-android"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  App Localization Section  */}
    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>App Localization</h3>
                    <p>We help our clients reach global audiences by offering a full experience to the users with localization. It boosts app ranking in foreign markets and increases downloads.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Mobile-First & Mobile-Only Solutions</h5>
                            <p>We have an expert team to take care of the translation of your app content, images, layout, etc. from top-to-toe.</p>
                        </li>
                        <li>
                            <h5>MultiLingual</h5>
                            <p>We can handle app localization even for right-to-left (RTL) languages like Arabic, Hebrew with ease.</p>
                        </li>
                        <li>
                            <h5>Easy to Update</h5>
                            <p>We will help you in your new app version release. We detect the new and modified strings and update the translation.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-language"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  App Analytics Section  */}
    <section className="service-analytics">
        <div className="container">
            <div className="service-analytics-grid">
                <div className="analytics-content">
                    <h3>App Analytics</h3>
                    <p>We understand the breadth and depth of Firebase Analytics and know how to get the insights about the app's user experience. The basic implementation is simple but it's quite challenging in understanding the audience and marketing accordingly.</p>
                    <div className="analytics-features">
                        <div className="analytics-feature">
                            <h5>Understand your user</h5>
                            <p>Track the information about your user by adding additional user properties.</p>
                        </div>
                        <div className="analytics-feature">
                            <h5>Create your audience</h5>
                            <p>Create segments of your audience and communicate with them in a tailored way.</p>
                        </div>
                        <div className="analytics-feature">
                            <h5>Measurements matters most</h5>
                            <p>Understand what KPIs matter most for your app success.</p>
                        </div>
                        <div className="analytics-feature">
                            <h5>Data-Driven Decisions</h5>
                            <p>Make informed decisions based on real user data and analytics.</p>
                        </div>
                    </div>
                </div>
                <div className="analytics-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  CTA Section  */}
    <section className="service-cta">
        <div className="container">
            <h2>Ready to Build Your Android App?</h2>
            <p>Let's discuss your project and create something amazing together.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>

    {/*  Footer  */}
</>
  );
};

export default AndroidDevelopment;
