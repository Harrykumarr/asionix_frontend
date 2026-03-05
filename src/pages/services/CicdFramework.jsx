import React from 'react';

import { Link } from 'react-router-dom';
const CicdFramework = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Digital Transformation</h2>
            <h1>CI/CD Framework</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-code-branch"></i> Continuous Integration</h4>
                        <p>Automate code integration with multiple daily merges, automated testing, and early bug detection.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-rocket"></i> Continuous Deployment</h4>
                        <p>Automated deployment pipelines ensuring rapid, reliable releases to production environments.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-vial"></i> Automated Testing</h4>
                        <p>Comprehensive test automation including unit, integration, and end-to-end testing frameworks.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-shield-alt"></i> Security Integration</h4>
                        <p>DevSecOps practices with security scanning integrated into your CI/CD pipeline.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-infinity"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>CI/CD Tools We Work With</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fab fa-jenkins"></i>
                    <h3>Jenkins</h3>
                    <p>Open-source automation server for building, testing, and deploying your applications.</p>
                </div>
                <div className="detail-card">
                    <i className="fab fa-gitlab"></i>
                    <h3>GitLab CI</h3>
                    <p>Integrated CI/CD pipelines with version control for seamless development workflows.</p>
                </div>
                <div className="detail-card">
                    <i className="fab fa-github"></i>
                    <h3>GitHub Actions</h3>
                    <p>Workflow automation directly from your GitHub repository with flexible action scripts.</p>
                </div>
                <div className="detail-card">
                    <i className="fab fa-aws"></i>
                    <h3>AWS CodePipeline</h3>
                    <p>Fully managed continuous delivery service for fast and reliable application updates.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Ready to Accelerate Your Development?</h2>
            <p>Let us help you implement robust CI/CD pipelines for faster, more reliable software delivery.</p>
            <Link to="/contact" className="btn-primary">Start Your DevOps Journey</Link>
        </div>
    </section>
</>
  );
};

export default CicdFramework;
