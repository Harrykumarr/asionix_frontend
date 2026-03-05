import React from 'react';

import { Link } from 'react-router-dom';
const WordpressDevelopment = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>WordPress Development</h2>
            <h1>CMS & Website Development</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fab fa-wordpress"></i> WordPress Websites</h4>
                        <p>Custom WordPress websites tailored to your brand.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-paint-brush"></i> Theme Development</h4>
                        <p>Custom themes built from scratch for unique designs.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-plug"></i> Plugin Development</h4>
                        <p>Custom plugins for extended functionality.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-shopping-cart"></i> WooCommerce</h4>
                        <p>Full-featured e-commerce stores with payment integration.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tachometer-alt"></i> Performance Optimization</h4>
                        <p>Speed optimization, caching, and CDN setup.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-shield-alt"></i> Security & Maintenance</h4>
                        <p>Regular updates, backups, and security monitoring.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fab fa-wordpress"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>WordPress Solutions</h3>
                    <p>We build powerful WordPress solutions for businesses of all sizes.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Custom Themes</h5>
                            <p>Unique, responsive themes designed for your brand.</p>
                        </li>
                        <li>
                            <h5>WooCommerce Stores</h5>
                            <p>Complete e-commerce solutions with payment gateways.</p>
                        </li>
                        <li>
                            <h5>Website Migration</h5>
                            <p>Seamlessly migrate from other platforms to WordPress.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-code"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Build Your WordPress Site?</h2>
            <p>Let's create a powerful website for your business.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default WordpressDevelopment;
