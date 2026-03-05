import React from 'react';

import { Link } from 'react-router-dom';
const PpcServices = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Marketing</h2>
            <h1>PPC Services</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fab fa-google"></i> Google Ads</h4>
                        <p>Strategic Google Ads campaigns including Search, Display, Shopping, and YouTube advertising.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-facebook"></i> Social Media Ads</h4>
                        <p>Targeted advertising on Facebook, Instagram, LinkedIn, and Twitter for maximum reach.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-redo-alt"></i> Remarketing</h4>
                        <p>Retarget website visitors with personalized ads to increase conversions and brand recall.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-pie"></i> Performance Tracking</h4>
                        <p>Comprehensive analytics and ROI tracking with detailed performance reports.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-mouse-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>Our PPC Management Process</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-search-dollar"></i>
                    <h3>Keyword Research</h3>
                    <p>In-depth keyword analysis to identify high-converting, cost-effective search terms.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-ad"></i>
                    <h3>Ad Creation</h3>
                    <p>Compelling ad copy and creative that drives clicks and conversions.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-sliders-h"></i>
                    <h3>Bid Management</h3>
                    <p>Strategic bid optimization to maximize your advertising budget and ROI.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-sync"></i>
                    <h3>Continuous Optimization</h3>
                    <p>Ongoing A/B testing and campaign refinement for improved performance.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to Get Instant Traffic & Leads?</h2>
            <p>Our PPC experts will help you reach your target audience and maximize your ROI.</p>
            <Link to="/contact" className="btn-primary">Start Your Campaign</Link>
        </div>
    </section>
</>
  );
};

export default PpcServices;
