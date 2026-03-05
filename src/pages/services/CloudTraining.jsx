import React from 'react';

import { Link } from 'react-router-dom';
const CloudTraining = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Cloud Computing</h2>
            <h1>Industry Skill Training</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fab fa-aws"></i> AWS Training</h4>
                        <p>Amazon Web Services certification preparation.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-microsoft"></i> Azure Training</h4>
                        <p>Microsoft Azure fundamentals and advanced topics.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-google"></i> GCP Training</h4>
                        <p>Google Cloud Platform services and architecture.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-docker"></i> Docker & Kubernetes</h4>
                        <p>Container orchestration and microservices.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cogs"></i> DevOps</h4>
                        <p>CI/CD pipelines, automation, and infrastructure as code.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-certificate"></i> Certifications</h4>
                        <p>Prepare for AWS, Azure, and GCP certifications.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-cloud"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>Training Program</h3>
                    <p>Comprehensive cloud computing training for modern IT professionals.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Cloud Fundamentals</h5>
                            <p>IaaS, PaaS, SaaS, and cloud architecture patterns.</p>
                        </li>
                        <li>
                            <h5>Hands-on Labs</h5>
                            <p>Practical labs on AWS, Azure, and GCP platforms.</p>
                        </li>
                        <li>
                            <h5>Certification Prep</h5>
                            <p>Practice exams and study materials for certifications.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Master the Cloud?</h2>
            <p>Join our Cloud Computing training program today.</p>
            <Link to="/contact" className="btn-cta">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default CloudTraining;
