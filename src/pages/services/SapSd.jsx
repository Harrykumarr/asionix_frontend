import React from 'react';

import { Link } from 'react-router-dom';
const SapSd = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80')",
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
              SAP SD
            </span>
          </h1>
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

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>SAP SD Functionalities</h3>
              <ul className="detail-list">
                <li>
                  <h5>Pricing & Conditions</h5>
                  <p>Flexible condition technique for complex pricing scenarios with discounts and surcharges.</p>
                </li>
                <li>
                  <h5>Credit Management</h5>
                  <p>Automated credit limit checks and credit exposure monitoring for risk management.</p>
                </li>
                <li>
                  <h5>Returns Processing</h5>
                  <p>Complete returns management including credit memos and replacement deliveries.</p>
                </li>
                <li>
                  <h5>Sales Analytics</h5>
                  <p>Comprehensive sales reporting and analysis for informed business decisions.</p>
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
            <h2>Streamline Your Sales Process with SAP SD</h2>
            <p>Our SAP SD consultants will help you optimize your order-to-cash cycle.</p>
            <Link to="/contact" className="btn-cta">Contact Us</Link>
        </div>
    </section>
</>
  );
};

export default SapSd;
