import React from 'react';

import { Link } from 'react-router-dom';
const Seo = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/seo-banner.png')",
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
              SEO
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-key"></i> Keyword Research</h4>
                        <p>Identify high-value keywords that drive targeted traffic.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-file-alt"></i> On-Page SEO</h4>
                        <p>Optimize content, meta tags, and site structure.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cogs"></i> Technical SEO</h4>
                        <p>Improve site speed, mobile-friendliness, and crawlability.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-link"></i> Link Building</h4>
                        <p>Build high-quality backlinks to boost domain authority.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-map-marker-alt"></i> Local SEO</h4>
                        <p>Optimize for local searches and Google My Business.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-line"></i> Analytics & Reporting</h4>
                        <p>Track rankings, traffic, and ROI with detailed reports.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>SEO Strategies</h3>
                    <p>We use proven white-hat SEO techniques to improve your search rankings.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Content Optimization</h5>
                            <p>Create SEO-friendly content that ranks and converts.</p>
                        </li>
                        <li>
                            <h5>Competitor Analysis</h5>
                            <p>Analyze competitors to identify opportunities.</p>
                        </li>
                        <li>
                            <h5>Performance Tracking</h5>
                            <p>Monitor progress with advanced analytics tools.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Boost Your Rankings?</h2>
            <p>Let's create an SEO strategy that drives results.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default Seo;
