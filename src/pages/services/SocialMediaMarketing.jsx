import React from 'react';

import { Link } from 'react-router-dom';
const SocialMediaMarketing = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/social-media-banner.png')",
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
              Social Media Marketing
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-bullhorn"></i> Social Strategy</h4>
                        <p>Develop comprehensive social media marketing strategies.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-edit"></i> Content Creation</h4>
                        <p>Engaging posts, graphics, and videos for your brand.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-users"></i> Community Management</h4>
                        <p>Build and engage with your online community.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-ad"></i> Paid Advertising</h4>
                        <p>Facebook, Instagram, LinkedIn, and Google Ads campaigns.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-user-friends"></i> Influencer Marketing</h4>
                        <p>Partner with influencers to expand your reach.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-pie"></i> Analytics & Insights</h4>
                        <p>Track performance and optimize campaigns for ROI.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-share-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>Social Platforms</h3>
                    <p>We manage your presence across all major social media platforms.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Facebook & Instagram</h5>
                            <p>Reach your audience where they spend the most time.</p>
                        </li>
                        <li>
                            <h5>LinkedIn Marketing</h5>
                            <p>Professional networking and B2B lead generation.</p>
                        </li>
                        <li>
                            <h5>YouTube & Video</h5>
                            <p>Video content creation and YouTube channel management.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-heart"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Grow Your Social Presence?</h2>
            <p>Let's create a winning social media strategy.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default SocialMediaMarketing;
