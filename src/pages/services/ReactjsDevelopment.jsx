import React from 'react';

import { Link } from 'react-router-dom';
const ReactjsDevelopment = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&q=80')",
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
              ReactJS Development
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fab fa-react"></i> React Applications</h4>
                        <p>Build interactive and dynamic web applications with React.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-laptop-code"></i> SPA Development</h4>
                        <p>Single-page applications with smooth navigation.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-server"></i> Next.js Development</h4>
                        <p>Server-side rendered React apps for better SEO.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-th-large"></i> Dashboard Development</h4>
                        <p>Interactive admin panels and data visualization.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-sync-alt"></i> Migration Services</h4>
                        <p>Migrate legacy apps to modern React architecture.</p>
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
                    <h3>React Ecosystem</h3>
                    <p>We leverage the complete React ecosystem to build scalable and maintainable applications.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Redux State Management</h5>
                            <p>Predictable state container for complex applications.</p>
                        </li>
                        <li>
                            <h5>React Hooks</h5>
                            <p>Modern functional components with hooks for cleaner code.</p>
                        </li>
                        <li>
                            <h5>TypeScript Integration</h5>
                            <p>Type-safe development for better code quality.</p>
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
            <h2>Ready to Build with React?</h2>
            <p>Let's create modern web applications together.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default ReactjsDevelopment;
