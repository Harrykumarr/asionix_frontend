import React from 'react';
import { Link } from 'react-router-dom';

const ErpFramework = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/erp-banner.png')",
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
              ERP Framework
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
                <h4><i className="fas fa-cubes"></i> Modular Design</h4>
                <p>Flexible modular architecture allowing you to implement only the modules you need and scale as your business grows.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-database"></i> Centralized Data</h4>
                <p>Single source of truth for all your business data with real-time synchronization across departments.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-chart-line"></i> Analytics &amp; Reports</h4>
                <p>Comprehensive reporting and business intelligence dashboards for data-driven decision making.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-lock"></i> Secure &amp; Reliable</h4>
                <p>Enterprise-grade security with role-based access control and audit trails for compliance.</p>
              </div>
            </div>
            <div className="service-image">
              <div className="placeholder-icon">
                <i className="fas fa-sitemap"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ERP Modules  */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>ERP Modules We Offer</h3>
              <p>Our comprehensive ERP solution covers all critical business functions for streamlined operations.</p>
              <ul className="detail-list">
                <li>
                  <h5>Finance &amp; Accounting</h5>
                  <p>Complete financial management including GL, AP, AR, budgeting, and financial reporting.</p>
                </li>
                <li>
                  <h5>Inventory Management</h5>
                  <p>Track stock levels, manage warehouses, and optimize inventory with automated reordering.</p>
                </li>
                <li>
                  <h5>HR &amp; Payroll</h5>
                  <p>Streamline HR processes from recruitment to retirement with integrated payroll processing.</p>
                </li>
                <li>
                  <h5>Manufacturing</h5>
                  <p>Production planning, BOM management, work orders, and quality control for manufacturers.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Streamline Your Business Operations?</h2>
          <p>Get a custom ERP solution tailored to your specific business requirements.</p>
          <Link to="/contact" className="btn-cta">Request a Demo</Link>
        </div>
      </section>
    </>
  );
};

export default ErpFramework;
