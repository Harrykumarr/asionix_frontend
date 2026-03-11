import React from 'react';
import { Link } from 'react-router-dom';

const ReactNative = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=1600&q=80')",
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
              React Native Development
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
                <h4><i className="fas fa-comments"></i> Consulting</h4>
                <p>From design to rollout, we analyze requirements to create a strategic plan for your corporate objectives.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-layer-group"></i> Application Development</h4>
                <p>Translating business needs into efficient mobile apps with seamless integration and intuitive design.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fab fa-apple"></i> <i className="fab fa-android"></i> iOS & Android Apps</h4>
                <p>Build native apps for both platforms simultaneously while achieving an exceptional UI.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-exchange-alt"></i> Integration & Migration</h4>
                <p>Migrate apps from other platforms seamlessly without losing any data or custom features.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-paint-brush"></i> UI/UX Design</h4>
                <p>Employing the entire React Native library for the most engaging and creative user experiences.</p>
              </div>
              <div className="feature-box">
                <h4><i className="fas fa-headset"></i> Support & Maintenance</h4>
                <p>Post-launch support ensuring bugs are resolved and your product functions as expected.</p>
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

      {/*  Details Section  */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Case Study: Air Quality Monitoring Gateway</h3>
              <p>Our client strived to solve the air pollution crisis using a smart band that allowed users to track the air quality in the surrounding environment. They wanted a cloud-based mobile solution to facilitate wearable device manufacturers and app developers with these features on a larger scale. We suggested:</p>
              <ul className="detail-list">
                <li>
                  <h5>Custom IoT Solution</h5>
                  <p>A custom solution using Avnet’s IoTConnect® platform.</p>
                </li>
                <li>
                  <h5>Mobile Gateway</h5>
                  <p>A reliable React Native mobile app acting as a real-time gateway.</p>
                </li>
                <li>
                  <h5>User Dashboard</h5>
                  <p>A comprehensive user dashboard that collects and visualizes real-time data.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-cloud"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Build Your React Native App?</h2>
          <p>Let's create powerful cross-platform applications to scale your business.</p>
          <Link to="/contact" className="btn-cta">Contact Our Experts</Link>
        </div>
      </section>
    </>
  );
};

export default ReactNative;
