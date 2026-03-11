import React from 'react';

import { Link } from 'react-router-dom';
const EmailMarketing = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/email-marketing-banner.png')",
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
              Email Marketing
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-envelope-open-text"></i> Campaign Design</h4>
                        <p>Beautiful, responsive email templates that engage your audience and drive conversions.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-robot"></i> Automation</h4>
                        <p>Automated email sequences for welcome series, abandoned carts, and customer nurturing.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-users"></i> List Management</h4>
                        <p>Strategic list segmentation and management for targeted, personalized communications.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-bar"></i> Analytics & Reporting</h4>
                        <p>Detailed metrics on open rates, click-through rates, and conversion tracking.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-paper-plane"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Our Email Marketing Solutions</h3>
              <ul className="detail-list">
                <li>
                  <h5>Newsletter Campaigns</h5>
                  <p>Regular newsletters to keep your audience informed and engaged with your brand.</p>
                </li>
                <li>
                  <h5>Drip Campaigns</h5>
                  <p>Automated email sequences that guide prospects through your sales funnel.</p>
                </li>
                <li>
                  <h5>Promotional Emails</h5>
                  <p>Compelling promotional campaigns for product launches, sales, and special offers.</p>
                </li>
                <li>
                  <h5>Re-engagement</h5>
                  <p>Win back inactive subscribers with targeted re-engagement campaigns.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-tasks"></i>
              </div>
            </div>
          </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Boost Your Email Marketing?</h2>
            <p>Let us help you create email campaigns that convert subscribers into customers.</p>
            <Link to="/contact" className="btn-cta">Get Started Today</Link>
        </div>
    </section>
</>
  );
};

export default EmailMarketing;
