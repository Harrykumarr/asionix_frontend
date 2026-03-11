import React from 'react';

import { Link } from 'react-router-dom';
const NodejsDevelopment = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/nodejs-banner.png')",
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
              Node.js Development
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fab fa-node-js"></i> Node.js Applications</h4>
                        <p>High-performance server-side applications with Node.js.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-server"></i> API Development</h4>
                        <p>RESTful and GraphQL APIs for web and mobile apps.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cubes"></i> Microservices</h4>
                        <p>Scalable microservices architecture for enterprises.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-comments"></i> Real-time Apps</h4>
                        <p>Chat, notifications, and live updates with Socket.io.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cloud"></i> Cloud Deployment</h4>
                        <p>AWS, Azure, and GCP deployment with Docker.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tools"></i> Maintenance & Support</h4>
                        <p>Ongoing updates and technical support services.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fab fa-node-js"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>Node.js Frameworks</h3>
                    <p>We use industry-leading frameworks to build robust backend solutions.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Express.js</h5>
                            <p>Minimal and flexible Node.js web application framework.</p>
                        </li>
                        <li>
                            <h5>NestJS</h5>
                            <p>Progressive Node.js framework for enterprise applications.</p>
                        </li>
                        <li>
                            <h5>Socket.io</h5>
                            <p>Real-time bidirectional event-based communication.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-code"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Build Your Backend?</h2>
            <p>Let's create scalable server-side solutions together.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default NodejsDevelopment;
