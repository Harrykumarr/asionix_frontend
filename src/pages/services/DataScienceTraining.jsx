import React from 'react';

import { Link } from 'react-router-dom';
const DataScienceTraining = () => {
  return (
    <>
      {/*  Hero Banner  */}
      <section style={{
        backgroundImage: "linear-gradient(rgba(5, 10, 20, 0.72), rgba(10, 20, 35, 0.76)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80')",
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
              Data Science Training
            </span>
          </h1>
        </div>
      </section>

    <section className="service-main">
        <div className="container">
            <div className="service-main-grid">
                <div className="service-features-grid">
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-line"></i> Data Analytics</h4>
                        <p>Exploratory data analysis and statistical methods.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fab fa-python"></i> Python Programming</h4>
                        <p>Python with NumPy, Pandas, and Scikit-learn.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-chart-pie"></i> Data Visualization</h4>
                        <p>Matplotlib, Seaborn, Plotly, and Tableau.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-database"></i> SQL & Databases</h4>
                        <p>SQL querying and database management.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-brain"></i> Machine Learning</h4>
                        <p>Predictive modeling and ML algorithms.</p>
                    </div>
                    <div className="feature-box">
                        <h4><i className="fas fa-briefcase"></i> Career Support</h4>
                        <p>Resume building and interview preparation.</p>
                    </div>
                </div>
                <div className="service-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-chart-bar"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-detail">
        <div className="container">
            <div className="service-detail-grid">
                <div className="detail-content">
                    <h3>Training Program</h3>
                    <p>Industry-focused data science training with hands-on projects.</p>
                    <ul className="detail-list">
                        <li>
                            <h5>Statistics & Mathematics</h5>
                            <p>Probability, statistics, and linear algebra.</p>
                        </li>
                        <li>
                            <h5>Data Wrangling</h5>
                            <p>Data cleaning, transformation, and feature engineering.</p>
                        </li>
                        <li>
                            <h5>Capstone Projects</h5>
                            <p>End-to-end data science projects for portfolio.</p>
                        </li>
                    </ul>
                </div>
                <div className="detail-image">
                    <div className="placeholder-icon">
                        <i className="fas fa-graduation-cap"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="service-cta">
        <div className="container">
            <h2>Ready to Become a Data Scientist?</h2>
            <p>Join our Data Science training program today.</p>
            <Link to="/contact" className="btn-cta">Enroll Now</Link>
        </div>
    </section>
</>
  );
};

export default DataScienceTraining;
