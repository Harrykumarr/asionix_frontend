import React from 'react';

import { Link } from 'react-router-dom';
const FullstackTraining = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Full Stack Development</h2>
            <h1>Industry Skill Training</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-laptop-code"></i> Frontend Development</h4>
                        <p>HTML, CSS, JavaScript, React, Angular, Vue.js.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-server"></i> Backend Development</h4>
                        <p>Node.js, Python, Java, PHP, .NET Core.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-database"></i> Database Management</h4>
                        <p>MySQL, PostgreSQL, MongoDB, Redis.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-code-branch"></i> Version Control</h4>
                        <p>Git, GitHub, GitLab, CI/CD pipelines.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tasks"></i> Live Projects</h4>
                        <p>Hands-on experience with real-world projects.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-certificate"></i> Certification</h4>
                        <p>Industry-recognized certification upon completion.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-code"></i>
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
                    <p>Comprehensive training program designed for industry readiness.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>MERN Stack</h5>
                            <p>MongoDB, Express.js, React, Node.js full stack.</p>
                        </li>
                        <li>
                            <h5>MEAN Stack</h5>
                            <p>MongoDB, Express.js, Angular, Node.js training.</p>
                        </li>
                        <li>
                            <h5>Placement Support</h5>
                            <p>Resume building, interview prep, and job placement.</p>
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
            <h2>Ready to Start Your Career?</h2>
            <p>Join our Full Stack Development training program today.</p>
            <Link to="/contact" className="btn-cta">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default FullstackTraining;
