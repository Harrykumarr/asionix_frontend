import React from 'react';

import { Link } from 'react-router-dom';
const CyberSecurity = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Industry Skill Training</h2>
            <h1>Cyber Security Training</h1>
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

    <section className="service-details">
        <div className="container">
            <h2>Course Modules</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-globe"></i>
                    <h3>Web Security</h3>
                    <p>OWASP Top 10, SQL injection, XSS, CSRF, and web application security testing.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-cloud"></i>
                    <h3>Cloud Security</h3>
                    <p>Securing cloud infrastructure on AWS, Azure, and GCP platforms.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-search"></i>
                    <h3>Incident Response</h3>
                    <p>Security incident handling, forensics, and disaster recovery procedures.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-certificate"></i>
                    <h3>Certifications</h3>
                    <p>Preparation for CEH, CISSP, CompTIA Security+, and other certifications.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Become a Cyber Security Professional</h2>
            <p>Join our comprehensive training program and protect organizations from cyber threats.</p>
            <Link to="/contact" className="btn-primary">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default CyberSecurity;
