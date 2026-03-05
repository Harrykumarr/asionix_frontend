import React from 'react';

import { Link } from 'react-router-dom';
const FlutterDevelopment = () => {
  return (
    <>
<section className="service-hero" style={{ backgroundImage: "linear-gradient(rgba(13, 33, 55, 0.85), rgba(26, 58, 92, 0.85)), url('https://images.unsplash.com/photo-1617042375876-a13e36732a04?auto=format&fit=crop&q=80&w=1600')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
            <h2>Flutter Development</h2>
            <h1>Beautiful Native Apps</h1>
        </div>
    </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-feather"></i> Flutter Apps</h4>
                        <p>Build beautiful, natively compiled apps for mobile, web, and desktop.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-paint-brush"></i> Custom UI</h4>
                        <p>Expressive and flexible UI with Flutter's widget library.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-bolt"></i> Fast Development</h4>
                        <p>Hot reload for instant view of changes during development.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-rocket"></i> Native Performance</h4>
                        <p>Compiles to native ARM code for optimal performance.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-code"></i> Single Codebase</h4>
                        <p>One codebase for iOS, Android, Web, and Desktop.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-tools"></i> Maintenance & Support</h4>
                        <p>Ongoing updates and technical support services.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-feather-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>Why Flutter?</h3>
                    <p>Flutter is Google's UI toolkit for building beautiful, natively compiled applications from a single codebase.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Beautiful UIs</h5>
                            <p>Create stunning, customizable UIs with Flutter's rich widget library.</p>
                        </li>
                        <li>
                            <h5>Fast Development</h5>
                            <p>Hot reload keeps your app state while injecting new code.</p>
                        </li>
                        <li>
                            <h5>Native Performance</h5>
                            <p>Flutter's widgets incorporate all critical platform differences.</p>
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
            <h2>Ready to Build with Flutter?</h2>
            <p>Let's create beautiful apps for all platforms.</p>
            <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
    </section>
</>
  );
};

export default FlutterDevelopment;
