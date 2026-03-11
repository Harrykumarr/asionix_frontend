import React from 'react';

import { Link } from 'react-router-dom';
const PaymentGateway = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=80')",
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
              Payment Gateway
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-credit-card"></i> Secure Transactions</h4>
                        <p>Implement secure and seamless payment processing for your business.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-wallet"></i> Multiple Methods</h4>
                        <p>Support various payment methods including credit cards, wallets, and UPI.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-shield-alt"></i> Fraud Prevention</h4>
                        <p>Advanced security measures and fraud detection systems to protect your transactions.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-globe"></i> Global Payments</h4>
                        <p>Accept payments anywhere in the world with multi-currency support.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-money-check-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Our Payment Gateway Features</h3>
              <ul className="detail-list">
                <li>
                  <h5>Easy Integration</h5>
                  <p>Simple and quick API integration to your existing platforms.</p>
                </li>
                <li>
                  <h5>Fast Processing</h5>
                  <p>Real-time processing for instant payment confirmations.</p>
                </li>
                <li>
                  <h5>Detailed Reporting</h5>
                  <p>Comprehensive dashboard and analytics for transaction monitoring.</p>
                </li>
                <li>
                  <h5>24/7 Support</h5>
                  <p>Dedicated technical support team to assist you anytime.</p>
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
            <h2>Ready to accept payments seamlessly?</h2>
            <p>Connect with us to get the best payment gateway solutions for your business.</p>
            <Link to="/contact" className="btn-cta">Get Started</Link>
        </div>
    </section>
</>
  );
};

export default PaymentGateway;
