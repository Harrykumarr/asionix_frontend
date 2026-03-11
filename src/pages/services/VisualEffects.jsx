import React from 'react';
import { Link } from 'react-router-dom';

const VisualEffects = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80')",
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
              Visual Effects
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
                <h4><i className="fas fa-meteor"></i> Particle Effects</h4>
                <p>Creating realistic fire, smoke, water, and explosion simulations.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-user-astronaut"></i> Digital Set Extension</h4>
                <p>Expanding physical locations with fully digital, photorealistic environments.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-eraser"></i> Clean-up &amp; Wire Removal</h4>
                <p>Removing unwanted equipment, wires, or crew from recorded footage.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-ghost"></i> CGI Integration</h4>
                <p>Seamlessly blending computer-generated objects into live-action plates.</p>
              </div>
            </div>
            <div className="service-image">
              <div className="placeholder-icon">
                <i className="fas fa-magic"></i>
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
              <h3>Our VFX Pipeline</h3>
              <p>We deliver Hollywood-standard visual effects for film, television, and high-end commercials.</p>
              <ul className="detail-list">
                <li>
                  <h5>Pre-visualization</h5>
                  <p>Detailed planning and rough animations to assist on-set production.</p>
                </li>
                <li>
                  <h5>Look Development</h5>
                  <p>Establishing the aesthetic style, lighting, and textures for digital assets.</p>
                </li>
                <li>
                  <h5>Matchmoving</h5>
                  <p>Precise 3D camera tracking to link real scenes with virtual cameras.</p>
                </li>
                <li>
                  <h5>Simulation &amp; FX</h5>
                  <p>Building complex physical simulations like fluids, cloth, and destruction.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-film"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Create Impossible Realities?</h2>
          <p>Collaborate with our VFX artists to bring your ultimate vision to the screen.</p>
          <Link to="/contact" className="btn-cta">Start Your Project</Link>
        </div>
      </section>
    </>
  );
};

export default VisualEffects;
