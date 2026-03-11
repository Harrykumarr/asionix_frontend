import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const [forceClose, setForceClose] = useState(false);
    const [user, setUser] = useState(null);
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            setUser(null);
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        setShowLogout(false);
        navigate('/');
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <Link to="/">
                        {/* Logo removed as requested */}
                        <span className="logo-text">ASIONIX</span>
                    </Link>
                </div>
                <ul className="nav-links" id="navLinks">
                    <li><Link to="/">Home</Link></li>
                    <li className="has-dropdown" onMouseLeave={() => setForceClose(false)}>
                        <a href="#services">Services</a>
                        <div className="mega-menu" style={forceClose ? { display: 'none' } : {}} onClick={() => setForceClose(true)}>
                            <div className="mega-menu-column">
                                <h4><span className="highlight">M</span>obile Development</h4>
                                <ul>
                                    <li><Link to="/services/android-development">Android Development</Link></li>
                                    <li><Link to="/services/iphone-development">iPhone Development</Link></li>
                                    <li><Link to="/services/cross-platform">Cross Platform</Link></li>
                                    <li><Link to="/services/react-native">React Native Development</Link></li>
                                    <li><Link to="/services/flutter-development">Flutter Development</Link></li>
                                </ul>
                            </div>
                            <div className="mega-menu-column">
                                <h4><span className="highlight">W</span>eb Development</h4>
                                <ul>
                                    <li><Link to="/services/php-development">PHP Development</Link></li>
                                    <li><Link to="/services/reactjs-development">ReactJS Development</Link></li>
                                    <li><Link to="/services/nodejs-development">NodeJS Development</Link></li>
                                    <li><Link to="/services/wordpress-development">WordPress Development</Link></li>
                                </ul>
                            </div>
                            <div className="mega-menu-column">
                                <h4><span className="highlight">D</span>igital Transformation</h4>
                                <ul>
                                    <li><Link to="/services/salesforce">Salesforce</Link></li>
                                    <li><Link to="/services/erp-framework">Inhouse ERP Framework</Link></li>
                                    <li><Link to="/services/odoo">Odoo</Link></li>
                                    <li><Link to="/services/cicd-framework">CI/CD Framework</Link></li>
                                </ul>
                            </div>
                            <div className="mega-menu-column">
                                <h4><span className="highlight">D</span>igital Marketing Services</h4>
                                <ul>
                                    <li><Link to="/services/seo">SEO</Link></li>
                                    <li><Link to="/services/social-media-marketing">SMO</Link></li>
                                    <li><Link to="/services/social-media-marketing">SMM</Link></li>
                                    <li><Link to="/services/email-marketing">Email Marketing</Link></li>
                                    <li><Link to="/services/content-writing">Content Writing</Link></li>
                                    <li><Link to="/services/ppc-services">PPC Services</Link></li>
                                    <li><Link to="/services/brand-management">Brand Management</Link></li>
                                    <li><Link to="/services/payment-gateway">Payment Gateway</Link></li>
                                </ul>
                            </div>
                            <div className="mega-menu-column">
                                <h4><span className="highlight">V</span>FX Services</h4>
                                <ul>
                                    <li><Link to="/services/3d-animation">3D Animation</Link></li>
                                    <li><Link to="/services/motion-graphics">Motion Graphics</Link></li>
                                    <li><Link to="/services/video-editing">Video Editing</Link></li>
                                    <li><Link to="/services/visual-effects">Visual Effects</Link></li>
                                    <li><Link to="/services/compositing">Compositing</Link></li>
                                </ul>
                            </div>
                            <div className="mega-menu-column">
                                <h4><span className="highlight">S</span>AP Services</h4>
                                <ul>
                                    <li><Link to="/services/sap-fico">SAP FICO</Link></li>
                                    <li><Link to="/services/sap-mm">SAP MM</Link></li>
                                    <li><Link to="/services/sap-sd">SAP SD</Link></li>
                                    <li><Link to="/services/sap-abap">SAP ABAP</Link></li>
                                    <li><Link to="/services/sap-s4hana">SAP S/4HANA</Link></li>
                                    <li><Link to="/services/sap-basis">SAP Basis</Link></li>
                                </ul>
                            </div>
                            <div className="mega-menu-column">
                                <h4><span className="highlight">I</span>ndustry Skill Training</h4>
                                <ul>
                                    <li><Link to="/services/fullstack-training">Full Stack Development</Link></li>
                                    <li><Link to="/services/ai-ml-training">Artificial Intelligence</Link></li>
                                    <li><Link to="/services/machine-learning">Machine Learning</Link></li>
                                    <li><Link to="/services/data-science-training">Data Science</Link></li>
                                    <li><Link to="/services/cloud-training">Cloud Computing</Link></li>
                                    <li><Link to="/services/cyber-security">Cyber Security</Link></li>
                                    <li><Link to="/services/devops-training">DevOps</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/outsourcing">Outsourcing</Link></li>
                    <li><a href="/#products">Our Product</a></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/career">Career</Link></li>
                    <li><a href="/#blog">Blog</a></li>
                </ul>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <Link to="/contact" className="btn-quote">Get A Quote</Link>
                    {user ? (
                        <div style={{ position: 'relative' }}>
                            <button
                                onClick={() => setShowLogout(!showLogout)}
                                className="btn-quote"
                                style={{ background: '#f0f2f5', color: '#0a1628', cursor: 'pointer', border: 'none' }}
                            >
                                Hi, {user.username}
                            </button>
                            {showLogout && (
                                <div style={{ position: 'absolute', top: '120%', right: '0', background: 'white', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', padding: '10px', zIndex: 1000, minWidth: '120px' }}>
                                    <button
                                        onClick={handleLogout}
                                        style={{ background: '#ff4d4f', color: 'white', border: 'none', cursor: 'pointer', width: '100%', padding: '8px 0', borderRadius: '4px' }}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="btn-quote" style={{ background: '#f0f2f5', color: '#0a1628' }}>Login</Link>
                    )}
                </div>
                <div className="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
