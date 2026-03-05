import React from 'react';

import { Link } from 'react-router-dom';
const VfxAnimation = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>VFX & Animation</h2>
            <h1>Visual Effects & Motion Graphics</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-film"></i> VFX Production</h4>
                        <p>High-quality visual effects for films and commercials.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-cube"></i> 3D Animation</h4>
                        <p>Character animation, product visualization, and more.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-play-circle"></i> Motion Graphics</h4>
                        <p>Dynamic motion graphics for videos and presentations.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-magic"></i> Compositing</h4>
                        <p>Seamless integration of live-action and CGI elements.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-video"></i> Video Editing</h4>
                        <p>Professional video editing and post-production.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-palette"></i> Color Grading</h4>
                        <p>Professional color correction and grading services.</p>
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

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>Creative Services</h3>
                    <p>We bring your creative vision to life with cutting-edge technology.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Film & TV VFX</h5>
                            <p>Blockbuster-quality effects for entertainment industry.</p>
                        </li>
                        <li>
                            <h5>Advertising & Commercials</h5>
                            <p>Eye-catching visuals for marketing campaigns.</p>
                        </li>
                        <li>
                            <h5>Corporate Videos</h5>
                            <p>Professional videos for training and presentations.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-camera-retro"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Create Something Amazing?</h2>
            <p>Let's bring your creative vision to life.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default VfxAnimation;
