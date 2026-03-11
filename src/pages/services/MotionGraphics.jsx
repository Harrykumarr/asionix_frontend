import React from 'react';
import { Link } from 'react-router-dom';

const MotionGraphics = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80')",
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
              Motion Graphics
            </span>
          </h1>
        </div>
      </section>

      {/*  Main Service Section  */}
      <section className="service-main">
        <div className="container">
          <div className="service-main-grid">
            <div className="service-features-grid">
              <div className="feature-box">
                <h4><i className="fas fa-play"></i> Explainer Videos</h4>
                <p>Engaging animated videos that explain your product or service clearly.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-font"></i> Kinetic Typography</h4>
                <p>Dynamic text animations tailored to grab attention on social media.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-tv"></i> Broadcast Design</h4>
                <p>Professional intro/outro sequences, lower thirds, and channel branding.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-ad"></i> Promotional Ads</h4>
                <p>Eye-catching motion ads optimized for various digital marketing platforms.</p>
              </div>
            </div>
            <div className="service-image">
              <div className="placeholder-icon">
                <i className="fas fa-film"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Details Section  */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Our Motion Graphics Services</h3>
              <p>We combine design and animation to produce visually compelling stories that engage your audience.</p>
              <ul className="detail-list">
                <li>
                  <h5>Storyboarding &amp; Design</h5>
                  <p>Meticulous planning and asset creation to ensure a cohesive style.</p>
                </li>
                <li>
                  <h5>2D/3D Animation Integration</h5>
                  <p>Seamless blending of 2D motion with 3D elements for a richer look.</p>
                </li>
                <li>
                  <h5>Sound Design</h5>
                  <p>Enhancing animations with matching sound effects and background music.</p>
                </li>
                <li>
                  <h5>Multi-Platform Delivery</h5>
                  <p>Exports in the exact formats required for web, TV, or social media.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-object-group"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Need Dynamic Motion Graphics?</h2>
          <p>Contact us today to elevate your brand's visual storytelling.</p>
          <Link to="/contact" className="btn-cta">Work With Us</Link>
        </div>
      </section>
    </>
  );
};

export default MotionGraphics;
