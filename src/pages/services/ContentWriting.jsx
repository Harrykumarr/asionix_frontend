import React from 'react';

import { Link } from 'react-router-dom';
const ContentWriting = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/content-writing-banner.png')",
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
              Content Writing
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-pen-fancy"></i> Blog Writing</h4>
                        <p>Engaging blog posts that establish thought leadership and drive organic traffic to your website.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-file-alt"></i> Website Content</h4>
                        <p>Compelling website copy that communicates your value proposition and converts visitors.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-search"></i> SEO Content</h4>
                        <p>Search-optimized content that ranks well and drives qualified organic traffic.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-bullhorn"></i> Marketing Copy</h4>
                        <p>Persuasive marketing materials including ads, landing pages, and email campaigns.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-feather-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Content Types We Create</h3>
              <ul className="detail-list">
                <li>
                  <h5>E-books & Whitepapers</h5>
                  <p>In-depth resources that showcase your expertise and generate quality leads.</p>
                </li>
                <li>
                  <h5>Case Studies</h5>
                  <p>Compelling success stories that demonstrate your value to potential customers.</p>
                </li>
                <li>
                  <h5>Social Media Content</h5>
                  <p>Engaging posts optimized for each platform to grow your social presence.</p>
                </li>
                <li>
                  <h5>Video Scripts</h5>
                  <p>Professional scripts for explainer videos, testimonials, and promotional content.</p>
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
            <h2>Need Quality Content for Your Business?</h2>
            <p>Our expert writers create content that engages, informs, and converts.</p>
            <Link to="/contact" className="btn-cta">Get a Quote</Link>
        </div>
    </section>
</>
  );
};

export default ContentWriting;
