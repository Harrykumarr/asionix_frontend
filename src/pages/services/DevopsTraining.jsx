import React from 'react';

import { Link } from 'react-router-dom';
const DevopsTraining = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1600&q=80')",
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
              DevOps Training
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-infinity"></i> DevOps Culture</h4>
                        <p>Understand DevOps principles, practices, and the culture of collaboration between Dev and Ops.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-code-branch"></i> CI/CD Pipelines</h4>
                        <p>Build automated pipelines with Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-docker"></i> Containers</h4>
                        <p>Master Docker containerization and Kubernetes orchestration for scalable deployments.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-server"></i> Infrastructure as Code</h4>
                        <p>Automate infrastructure with Terraform, Ansible, and CloudFormation.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-sync-alt"></i>
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
                  <h5>Linux Administration</h5>
                  <p>Essential Linux commands, shell scripting, and system administration.</p>
                </li>
                <li>
                  <h5>Version Control</h5>
                  <p>Git workflows, branching strategies, and collaboration with Git.</p>
                </li>
                <li>
                  <h5>Monitoring</h5>
                  <p>Implement monitoring with Prometheus, Grafana, ELK Stack, and Datadog.</p>
                </li>
                <li>
                  <h5>Cloud Platforms</h5>
                  <p>DevOps on AWS, Azure, and GCP with hands-on projects.</p>
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
            <h2>Launch Your DevOps Career</h2>
            <p>Master the tools and practices that power modern software delivery.</p>
            <Link to="/contact" className="btn-cta">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default DevopsTraining;
