import React, { useState, useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Stats Counters State
    const [statsValue, setStatsValue] = useState({
        experience: 0,
        services: 0,
        team: 0,
        clients: 0
    });

    const statsRef = useRef(null);
    const hasAnimated = useRef(false);

    // FAQ Accordion State
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        if (activeFaq === index) {
            setActiveFaq(null);
        } else {
            setActiveFaq(index);
        }
    };

    const slides = [
        {
            title: "Customer Relationship Management System (CRM)",
            desc: "Optimizes interactions and data management to enhance customer satisfaction and loyalty.",
            img: "/assets/crm.png",
            alt: "CRM"
        },
        {
            title: "Human Resource Management System (HRMS)",
            desc: "Streamlines HR tasks like recruitment, payroll, and employee management.",
            img: "https://acstechconsulting.com/static/media/hrms_hero.e482207641021c16cb81.webp",
            alt: "HRMS"
        },
        
        {
            title: "VFX & Visual Effects Solutions",
            desc: "Transform your vision into stunning visual experiences with our cutting-edge VFX services.",
            img: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600",
            alt: "VFX"
        },
        {
            title: "Mobile App Development",
            desc: "Build powerful mobile applications for iOS and Android platforms.",
            img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600",
            alt: "Mobile App"
        },
        {
            title: "Web Development Solutions",
            desc: "Create stunning, responsive websites that drive business growth and user engagement.",
            img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
            alt: "Web Development"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, []);

    // Stats Counter Animation Logic
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !hasAnimated.current) {
                hasAnimated.current = true;

                const animateValue = (key, target, duration) => {
                    let startTimestamp = null;
                    const step = (timestamp) => {
                        if (!startTimestamp) startTimestamp = timestamp;
                        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                        setStatsValue(prev => ({
                            ...prev,
                            [key]: Math.floor(progress * target)
                        }));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                };

                animateValue('experience', 5, 2000);
                animateValue('services', 100, 2000);
                animateValue('team', 50, 2000);
                animateValue('clients', 350, 2000);
            }
        }, { threshold: 0.5 });

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, []);

    return (
        <>
            {/*  Hero Section  */}
            <section className="hero" id="home">
                <div className="carousel-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={index === currentSlide ? 'active' : ''}
                            onClick={() => goToSlide(index)}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                <div className="hero-slider">
                    {slides.map((slide, index) => (
                        <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}>
                            <div className="slide-content">
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <div style={{ zIndex: 0, flexGrow: 1, flexBasis: '400px', padding: '10px' }}>
                                        <div className="slid-text">
                                            <h3 className="slide-title">{slide.title}</h3>
                                            <p className="slide-description">{slide.desc}</p>
                                            <div className="button-group">
                                                <Link to="/contact" className="slider-btn">Get in touch</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ zIndex: 0, flexGrow: 1, flexBasis: '400px', padding: '10px' }}>
                                        <img className="slide-image" src={slide.img} alt={slide.alt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="slider-arrow prev-btn" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                <button className="slider-arrow next-btn" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
            </section>


            {/*  Services Section  */}
            <section className="services" id="services">
                <div className="container">
                    <h2 className="section-title">Explore Our Dynamic Range of Development Solutions</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/566/566288.png" alt="iOS" />
                            </div>
                            <div className="service-card-content">
                                <h3>iOS App Development</h3>
                                <p>Smart consultation, IoT, UX, AI, Bots, and other technologies are synergized to give you the best solutions.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <img src="https://cdn-icons-png.flaticon.com/512/226/226770.png" alt="Android" />
                            </div>
                            <div className="service-card-content">
                                <h3>Android App Development</h3>
                                <p>Native Android end-to-end app development for smart wearables, smartphones, and tablets with app upgrade and maintenance services.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Web App Development</h3>
                                <p>User-friendly, flexible, and cost-effective web app development solutions compatible with a wide array of operating systems and devices.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Digital Transformation</h3>
                                <p>Digital transformation is a strategic initiative that incorporates digital technology across all areas of an organization.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-globe"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Web Development</h3>
                                <p>A website with seamless flow, visual delights, and enhanced and immersive user experience.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Data Management</h3>
                                <p>Data management is the process of collecting, organizing, and using data in a secure, efficient, and cost-effective manner.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-link"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Web Portal</h3>
                                <p>Bridge the gap between your business and customers, vendors, and partners with our web portal solutions.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Digital Marketing</h3>
                                <p>Comprehensive and all-inclusive digital marketing services that transform your ideas into a reality.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-film"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>VFX Services</h3>
                                <p>Professional visual effects services including compositing, motion graphics, 3D animation, and post-production for films and digital media.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Dedicated Resources</h3>
                                <p>Every project, big or small, is important; hence, Asionix dedicates one resource per client.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-cogs"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>SAP Services</h3>
                                <p>Comprehensive SAP solutions including SAP FICO, MM, SD, ABAP, S/4HANA implementation, customization, and support services.</p>
                            </div>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="service-card-content">
                                <h3>Industry Skill Training</h3>
                                <p>Professional training in Full Stack Development, AI, ML, Data Science, Cloud Computing, Cyber Security, and other trending CS courses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  About Section  */}
            <section className="about" id="about">
                <div className="container">
                    <h2 className="section-title">Empower Your Business With Access to World-Class Products, Services & Solutions</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>We are geared to building, developing, and deploying feature-rich apps, saving our clients a lot of time, effort, and money that goes into web development exercises. Our mobile app development experts are well-versed in using the latest and advanced technologies to deliver high-performance apps for the best user experience.</p>
                        </div>
                        <div className="about-images">
                            <div className="image-grid">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300" alt="Team" />
                                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300" alt="Office" />
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300" alt="Meeting" />
                                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300" alt="Work" />
                            </div>
                            <div className="center-image">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400" alt="Center" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="how-we-work">
                        <h3>HOW WE WORK</h3>
                        <p>ASIONIX COMMITMENTS</p>
                    </div> */}
                </div>
            </section>

            {/*  Process Section  */}
            <section className="process" id="process">
                <div className="container">
                    <h2 className="section-title">How Asionix Process Assist Your Business</h2>
                    <p className="section-subtitle">Asionix brings on board an array of technical capacities with a team of talented and experienced professionals well-versed in end-to-end project solutions. Our approach is human-centric and customer-focused, employing agile project methodology.</p>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <h3>Discussion & Planning</h3>
                            <p>The first step is ideation that leads to scope definition and preparing an action plan.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">02</div>
                            <h3>Design & Documentation</h3>
                            <p>Crucial step of laying out designs for aesthetic and visual appeal by project designers.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">03</div>
                            <h3>Development & Testing</h3>
                            <p>Prototyping, coding, and developing followed by rigorous testing for quality control and assurance.</p>
                        </div>
                        <div className="process-step">
                            <div className="step-number">04</div>
                            <h3>Install & Deployment</h3>
                            <p>Release, installation of solution, and deployment of updates and patches with continued performance monitoring.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Stats Section  */}
            <section className="stats" ref={statsRef}>
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h2 className="stat-number">{statsValue.experience}</h2>
                            <span>+</span>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="stat-number">{statsValue.services}</h2>
                            <span>+</span>
                            <p>Services</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="stat-number">{statsValue.team}</h2>
                            <span>+</span>
                            <p>Team Members</p>
                        </div>
                        <div className="stat-item">
                            <h2 className="stat-number">{statsValue.clients}</h2>
                            <span>+</span>
                            <p>Clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/*  FAQ Section  */}
            <section className="faq" id="faq">
                <div className="container">
                    <h4 className="faq-label">FAQ'S</h4>
                    <h2 className="section-title">General Frequently Asked Questions</h2>
                    <p className="faq-intro">Asionix Technologies and Services Private Limited is a leading IT services company that specializes in web development, mobile app development, VFX, SEO, staffing, and data solutions. We provide innovative and customized technology solutions to help businesses optimize their operations and drive growth.</p>
                    <div className="faq-list">
                        <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFaq(0)}>
                                <i className="fas fa-info-circle"></i>
                                <span>Where can we reach you?</span>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>You can reach us at our Hyderabad office. Feel free to call us at +91 81 25 45 28 28 or email us at asionixtechnologies@gmail.com. We are available Monday to Saturday, 10:00 AM to 6:00 PM.</p>
                            </div>
                        </div>
                        <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFaq(1)}>
                                <i className="fas fa-info-circle"></i>
                                <span>How do we contact HR?</span>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>For HR related queries, please email us at asionixtechnologies@gmail.com with the subject line "HR Query" and our team will get back to you within 24-48 hours.</p>
                            </div>
                        </div>
                        <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFaq(2)}>
                                <i className="fas fa-info-circle"></i>
                                <span>How do we contact digital marketing team?</span>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>For digital marketing services and inquiries, please reach out to us via email at asionixtechnologies@gmail.com or call us at +91 81 25 45 28 28.</p>
                            </div>
                        </div>
                        <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFaq(3)}>
                                <i className="fas fa-info-circle"></i>
                                <span>How can we schedule a meeting?</span>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-answer">
                                <p>You can schedule a meeting by contacting us through our phone number or email. We offer both in-person and virtual meetings based on your preference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Clients Section  */}
            {/*  Clients Section  */}
            <div className="main_client">
                <h1 className="client-heading">Our Client</h1>
                <div className="ourclient-container">
                    <div className="ourclient">
                        {/* Original 11 Logos */}
                        <img src="https://acstechconsulting.com/static/media/2.png.78d08d97209f34f73476.webp" alt="logo-0" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/5.png.394e8bff5c7b95a13616.webp" alt="logo-1" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/6.png.171255bceebffcb5baa3.webp" alt="logo-2" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/7.png.0bc2627ceae55aafb81c.webp" alt="logo-3" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/8.png.c95892b141e0c5577706.webp" alt="logo-4" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/10.png.7ddc91faa9e378a7f079.webp" alt="logo-5" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/11.png.f3dfc411d4924170fafb.webp" alt="logo-6" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/12.png.3b362d9527518dea3914.webp" alt="logo-7" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/13.png.b83a0b9d17fb8427e1a3.webp" alt="logo-8" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/14.png.cdde1ba8b25c2f4bec51.webp" alt="logo-9" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/9.png.66353cd2d1bcb15569a9.webp" alt="logo-10" className="clientlogo" />
                        
                        {/* Duplicated 11 Logos for seamless marquee */}
                        <img src="https://acstechconsulting.com/static/media/2.png.78d08d97209f34f73476.webp" alt="logo-0-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/5.png.394e8bff5c7b95a13616.webp" alt="logo-1-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/6.png.171255bceebffcb5baa3.webp" alt="logo-2-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/7.png.0bc2627ceae55aafb81c.webp" alt="logo-3-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/8.png.c95892b141e0c5577706.webp" alt="logo-4-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/10.png.7ddc91faa9e378a7f079.webp" alt="logo-5-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/11.png.f3dfc411d4924170fafb.webp" alt="logo-6-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/12.png.3b362d9527518dea3914.webp" alt="logo-7-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/13.png.b83a0b9d17fb8427e1a3.webp" alt="logo-8-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/14.png.cdde1ba8b25c2f4bec51.webp" alt="logo-9-copy" className="clientlogo" />
                        <img src="https://acstechconsulting.com/static/media/9.png.66353cd2d1bcb15569a9.webp" alt="logo-10-copy" className="clientlogo" />
                    </div>
                </div>
            </div>

            {/*  Footer  */}
        </>
    );
};

export default Home;
