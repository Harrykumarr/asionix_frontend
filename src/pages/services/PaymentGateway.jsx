import React from 'react';

import { Link } from 'react-router-dom';
const PaymentGateway = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Marketing</h2>
            <h1>Payment Gateway Services</h1>
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

    <section className="service-details">
        <div className="container">
            <h2>Our Payment Gateway Features</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-plug"></i>
                    <h3>Easy Integration</h3>
                    <p>Simple and quick API integration to your existing platforms.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-tachometer-alt"></i>
                    <h3>Fast Processing</h3>
                    <p>Real-time processing for instant payment confirmations.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-file-invoice-dollar"></i>
                    <h3>Detailed Reporting</h3>
                    <p>Comprehensive dashboard and analytics for transaction monitoring.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-headset"></i>
                    <h3>24/7 Support</h3>
                    <p>Dedicated technical support team to assist you anytime.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to accept payments seamlessly?</h2>
            <p>Connect with us to get the best payment gateway solutions for your business.</p>
            <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>
    </section>
</>
  );
};

export default PaymentGateway;
