import React from 'react';

import { Link } from 'react-router-dom';
const Odoo = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Transformation</h2>
            <h1>Odoo ERP Solutions</h1>
        </div>
    </section>

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

    <section className="service-details">
        <div className="container">
            <h2>Odoo Modules We Implement</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-shopping-cart"></i>
                    <h3>Sales & CRM</h3>
                    <p>Manage leads, opportunities, quotations, and sales orders with powerful pipeline management.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-warehouse"></i>
                    <h3>Inventory & Warehouse</h3>
                    <p>Advanced inventory management with barcode scanning, multi-warehouse, and automated replenishment.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-file-invoice-dollar"></i>
                    <h3>Accounting</h3>
                    <p>Complete accounting suite with invoicing, bank reconciliation, and multi-currency support.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-store"></i>
                    <h3>E-Commerce</h3>
                    <p>Build beautiful online stores integrated with your inventory and accounting seamlessly.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to Implement Odoo for Your Business?</h2>
            <p>Our certified Odoo experts will help you get the most out of this powerful platform.</p>
            <Link to="/contact" className="btn-primary">Get Free Consultation</Link>
        </div>
    </section>
</>
  );
};

export default Odoo;
