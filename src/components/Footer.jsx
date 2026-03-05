import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3>About Company</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/career">Career</Link></li>
                            <li><Link to="/outsourcing">Outsourcing</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Mobile Services</h3>
                        <ul>
                            <li><Link to="/services/android-development">Android App Development</Link></li>
                            <li><Link to="/services/android-development">Android UI-UX App Development</Link></li>
                            <li><Link to="/services/android-development">Android Game Development</Link></li>
                            <li><Link to="/services/iphone-development">iPhone App Development</Link></li>
                            <li><Link to="/services/iphone-development">iPhone UI-UX App Development</Link></li>
                            <li><Link to="/services/iphone-development">iPhone Game Development</Link></li>
                            <li><Link to="/services/iphone-development">iPad App Development</Link></li>
                            <li><Link to="/services/react-native">React Native App Development</Link></li>
                            <li><Link to="/services/android-development">Kotlin App Development</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Web Services</h3>
                        <ul>
                            <li><Link to="/services/fullstack-training">Web Apps Development</Link></li>
                            <li><Link to="/services/php-development">PHP Development</Link></li>
                            <li><Link to="/services/fullstack-training">JAVA Development</Link></li>
                            <li><Link to="/services/fullstack-training">Angular JS Development</Link></li>
                            <li><Link to="/services/nodejs-development">Node JS Development</Link></li>
                            <li><Link to="/services/reactjs-development">React JS Development</Link></li>
                            <li><Link to="/services/fullstack-training">Ruby On Rails Development</Link></li>
                            <li><Link to="/services/fullstack-training">Python Development</Link></li>
                            <li><Link to="/services/fullstack-training">Django Development</Link></li>
                            <li><Link to="/services/php-development">Laravel Development</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Data Management</h3>
                        <ul>
                            <li><Link to="/services/data-science-training">Data Migration</Link></li>
                            <li><Link to="/services/data-science-training">Data Mining</Link></li>
                            <li><Link to="/services/data-science-training">Data Visualization</Link></li>
                            <li><Link to="/services/data-science-training">Data Analytics & Reporting</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Digital Marketing</h3>
                        <ul>
                            <li><Link to="/services/seo">SEO</Link></li>
                            <li><Link to="/services/social-media-marketing">SMO</Link></li>
                            <li><Link to="/services/email-marketing">Email Marketing</Link></li>
                            <li><Link to="/services/brand-management">Brand Management</Link></li>
                            <li><Link to="/services/ppc-services">Meta Ads</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Shipping & Delivery</a></li>
                            <li><a href="#">Refund Policy</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Connect With Us</h3>
                    <div className="social-icons-footer">
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <div className="office-section">
                        <div className="office-card">
                            <img src="https://flagcdn.com/w40/in.png" alt="India Flag" />
                            <h4>Head Office</h4>
                            <p><i className="fas fa-map-marker-alt"></i> Hyderabad, Telangana, India</p>
                            <p><i className="fas fa-phone"></i> <a href="tel:+918125452828">+91 81 25 45 28 28</a></p>
                            <p><i className="fab fa-whatsapp"></i> <a href="https://wa.me/918125452828" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
                            <p><i className="fas fa-envelope"></i> <a href="mailto:asionixtechnologies@gmail.com">asionixtechnologies@gmail.com</a></p>
                            <p><i className="fas fa-clock"></i> Opening Hours: 10:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Asionix Technologies and Services Private Limited © 2024 All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
