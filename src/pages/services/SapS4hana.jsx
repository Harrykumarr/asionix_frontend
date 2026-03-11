import React from 'react';

import { Link } from 'react-router-dom';
const SapS4hana = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80')",
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
              SAP S/4HANA
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-rocket"></i> S/4HANA Implementation</h4>
                        <p>End-to-end SAP S/4HANA implementation services.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-exchange-alt"></i> Migration Services</h4>
                        <p>Seamless migration from SAP ECC to S/4HANA.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cloud"></i> Cloud Deployment</h4>
                        <p>Deploy SAP S/4HANA on cloud platforms.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cogs"></i> Customization</h4>
                        <p>Custom development and configuration for your needs.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-sync"></i> Integration Services</h4>
                        <p>Integrate SAP with third-party systems and applications.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-headset"></i> Support & Training</h4>
                        <p>Ongoing support and user training programs.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-building"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>SAP Modules</h3>
                    <p>We provide expertise across all major SAP S/4HANA modules.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Finance & Controlling</h5>
                            <p>Comprehensive financial management and reporting.</p>
                        </li>
                        <li>
                            <h5>Supply Chain Management</h5>
                            <p>Optimize procurement, production, and logistics.</p>
                        </li>
                        <li>
                            <h5>Human Capital Management</h5>
                            <p>End-to-end HR processes and workforce management.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-database"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's implement SAP S/4HANA for your enterprise.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default SapS4hana;
