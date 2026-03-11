import React from 'react';
import { Link } from 'react-router-dom';

const VideoEditing = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1600&q=80')",
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
              Video Editing
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
                <h4><i className="fas fa-cut"></i> Professional Editing</h4>
                <p>Seamlessly cut and arrange footage to tell compelling stories.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-palette"></i> Color Grading</h4>
                <p>Enhancing visuals with expert color correction and grading processes.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-volume-up"></i> Sound Mixing</h4>
                <p>Crisp audio mastering, dialogue cleanup, and sound effect integration.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-tachometer-alt"></i> Fast Turnaround</h4>
                <p>Efficient delivery times without compromising on production quality.</p>
              </div>
            </div>
            <div className="service-image">
              <div className="placeholder-icon">
                <i className="fas fa-video"></i>
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
              <h3>Our Video Editing Process</h3>
              <p>We take raw footage and transform it into high-impact visual content ready for broadcast or the web.</p>
              <ul className="detail-list">
                <li>
                  <h5>Rough Cut &amp; Review</h5>
                  <p>Organizing clips and crafting the initial sequence for client feedback.</p>
                </li>
                <li>
                  <h5>Transitions &amp; Effects</h5>
                  <p>Adding smooth transitions and visual enhancements where needed.</p>
                </li>
                <li>
                  <h5>Audio Sync &amp; Treatment</h5>
                  <p>Ensuring perfect lip-sync and a balanced, high-quality audio mix.</p>
                </li>
                <li>
                  <h5>Final Output</h5>
                  <p>Exporting the final video in formats optimized for web, TV, and social media.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-sliders-h"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Need Professional Video Editing?</h2>
          <p>Let's make your raw footage look cinematic and professional.</p>
          <Link to="/contact" className="btn-cta">Contact Us</Link>
        </div>
      </section>
    </>
  );
};

export default VideoEditing;
