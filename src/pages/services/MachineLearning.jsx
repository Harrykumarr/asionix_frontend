import React from 'react';

import { Link } from 'react-router-dom';
const MachineLearning = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&q=80')",
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
              Machine Learning
            </span>
          </h1>
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

    <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Course Curriculum</h3>
              <ul className="detail-list">
                <li>
                  <h5>Data Preprocessing</h5>
                  <p>Data cleaning, feature engineering, normalization, and handling missing values.</p>
                </li>
                <li>
                  <h5>Neural Networks</h5>
                  <p>Deep learning architectures including CNNs, RNNs, and transformer models.</p>
                </li>
                <li>
                  <h5>Model Evaluation</h5>
                  <p>Cross-validation, hyperparameter tuning, and model selection techniques.</p>
                </li>
                <li>
                  <h5>Deployment</h5>
                  <p>Deploy ML models using Flask, FastAPI, Docker, and cloud platforms.</p>
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
            <h2>Start Your Machine Learning Journey</h2>
            <p>Learn from industry experts and build job-ready ML skills with hands-on projects.</p>
            <Link to="/contact" className="btn-cta">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default MachineLearning;
