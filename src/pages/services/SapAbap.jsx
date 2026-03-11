import React from 'react';

import { Link } from 'react-router-dom';
const SapAbap = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1515879218367-8466d910auj7?w=1600&q=80')",
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
              SAP ABAP
            </span>
          </h1>
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

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Our ABAP Expertise</h3>
              <ul className="detail-list">
                <li>
                  <h5>ABAP OO</h5>
                  <p>Object-oriented ABAP development following SAP best practices and design patterns.</p>
                </li>
                <li>
                  <h5>CDS Views</h5>
                  <p>Core Data Services for optimized data access and virtual data models.</p>
                </li>
                <li>
                  <h5>Fiori/UI5</h5>
                  <p>SAP Fiori applications with SAPUI5 and OData services development.</p>
                </li>
                <li>
                  <h5>Performance</h5>
                  <p>Code optimization, performance tuning, and ABAP runtime analysis.</p>
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
            <h2>Need Custom SAP Development?</h2>
            <p>Our experienced ABAP developers will build solutions that extend your SAP system capabilities.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default SapAbap;
