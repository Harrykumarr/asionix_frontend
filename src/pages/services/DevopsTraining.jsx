import React from 'react';

import { Link } from 'react-router-dom';
const DevopsTraining = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1618401479860-2ae5f58d926e?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Industry Skill Training</h2>
            <h1>DevOps Training</h1>
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

    <section className="service-details">
        <div className="container">
            <h2>Course Modules</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fab fa-linux"></i>
                    <h3>Linux Administration</h3>
                    <p>Essential Linux commands, shell scripting, and system administration.</p>
                </div>
                <div className="detail-card">
                    <i className="fab fa-git-alt"></i>
                    <h3>Version Control</h3>
                    <p>Git workflows, branching strategies, and collaboration with Git.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-chart-area"></i>
                    <h3>Monitoring</h3>
                    <p>Implement monitoring with Prometheus, Grafana, ELK Stack, and Datadog.</p>
                </div>
                <div className="detail-card">
                    <i className="fab fa-aws"></i>
                    <h3>Cloud Platforms</h3>
                    <p>DevOps on AWS, Azure, and GCP with hands-on projects.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Launch Your DevOps Career</h2>
            <p>Master the tools and practices that power modern software delivery.</p>
            <Link to="/contact" className="btn-primary">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default DevopsTraining;
