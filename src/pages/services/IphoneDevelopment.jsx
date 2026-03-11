import React from 'react';

import { Link } from 'react-router-dom';
const IphoneDevelopment = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/iphone-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0 80px",
        borderBottom: "3px solid #f39c12"
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h1 style={{
            fontSize: "52px",
            fontWeight: "800",
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "3px",
            margin: 0,
            textShadow: "2px 2px 10px rgba(0,0,0,0.5)"
          }}>
            <span style={{ borderLeft: "5px solid #f39c12", paddingLeft: "20px" }}>
              iPhone Development
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-lightbulb"></i> Concept Design</h4>
                        <p>Transform your app idea into detailed wireframes and user experience designs.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-apple"></i> iOS App Development</h4>
                        <p>Native iOS development using Swift and Objective-C for iPhone and iPad.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-line"></i> App Analytics</h4>
                        <p>Integrate analytics to track user behavior and optimize app performance.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-comments"></i> Technology Consulting</h4>
                        <p>Expert guidance on iOS technology stack and best practices.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-globe"></i> App Localization</h4>
                        <p>Reach global audiences with multi-language support.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tools"></i> Maintenance & Support</h4>
                        <p>Ongoing maintenance, updates, and technical support.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fab fa-apple"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>iOS App Excellence</h3>
                    <p>We specialize in creating premium iOS applications that deliver exceptional user experiences on all Apple devices.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Swift Development</h5>
                            <p>Modern, safe, and fast development using Apple's Swift programming language.</p>
                        </li>
                        <li>
                            <h5>App Store Optimization</h5>
                            <p>Optimize your app listing for maximum visibility and downloads.</p>
                        </li>
                        <li>
                            <h5>Apple Guidelines Compliance</h5>
                            <p>Ensure your app meets all Apple's App Store review guidelines.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Build Your iOS App?</h2>
            <p>Let's create an amazing iPhone application together.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default IphoneDevelopment;
