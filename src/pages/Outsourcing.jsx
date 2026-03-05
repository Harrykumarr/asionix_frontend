import React from 'react';

import { Link } from 'react-router-dom';
const Outsourcing = () => {
    return (
        <>
            {/*  Hero Section  */}
            <section className="outsourcing-hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Hire Dedicated Resource at <span>Best Price</span></h1>
                        <p>From startups to large enterprises, we deliver our customer's expectations meeting excellence of our app developers. Within a short span, Asionix has emerged as one of the top development companies in India and across the world.</p>
                    </div>
                    <div className="hero-image">
                        <i className="fas fa-laptop-code"></i>
                    </div>
                </div>
            </section>

            {/*  Benefits Section  */}
            <section className="benefits-section">
                <div className="container">
                    <h2>Additional Benefits When You Hire Dedicated Developer From <span>Asionix</span></h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-image" style={{ background: 'linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)' }}>
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Experienced Team</h3>
                            <p>We are well known for using agile methodology and have an experienced and professional team dedicated to delivering quality solutions.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-image" style={{ background: 'linear-gradient(135deg, #43a047 0%, #2e7d32 100%)' }}>
                                <i className="fas fa-headset"></i>
                            </div>
                            <h3>Tech Support</h3>
                            <p>You can contact our support team anytime. We are always ready to help you out with any technical issues or queries.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-image" style={{ background: 'linear-gradient(135deg, #f5a623 0%, #f7931e 100%)' }}>
                                <i className="fas fa-shield-alt"></i>
                            </div>
                            <h3>Security</h3>
                            <p>We ensure your app is 100% safe with data confidentiality when working with Asionix. Your data security is our priority.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Expertise Section  */}
            <section className="expertise-section">
                <div className="container">
                    <h2>Our Dedicated Developer Expertise</h2>
                    <div className="expertise-grid">
                        <div className="expertise-card">
                            <i className="fab fa-android"></i>
                            <h4>Android App Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fab fa-apple"></i>
                            <h4>iPhone App Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-mobile-alt"></i>
                            <h4>Cross-platform App Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-link"></i>
                            <h4>Blockchain Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fab fa-java"></i>
                            <h4>Java Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fab fa-microsoft"></i>
                            <h4>.Net Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fab fa-wordpress"></i>
                            <h4>WordPress Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-gamepad"></i>
                            <h4>Game App Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-code"></i>
                            <h4>Web Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-shopping-cart"></i>
                            <h4>eCommerce Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-paint-brush"></i>
                            <h4>UI/UX Designer</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fab fa-python"></i>
                            <h4>Python Developers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-film"></i>
                            <h4>VFX Artists</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-video"></i>
                            <h4>Motion Graphics Designers</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-cube"></i>
                            <h4>3D Animators</h4>
                        </div>
                        <div className="expertise-card">
                            <i className="fas fa-edit"></i>
                            <h4>Video Editors</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/*  CTA Section  */}
            <section className="cta-section">
                <div className="container">
                    <h2>Ready to Start Your Project?</h2>
                    <p>Contact us today and let's discuss how we can help you achieve your goals.</p>
                    <Link to="/contact" className="btn-cta">Get In Touch</Link>
                </div>
            </section>

            {/*  Footer  */}
        </>
    );
};

export default Outsourcing;
