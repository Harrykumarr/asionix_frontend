import React from 'react';

import { Link } from 'react-router-dom';
const BrandManagement = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Marketing</h2>
            <h1>Brand Management Services</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-palette"></i> Brand Identity</h4>
                        <p>Create a distinctive brand identity with logo design, color schemes, and visual guidelines.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-comments"></i> Brand Voice</h4>
                        <p>Develop a consistent brand voice and messaging that resonates with your target audience.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-star"></i> Reputation Management</h4>
                        <p>Monitor and protect your brand reputation across digital platforms and review sites.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-line"></i> Brand Analytics</h4>
                        <p>Track brand awareness, sentiment, and market positioning with advanced analytics.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-crown"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>Our Brand Management Services</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-lightbulb"></i>
                    <h3>Brand Strategy</h3>
                    <p>Comprehensive brand strategy development aligned with your business goals.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-paint-brush"></i>
                    <h3>Visual Design</h3>
                    <p>Professional design services for all brand assets and marketing materials.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-shield-alt"></i>
                    <h3>Crisis Management</h3>
                    <p>Proactive reputation protection and crisis response strategies.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-users"></i>
                    <h3>Community Building</h3>
                    <p>Build and nurture a loyal community around your brand.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to Build a Powerful Brand?</h2>
            <p>Let our experts help you create and manage a brand that stands out in the market.</p>
            <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>
    </section>
</>
  );
};

export default BrandManagement;
