import React from 'react';

import { Link } from 'react-router-dom';
const BrandManagement = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80')",
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
              Brand Management
            </span>
          </h1>
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

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Our Brand Management Services</h3>
              <ul className="detail-list">
                <li>
                  <h5>Brand Strategy</h5>
                  <p>Comprehensive brand strategy development aligned with your business goals.</p>
                </li>
                <li>
                  <h5>Visual Design</h5>
                  <p>Professional design services for all brand assets and marketing materials.</p>
                </li>
                <li>
                  <h5>Crisis Management</h5>
                  <p>Proactive reputation protection and crisis response strategies.</p>
                </li>
                <li>
                  <h5>Community Building</h5>
                  <p>Build and nurture a loyal community around your brand.</p>
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
            <h2>Ready to Build a Powerful Brand?</h2>
            <p>Let our experts help you create and manage a brand that stands out in the market.</p>
            <Link to="/contact" className="btn-cta">Get Started</Link>
        </div>
    </section>
</>
  );
};

export default BrandManagement;
