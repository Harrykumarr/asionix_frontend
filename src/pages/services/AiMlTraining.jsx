import React from 'react';

import { Link } from 'react-router-dom';
const AiMlTraining = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80')",
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
              AI & ML Training
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-brain"></i> Machine Learning</h4>
                        <p>Supervised, unsupervised, and reinforcement learning.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-network-wired"></i> Deep Learning</h4>
                        <p>Neural networks, CNN, RNN, and transformers.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-python"></i> Python for AI</h4>
                        <p>Python programming with TensorFlow and PyTorch.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-comment-dots"></i> NLP</h4>
                        <p>Natural Language Processing and text analysis.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-eye"></i> Computer Vision</h4>
                        <p>Image recognition, object detection, and OCR.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-project-diagram"></i> Real Projects</h4>
                        <p>Build AI solutions for real-world problems.</p>
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
                    <h3>Training Program</h3>
                    <p>Comprehensive AI/ML training program for aspiring data scientists.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Python Fundamentals</h5>
                            <p>Python programming, NumPy, Pandas, and Matplotlib.</p>
                        </li>
                        <li>
                            <h5>ML Algorithms</h5>
                            <p>Regression, classification, clustering, and more.</p>
                        </li>
                        <li>
                            <h5>Industry Projects</h5>
                            <p>Hands-on projects with real datasets and problems.</p>
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
            <h2>Ready to Master AI?</h2>
            <p>Join our AI & Machine Learning training program today.</p>
            <Link to="/contact" className="btn-cta">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default AiMlTraining;
