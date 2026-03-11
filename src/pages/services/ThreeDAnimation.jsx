import React from 'react';
import { Link } from 'react-router-dom';

const ThreeDAnimation = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80')",
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
              3D Animation
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
                <h4><i className="fas fa-cube"></i> 3D Modeling</h4>
                <p>High-quality 3D models for characters, props, environments, and products.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-walking"></i> Character Animation</h4>
                <p>Lifelike character animation with realistic movement and expressions.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-building"></i> Architectural Visualization</h4>
                <p>Photorealistic 3D renders of architectural designs and real estate projects.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-gamepad"></i> Game Assets</h4>
                <p>Optimized 3D assets and animations ready for integration into game engines.</p>
              </div>
            </div>
            <div className="service-image">
              <div className="placeholder-icon">
                <i className="fas fa-cubes"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  3D Animation Solutions  */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Our 3D Animation Solutions</h3>
              <p>We provide end-to-end 3D animation services, from concept art to final rendering.</p>
              <ul className="detail-list">
                <li>
                  <h5>Concept &amp; Storyboarding</h5>
                  <p>Visual planning and storyboarding to map out the narrative and style.</p>
                </li>
                <li>
                  <h5>Rigging &amp; Animation</h5>
                  <p>Advanced skeleton rigging and fluid animation for complex models.</p>
                </li>
                <li>
                  <h5>Texturing &amp; Lighting</h5>
                  <p>Detailed materials, textures, and realistic lighting setups.</p>
                </li>
                <li>
                  <h5>Rendering</h5>
                  <p>High-resolution output using state-of-the-art rendering engines.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-vr-cardboard"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Bring Your Ideas to Life in 3D?</h2>
          <p>Let our expert animators create stunning 3D content for your project.</p>
          <Link to="/contact" className="btn-cta">Get Started Today</Link>
        </div>
      </section>
    </>
  );
};

export default ThreeDAnimation;
