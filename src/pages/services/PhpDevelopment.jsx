import React from 'react';

import { Link } from 'react-router-dom';
const PhpDevelopment = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>PHP Development</h2>
            <h1>Web Application Development</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fab fa-php"></i> Custom PHP Development</h4>
                        <p>Tailored PHP solutions for your specific business needs.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-laravel"></i> Laravel Development</h4>
                        <p>Modern web applications with Laravel framework.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-shopping-cart"></i> E-Commerce Solutions</h4>
                        <p>Custom e-commerce platforms and integrations.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-database"></i> CMS Development</h4>
                        <p>Custom content management systems and solutions.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-plug"></i> API Development</h4>
                        <p>RESTful APIs and third-party integrations.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tools"></i> Maintenance & Support</h4>
                        <p>Ongoing updates and technical support services.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fab fa-php"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>PHP Frameworks</h3>
                    <p>We work with leading PHP frameworks to deliver robust, scalable, and secure web applications.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Laravel</h5>
                            <p>Elegant syntax and powerful features for modern web development.</p>
                        </li>
                        <li>
                            <h5>CodeIgniter</h5>
                            <p>Lightweight framework for rapid application development.</p>
                        </li>
                        <li>
                            <h5>Symfony</h5>
                            <p>Enterprise-level applications with Symfony components.</p>
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
            <h2>Ready to Build Your Web Application?</h2>
            <p>Let's create powerful PHP applications together.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default PhpDevelopment;
