import React from 'react';
import { Link } from 'react-router-dom';

const CrossPlatform = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600&q=80')",
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
              Cross-Platform App Development
            </span>
          </h1>
        </div>
      </section>

      {/*  Intro Section  */}
      <section className="service-main">
        <div className="container">
          <div className="service-main-grid">
            <div className="service-features-grid" style={{ gridColumn: "1 / -1" }}>
              <div className="feature-box" style={{ gridColumn: "1 / -1", background: "rgba(243, 156, 18, 0.03)", borderLeft: "4px solid #f39c12" }}>
                <h4><i className="fas fa-rocket"></i> Drive Innovation with Cross-Platform Development</h4>
                <p>Leverage the power of cross-platform application development to address new-age business opportunities. We help businesses of all types — from startups and small companies to large enterprises — to get the most out of their apps with cross-platform mobile app development services.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-code"></i> Modern Tech Stack</h4>
                <p>Our team makes use of technologies like HTML5, CSS3, and JavaScript to deliver mobile applications in line with business requirements.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fab fa-react"></i> Powerful Frameworks</h4>
                <p>We utilize adaptable cross-platform frameworks such as Flutter, React Native &amp; Xamarin to design and develop native apps offering rich user experience across all devices.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-mobile-alt"></i> Multi-Device Support</h4>
                <p>Build apps that deliver the same premium experience across smartphones, tablets &amp; desktops with a single codebase.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-tasks"></i> Agile Methodology</h4>
                <p>We deeply understand your requirements and apply agile development methodology to develop apps that address the needs of your end-users and business vertical.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-sync-alt"></i> App Modernization</h4>
                <p>Whether you need full-fledged multi-platform development or just assistance with app modernization, we provide the most relevant fit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Ready to Target Multiple Platforms?</h2>
          <p>Get a robust cross-platform app to reach wider audiences seamlessly.</p>
          <br/>
          <Link to="/contact" className="btn-cta">Start Your Project</Link>
        </div>
      </section>
    </>
  );
};

export default CrossPlatform;
