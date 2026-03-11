import React from 'react';

import { Link } from 'react-router-dom';
const CyberSecurity = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80')",
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
              Cyber Security
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-shield-alt"></i> Security Fundamentals</h4>
                        <p>Core concepts of information security, CIA triad, and security frameworks.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-user-secret"></i> Ethical Hacking</h4>
                        <p>Learn penetration testing, vulnerability assessment, and ethical hacking techniques.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-network-wired"></i> Network Security</h4>
                        <p>Firewalls, IDS/IPS, VPNs, and network defense strategies.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-bug"></i> Malware Analysis</h4>
                        <p>Identify, analyze, and defend against various types of malware and threats.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-lock"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Course Modules</h3>
              <ul className="detail-list">
                <li>
                  <h5>Web Security</h5>
                  <p>OWASP Top 10, SQL injection, XSS, CSRF, and web application security testing.</p>
                </li>
                <li>
                  <h5>Cloud Security</h5>
                  <p>Securing cloud infrastructure on AWS, Azure, and GCP platforms.</p>
                </li>
                <li>
                  <h5>Incident Response</h5>
                  <p>Security incident handling, forensics, and disaster recovery procedures.</p>
                </li>
                <li>
                  <h5>Certifications</h5>
                  <p>Preparation for CEH, CISSP, CompTIA Security+, and other certifications.</p>
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
            <h2>Become a Cyber Security Professional</h2>
            <p>Join our comprehensive training program and protect organizations from cyber threats.</p>
            <Link to="/contact" className="btn-cta">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default CyberSecurity;
