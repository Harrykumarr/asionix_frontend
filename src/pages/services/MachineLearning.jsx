import React from 'react';

import { Link } from 'react-router-dom';
const MachineLearning = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Industry Skill Training</h2>
            <h1>Machine Learning Training</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-brain"></i> ML Fundamentals</h4>
                        <p>Core concepts of machine learning including supervised, unsupervised, and reinforcement learning.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-line"></i> Algorithms</h4>
                        <p>Master regression, classification, clustering, and dimensionality reduction algorithms.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-python"></i> Python for ML</h4>
                        <p>Hands-on training with Scikit-learn, TensorFlow, Keras, and PyTorch frameworks.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-project-diagram"></i> Real Projects</h4>
                        <p>Build real-world ML projects from data preprocessing to model deployment.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-robot"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-details">
        <div className="container">
            <h2>Course Curriculum</h2>
            <div className="details-grid">
                <div className="detail-card">
                    <i className="fas fa-database"></i>
                    <h3>Data Preprocessing</h3>
                    <p>Data cleaning, feature engineering, normalization, and handling missing values.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-network-wired"></i>
                    <h3>Neural Networks</h3>
                    <p>Deep learning architectures including CNNs, RNNs, and transformer models.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-balance-scale"></i>
                    <h3>Model Evaluation</h3>
                    <p>Cross-validation, hyperparameter tuning, and model selection techniques.</p>
                </div>
                <div className="detail-card">
                    <i className="fas fa-rocket"></i>
                    <h3>Deployment</h3>
                    <p>Deploy ML models using Flask, FastAPI, Docker, and cloud platforms.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="cta-section">
        <div className="container">
            <h2>Start Your Machine Learning Journey</h2>
            <p>Learn from industry experts and build job-ready ML skills with hands-on projects.</p>
            <Link to="/contact" className="btn-primary">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default MachineLearning;
