import React from 'react';

import { Link } from 'react-router-dom';
const PpcServices = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/ppc-banner.png')",
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
              PPC Services
            </span>
          </h1>
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

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Our PPC Management Process</h3>
              <ul className="detail-list">
                <li>
                  <h5>Keyword Research</h5>
                  <p>In-depth keyword analysis to identify high-converting, cost-effective search terms.</p>
                </li>
                <li>
                  <h5>Ad Creation</h5>
                  <p>Compelling ad copy and creative that drives clicks and conversions.</p>
                </li>
                <li>
                  <h5>Bid Management</h5>
                  <p>Strategic bid optimization to maximize your advertising budget and ROI.</p>
                </li>
                <li>
                  <h5>Continuous Optimization</h5>
                  <p>Ongoing A/B testing and campaign refinement for improved performance.</p>
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
            <h2>Ready to Get Instant Traffic & Leads?</h2>
            <p>Our PPC experts will help you reach your target audience and maximize your ROI.</p>
            <Link to="/contact" className="btn-cta">Start Your Campaign</Link>
        </div>
    </section>
</>
  );
};

export default PpcServices;
