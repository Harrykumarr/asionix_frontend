import React from 'react';

import { Link } from 'react-router-dom';
const SapFico = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80')",
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
              SAP FICO
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-calculator"></i> Financial Accounting</h4>
                        <p>General Ledger, Accounts Payable, Accounts Receivable.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-bar"></i> Controlling</h4>
                        <p>Cost center, profit center, and internal orders.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-file-invoice-dollar"></i> Asset Accounting</h4>
                        <p>Fixed asset management and depreciation tracking.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-balance-scale"></i> Bank Accounting</h4>
                        <p>Bank reconciliation and cash management.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-file-alt"></i> Reporting</h4>
                        <p>Financial statements and management reports.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-graduation-cap"></i> Training</h4>
                        <p>SAP FICO training for your finance team.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-coins"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>FICO Components</h3>
                    <p>We implement and configure all SAP FICO components for your business.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>General Ledger (GL)</h5>
                            <p>Centralized financial data management and reporting.</p>
                        </li>
                        <li>
                            <h5>Accounts Payable (AP)</h5>
                            <p>Vendor management and payment processing.</p>
                        </li>
                        <li>
                            <h5>Accounts Receivable (AR)</h5>
                            <p>Customer invoicing and collections management.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-money-bill-wave"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Optimize Your Finance?</h2>
            <p>Let's implement SAP FICO for better financial management.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default SapFico;
