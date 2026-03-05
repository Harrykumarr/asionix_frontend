import React from 'react';

import { Link } from 'react-router-dom';
const SapBasis = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>SAP Services</h2>
            <h1>SAP Basis Administration</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-server"></i> System Administration</h4>
                        <p>Complete SAP system administration including installation, configuration, and maintenance.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-sync-alt"></i> Transport Management</h4>
                        <p>Efficient transport management system setup and change management processes.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-shield-alt"></i> Security & Authorization</h4>
                        <p>User administration, role management, and security implementations.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tachometer-alt"></i> Performance Tuning</h4>
                        <p>System monitoring, performance analysis, and optimization for optimal operations.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-cog"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>SAP Basis Services</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-download"></i>
                    <h3>Installation & Upgrades</h3>
                    <p>SAP system installations, upgrades, and patch management across landscapes.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-database"></i>
                    <h3>Database Administration</h3>
                    <p>Database management for SAP HANA, Oracle, SQL Server, and other platforms.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-copy"></i>
                    <h3>System Copy</h3>
                    <p>Homogeneous and heterogeneous system copies for refresh and migrations.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-cloud"></i>
                    <h3>Cloud Migration</h3>
                    <p>SAP migration to cloud platforms including Azure, AWS, and Google Cloud.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Need SAP Basis Support?</h2>
            <p>Our certified Basis administrators ensure your SAP landscape runs smoothly 24/7.</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
    </section>
</>
  );
};

export default SapBasis;
