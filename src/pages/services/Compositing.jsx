import React from 'react';
import { Link } from 'react-router-dom';

const Compositing = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1616423640778-28d1b53229bd?w=1600&q=80')",
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
              Compositing
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
                <h4><i className="fas fa-layer-group"></i> Multi-pass Compositing</h4>
                <p>Combining multiple CG render passes with live-action plates flawlessly.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-expand-arrows-alt"></i> Chroma Keying</h4>
                <p>Advanced green/blue screen extraction with fine edge detail preservation.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-eye-dropper"></i> Rotoscoping</h4>
                <p>Frame-by-frame isolation of subjects for compositing and color adjustments.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-vector-square"></i> 2D Tracking</h4>
                <p>Pinpoint 2D tracking for screen replacements and planar elements.</p>
              </div>
            </div>
            <div className="service-image">
              <div className="placeholder-icon">
                <i className="fas fa-images"></i>
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
              <h3>Our Compositing Expertise</h3>
              <p>Compositing is the final stage where all visual elements are seamlessly stitched together.</p>
              <ul className="detail-list">
                <li>
                  <h5>Color Matching</h5>
                  <p>Ensuring added elements match the lighting, grain, and color space of the original plate.</p>
                </li>
                <li>
                  <h5>Atmospheric Integration</h5>
                  <p>Adding haze, lens flares, and interactive light to anchor CG objects in reality.</p>
                </li>
                <li>
                  <h5>Deep Compositing</h5>
                  <p>Using depth data to place objects correctly into complex volumes like smoke or fog.</p>
                </li>
                <li>
                  <h5>Quality Control</h5>
                  <p>Rigorous final checks to ensure absolutely no artifacts or visible seams.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-layer-group"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Need Flawless Compositing?</h2>
          <p>Bring all your creative pieces together in perfect harmony.</p>
          <Link to="/contact" className="btn-cta">Request a Quote</Link>
        </div>
      </section>
    </>
  );
};

export default Compositing;
