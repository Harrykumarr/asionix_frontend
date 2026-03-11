import React from 'react';

import { Link } from 'react-router-dom';
const PhpDevelopment = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/php-banner.png')",
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
              PHP Development
            </span>
          </h1>
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
