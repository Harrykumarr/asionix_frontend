import React from 'react';

import { Link } from 'react-router-dom';
const SapBasis = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80')",
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
              SAP Basis
            </span>
          </h1>
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

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>SAP Basis Services</h3>
              <ul className="detail-list">
                <li>
                  <h5>Installation & Upgrades</h5>
                  <p>SAP system installations, upgrades, and patch management across landscapes.</p>
                </li>
                <li>
                  <h5>Database Administration</h5>
                  <p>Database management for SAP HANA, Oracle, SQL Server, and other platforms.</p>
                </li>
                <li>
                  <h5>System Copy</h5>
                  <p>Homogeneous and heterogeneous system copies for refresh and migrations.</p>
                </li>
                <li>
                  <h5>Cloud Migration</h5>
                  <p>SAP migration to cloud platforms including Azure, AWS, and Google Cloud.</p>
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
            <h2>Need SAP Basis Support?</h2>
            <p>Our certified Basis administrators ensure your SAP landscape runs smoothly 24/7.</p>
            <Link to="/contact" className="btn-cta">Contact Us</Link>
        </div>
    </section>
</>
  );
};

export default SapBasis;
