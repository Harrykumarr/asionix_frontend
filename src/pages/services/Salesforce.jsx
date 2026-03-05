import React from 'react';

import { Link } from 'react-router-dom';
const Salesforce = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Transformation</h2>
            <h1>Salesforce Solutions</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-cloud"></i> Sales Cloud</h4>
                        <p>Streamline your sales process with powerful CRM tools, lead management, and opportunity tracking for maximum revenue growth.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-headset"></i> Service Cloud</h4>
                        <p>Deliver exceptional customer service with case management, knowledge base, and omnichannel support solutions.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-bullhorn"></i> Marketing Cloud</h4>
                        <p>Create personalized customer journeys with email marketing, social media management, and marketing automation.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cogs"></i> Custom Development</h4>
                        <p>Build custom Salesforce applications using Apex, Lightning components, and Visualforce for your unique business needs.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fab fa-salesforce"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>Our Salesforce Services</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-rocket"></i>
                    <h3>Implementation</h3>
                    <p>End-to-end Salesforce implementation tailored to your business processes and requirements.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-sync-alt"></i>
                    <h3>Integration</h3>
                    <p>Seamless integration with third-party applications, ERP systems, and legacy databases.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-users-cog"></i>
                    <h3>Consulting</h3>
                    <p>Expert consulting to optimize your Salesforce org and maximize ROI on your investment.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-graduation-cap"></i>
                    <h3>Training</h3>
                    <p>Comprehensive training programs for administrators, developers, and end-users.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to Transform Your Business with Salesforce?</h2>
            <p>Let our certified Salesforce experts help you leverage the world's #1 CRM platform.</p>
            <Link to="/contact" className="btn-primary">Get Started Today</Link>
        </div>
    </section>
</>
  );
};

export default Salesforce;
