import React from 'react';

const About = () => {
  return (
    <>
{/*  Page Header  */}
    <section className="page-header">
        <div className="container">
            <h1>About Us</h1>
            <p>Discover who we are and what drives us</p>
        </div>
    </section>

    {/*  About Content  */}
    <section className="about-page">
        <div className="container">
            <div className="about-intro">
                <div className="about-intro-content">
                    <h2>Welcome to Asionix Technologies</h2>
                    <p>Asionix Technologies and Services Private Limited is a leading IT services company based in Hyderabad, India. We specialize in delivering innovative technology solutions that help businesses transform, grow, and succeed in the digital age.</p>
                    <p>With a team of skilled professionals and a passion for excellence, we provide comprehensive services ranging from mobile app development to VFX services, ensuring our clients receive solutions tailored to their unique needs.</p>
                </div>
                <div className="about-intro-image">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600" alt="Team Meeting" />
                </div>
            </div>

            <div className="mission-vision">
                <div className="mission-card">
                    <div className="card-icon">
                        <i className="fas fa-bullseye"></i>
                    </div>
                    <h3>Our Mission</h3>
                    <p>To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. We are committed to delivering excellence in every project we undertake.</p>
                </div>
                <div className="mission-card">
                    <div className="card-icon">
                        <i className="fas fa-eye"></i>
                    </div>
                    <h3>Our Vision</h3>
                    <p>To be a globally recognized technology partner, known for our innovation, quality, and commitment to client success. We aim to shape the future of digital transformation.</p>
                </div>
                <div className="mission-card">
                    <div className="card-icon">
                        <i className="fas fa-heart"></i>
                    </div>
                    <h3>Our Values</h3>
                    <p>Integrity, innovation, and customer focus are at the core of everything we do. We believe in building lasting relationships based on trust and mutual growth.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Footer  */}
</>
  );
};

export default About;
