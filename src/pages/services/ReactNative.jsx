import React from 'react';
import { Link } from 'react-router-dom';

const ReactNative = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('/react-native-banner.png')",
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
              <div className="feature-box">
                <h4><i className="fas fa-handshake"></i> Flexible Engagement</h4>
                <p>We deliver desired results with our proven &amp; flexible engagement models tailored to your project needs and budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Why Choose Us Section  */}
      <section className="service-detail">
        <div className="container">
          <div className="service-detail-grid">
            <div className="detail-content">
              <h3>Why Choose Asionix for Cross-Platform App Development?</h3>
              <p>Whatever your app idea, our team possesses the platform knowledge and stack fluency to realize your vision. Asionix has remained at the forefront of mobile development, delivering solutions that meet even the most unique business needs.</p>
              <ul className="detail-list">
                <li>
                  <h5>Innovation-led &amp; Result-oriented Approach</h5>
                  <p>We enable brands to realize strategic opportunities of increasing market reach with hybrid mobile app development while keeping the focus on end-user experience &amp; conversions.</p>
                </li>
                <li>
                  <h5>On-time &amp; Reliable Delivery</h5>
                  <p>With agile methodology, we keep our clients involved at every stage. You can be confident of speedy delivery &amp; cost-effective solutions, designed to achieve goals in the timeframe and budget.</p>
                </li>
                <li>
                  <h5>Successful Track Record</h5>
                  <p>Asionix is a trusted partner for organizations globally, valued for industry expertise, distinguished clientele, quality delivery &amp; drive to go above and beyond project requirements.</p>
                </li>
                <li>
                  <h5>Experienced Cross-Platform Developers</h5>
                  <p>Our proficient developers keep abreast of tech updates ensuring the best of custom cross-platform solution development while exploring possibilities to create apps with an unbeatable UI/UX design.</p>
                </li>
              </ul>
            </div>
            <div className="detail-image">
              <div className="placeholder-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  CTA Section  */}
      <section className="service-cta">
        <div className="container">
          <h2>Ready to Build Your Cross-Platform App?</h2>
          <p>Let's discuss your project and create something amazing that works across all platforms.</p>
          <Link to="/contact" className="btn-cta">Get in Touch</Link>
        </div>
      </section>
    </>
  );
};

export default ReactNative;
