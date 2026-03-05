import React from 'react';

import { Link } from 'react-router-dom';
const SapMm = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1586528116311-ad8ed7c50a30?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>SAP Services</h2>
            <h1>SAP MM (Materials Management)</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-shopping-cart"></i> Procurement</h4>
                        <p>Streamline purchasing processes with automated requisitions, RFQs, and purchase orders.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-warehouse"></i> Inventory Management</h4>
                        <p>Real-time inventory tracking with goods receipt, goods issue, and stock transfers.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-file-invoice"></i> Invoice Verification</h4>
                        <p>Automated three-way matching of purchase orders, goods receipts, and vendor invoices.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-users"></i> Vendor Management</h4>
                        <p>Comprehensive vendor master data management with evaluation and performance tracking.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-boxes"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>SAP MM Components</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-clipboard-list"></i>
                    <h3>Material Master</h3>
                    <p>Centralized material data management with all relevant procurement and inventory information.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-file-contract"></i>
                    <h3>Purchasing</h3>
                    <p>Complete procurement cycle from requisition to payment with contract management.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-dolly"></i>
                    <h3>Goods Movement</h3>
                    <p>Track all material movements including receipts, issues, transfers, and physical inventory.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-chart-bar"></i>
                    <h3>MRP</h3>
                    <p>Material Requirements Planning for optimal stock levels and automated procurement proposals.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Optimize Your Supply Chain with SAP MM</h2>
            <p>Let our SAP MM experts help you streamline procurement and inventory management.</p>
            <Link to="/contact" className="btn-primary">Get Consultation</Link>
        </div>
    </section>
</>
  );
};

export default SapMm;
