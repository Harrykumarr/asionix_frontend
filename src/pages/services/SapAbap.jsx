import React from 'react';

import { Link } from 'react-router-dom';
const SapAbap = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>SAP Services</h2>
            <h1>SAP ABAP Development</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-code"></i> Custom Development</h4>
                        <p>Build custom ABAP programs, function modules, and enhancements tailored to your business needs.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-file-alt"></i> Reports & Forms</h4>
                        <p>Custom ALV reports, Smart Forms, Adobe Forms, and SAPscript for document output.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-exchange-alt"></i> Interfaces</h4>
                        <p>BAPI, RFC, IDoc, and web service development for seamless system integration.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cogs"></i> Enhancements</h4>
                        <p>User exits, BADIs, enhancement spots, and implicit/explicit enhancements.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-terminal"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>Our ABAP Expertise</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-object-group"></i>
                    <h3>ABAP OO</h3>
                    <p>Object-oriented ABAP development following SAP best practices and design patterns.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-database"></i>
                    <h3>CDS Views</h3>
                    <p>Core Data Services for optimized data access and virtual data models.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-desktop"></i>
                    <h3>Fiori/UI5</h3>
                    <p>SAP Fiori applications with SAPUI5 and OData services development.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-tachometer-alt"></i>
                    <h3>Performance</h3>
                    <p>Code optimization, performance tuning, and ABAP runtime analysis.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Need Custom SAP Development?</h2>
            <p>Our experienced ABAP developers will build solutions that extend your SAP system capabilities.</p>
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default SapAbap;
