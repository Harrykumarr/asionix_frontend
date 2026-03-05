import React from 'react';

import { Link } from 'react-router-dom';
const ErpFramework = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Transformation</h2>
            <h1>Inhouse ERP Framework</h1>
        </div>
    </section>

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
                        <h4><i className="fas fa-chart-line"></i> Analytics & Reports</h4>
                        <p>Comprehensive reporting and business intelligence dashboards for data-driven decision making.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-lock"></i> Secure & Reliable</h4>
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

    <section className="service-details">
        <div className="container">
            <h2>ERP Modules We Offer</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-calculator"></i>
                    <h3>Finance & Accounting</h3>
                    <p>Complete financial management including GL, AP, AR, budgeting, and financial reporting.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-boxes"></i>
                    <h3>Inventory Management</h3>
                    <p>Track stock levels, manage warehouses, and optimize inventory with automated reordering.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-users"></i>
                    <h3>HR & Payroll</h3>
                    <p>Streamline HR processes from recruitment to retirement with integrated payroll processing.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-industry"></i>
                    <h3>Manufacturing</h3>
                    <p>Production planning, BOM management, work orders, and quality control for manufacturers.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to Streamline Your Business Operations?</h2>
            <p>Get a custom ERP solution tailored to your specific business requirements.</p>
            <Link to="/contact" className="btn-primary">Request a Demo</Link>
        </div>
    </section>
</>
  );
};

export default ErpFramework;
