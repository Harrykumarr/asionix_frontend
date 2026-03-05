import React from 'react';

import { Link } from 'react-router-dom';
const ReactNative = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>React Native</h2>
            <h1>Cross-Platform App Development</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fab fa-react"></i> React Native Apps</h4>
                        <p>Build apps for iOS and Android with a single codebase.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-code"></i> Custom Development</h4>
                        <p>Tailored solutions to meet your specific business requirements.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-sync-alt"></i> Code Reusability</h4>
                        <p>Up to 90% code sharing between iOS and Android platforms.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-bolt"></i> Fast Development</h4>
                        <p>Hot reloading and faster development cycles.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-plug"></i> Native Modules</h4>
                        <p>Access native device features with custom modules.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tools"></i> Maintenance & Support</h4>
                        <p>Ongoing updates and technical support services.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fab fa-react"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>Why React Native?</h3>
                    <p>React Native allows you to build mobile apps using JavaScript and React, sharing code across platforms while maintaining native performance.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Cost-Effective</h5>
                            <p>Single codebase means reduced development time and cost.</p>
                        </li>
                        <li>
                            <h5>Native Performance</h5>
                            <p>Apps perform like native apps with smooth animations.</p>
                        </li>
                        <li>
                            <h5>Large Community</h5>
                            <p>Backed by Facebook with a thriving developer community.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Build Cross-Platform App?</h2>
            <p>Let's create apps that work on both iOS and Android.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default ReactNative;
