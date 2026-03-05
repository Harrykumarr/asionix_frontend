import React from 'react';

import { Link } from 'react-router-dom';
const ContentWriting = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Marketing</h2>
            <h1>Content Writing Services</h1>
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

    <section className="service-details">
        <div className="container">
            <h2>Content Types We Create</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-book"></i>
                    <h3>E-books & Whitepapers</h3>
                    <p>In-depth resources that showcase your expertise and generate quality leads.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-clipboard-list"></i>
                    <h3>Case Studies</h3>
                    <p>Compelling success stories that demonstrate your value to potential customers.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-share-alt"></i>
                    <h3>Social Media Content</h3>
                    <p>Engaging posts optimized for each platform to grow your social presence.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-video"></i>
                    <h3>Video Scripts</h3>
                    <p>Professional scripts for explainer videos, testimonials, and promotional content.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Need Quality Content for Your Business?</h2>
            <p>Our expert writers create content that engages, informs, and converts.</p>
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
        </div>
    </section>
</>
  );
};

export default ContentWriting;
