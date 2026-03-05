import React from 'react';

import { Link } from 'react-router-dom';
const SapSd = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1556761175-5973e86c0c45?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>SAP Services</h2>
            <h1>SAP SD (Sales & Distribution)</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-file-invoice-dollar"></i> Sales Orders</h4>
                        <p>Complete sales order management from quotation to order creation with pricing and availability checks.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-truck"></i> Shipping & Delivery</h4>
                        <p>Streamlined delivery processing with picking, packing, goods issue, and transportation.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-receipt"></i> Billing</h4>
                        <p>Automated billing document creation with flexible pricing, discounts, and tax calculations.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-user-tie"></i> Customer Master</h4>
                        <p>Comprehensive customer data management including sales area data and partner functions.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-handshake"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>SAP SD Functionalities</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-tags"></i>
                    <h3>Pricing & Conditions</h3>
                    <p>Flexible condition technique for complex pricing scenarios with discounts and surcharges.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-credit-card"></i>
                    <h3>Credit Management</h3>
                    <p>Automated credit limit checks and credit exposure monitoring for risk management.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-exchange-alt"></i>
                    <h3>Returns Processing</h3>
                    <p>Complete returns management including credit memos and replacement deliveries.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-chart-line"></i>
                    <h3>Sales Analytics</h3>
                    <p>Comprehensive sales reporting and analysis for informed business decisions.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Streamline Your Sales Process with SAP SD</h2>
            <p>Our SAP SD consultants will help you optimize your order-to-cash cycle.</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
    </section>
</>
  );
};

export default SapSd;
