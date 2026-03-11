import React from 'react';
import { Link } from 'react-router-dom';

const Odoo = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/odoo-banner.png')",
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
              Odoo
            </span>
          </h1>
        </div>
      </section>

      {/*  Main Service Section  */}
      <section className="service-main">
        <div className="container">
          <div className="service-main-grid">
            <div className="service-features-grid">
              <div className="feature-box">
                <h4><i className="fas fa-puzzle-piece"></i> All-in-One Suite</h4>
                <p>Integrated business applications covering CRM, sales, inventory, accounting, HR, and more in one platform.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-code"></i> Open Source</h4>
                <p>Leverage the flexibility of open-source with full customization capabilities to match your business needs.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-mobile-alt"></i> Modern Interface</h4>
                <p>Beautiful, intuitive user interface accessible from any device with responsive design.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-dollar-sign"></i> Cost-Effective</h4>
                <p>Significant cost savings compared to proprietary ERP systems with no per-user licensing fees.</p>
              </div>
            </div>
            <div className="service-image">
              <div className="placeholder-icon">
                <i className="fas fa-th-large"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Odoo Modules  */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Odoo Modules We Implement</h3>
              <p>We implement and customize a wide range of Odoo modules to fit your exact business requirements.</p>
              <ul className="detail-list">
                <li>
                  <h5>Sales &amp; CRM</h5>
                  <p>Manage leads, opportunities, quotations, and sales orders with powerful pipeline management.</p>
                </li>
                <li>
                  <h5>Inventory &amp; Warehouse</h5>
                  <p>Advanced inventory management with barcode scanning, multi-warehouse, and automated replenishment.</p>
                </li>
                <li>
                  <h5>Accounting</h5>
                  <p>Complete accounting suite with invoicing, bank reconciliation, and multi-currency support.</p>
                </li>
                <li>
                  <h5>E-Commerce</h5>
                  <p>Build beautiful online stores integrated with your inventory and accounting seamlessly.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-cog"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Implement Odoo for Your Business?</h2>
          <p>Our certified Odoo experts will help you get the most out of this powerful platform.</p>
          <Link to="/contact" className="btn-cta">Get Free Consultation</Link>
        </div>
      </section>
    </>
  );
};

export default Odoo;
