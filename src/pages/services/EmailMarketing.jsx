import React from 'react';

import { Link } from 'react-router-dom';
const EmailMarketing = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Marketing</h2>
            <h1>Email Marketing Services</h1>
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

    <section className="service-details">
        <div className="container">
            <h2>Our Email Marketing Solutions</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-newspaper"></i>
                    <h3>Newsletter Campaigns</h3>
                    <p>Regular newsletters to keep your audience informed and engaged with your brand.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-funnel-dollar"></i>
                    <h3>Drip Campaigns</h3>
                    <p>Automated email sequences that guide prospects through your sales funnel.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-percent"></i>
                    <h3>Promotional Emails</h3>
                    <p>Compelling promotional campaigns for product launches, sales, and special offers.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-redo"></i>
                    <h3>Re-engagement</h3>
                    <p>Win back inactive subscribers with targeted re-engagement campaigns.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to Boost Your Email Marketing?</h2>
            <p>Let us help you create email campaigns that convert subscribers into customers.</p>
            <Link to="/contact" className="btn-primary">Get Started Today</Link>
        </div>
    </section>
</>
  );
};

export default EmailMarketing;
