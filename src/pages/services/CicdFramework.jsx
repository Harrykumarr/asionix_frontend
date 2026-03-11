import React from 'react';
import { Link } from 'react-router-dom';

const CicdFramework = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/cicd-banner.png')",
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
              CI/CD Framework
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

      {/*  CI/CD Tools  */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>CI/CD Tools We Work With</h3>
              <p>We leverage industry-leading tools to build robust and efficient CI/CD pipelines for your projects.</p>
              <ul className="detail-list">
                <li>
                  <h5>Jenkins</h5>
                  <p>Open-source automation server for building, testing, and deploying your applications.</p>
                </li>
                <li>
                  <h5>GitLab CI</h5>
                  <p>Integrated CI/CD pipelines with version control for seamless development workflows.</p>
                </li>
                <li>
                  <h5>GitHub Actions</h5>
                  <p>Workflow automation directly from your GitHub repository with flexible action scripts.</p>
                </li>
                <li>
                  <h5>AWS CodePipeline</h5>
                  <p>Fully managed continuous delivery service for fast and reliable application updates.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-cogs"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Accelerate Your Development?</h2>
          <p>Let us help you implement robust CI/CD pipelines for faster, more reliable software delivery.</p>
          <Link to="/contact" className="btn-cta">Start Your DevOps Journey</Link>
        </div>
      </section>
    </>
  );
};

export default CicdFramework;
