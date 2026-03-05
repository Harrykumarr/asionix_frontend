import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [attachment, setAttachment] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'text/plain',
                'application/vnd.ms-excel',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'application/vnd.ms-powerpoint',
                'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'application/pdf'
            ];
            const isValidExt = file.name.match(/\.(doc|docx|txt|xls|xlsx|ppt|pptx|pdf)$/i);
            
            if (allowedTypes.includes(file.type) || isValidExt) {
                if (file.size > 5 * 1024 * 1024) {
                    alert('File size should be less than 5MB');
                    e.target.value = null;
                    return;
                }
                const reader = new FileReader();
                reader.onloadend = () => {
                    setAttachment({
                        name: file.name,
                        data: reader.result,
                        type: file.type
                    });
                };
                reader.readAsDataURL(file);
            } else {
                alert('Please upload a valid file type (Word, TXT, Excel, PPT, PDF)');
                e.target.value = null;
            }
        } else {
            setAttachment(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = { ...formData };
            if (attachment) {
                payload.attachment = attachment;
            }

            const response = await fetch('https://asionixwebsitebackend-production.up.railway.app/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await response.json();

            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: ''
                });
                setAttachment(null);
                const fileInput = document.getElementById('attachment');
                if (fileInput) fileInput.value = '';
            } else {
                alert('Error: ' + (result.error || 'Failed to send message'));
            }
        } catch (err) {
            alert('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/*  Page Header  */}
            <section className="page-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Get in touch with us today</p>
                </div>
            </section>

            {/*  Contact Section  */}
            <section className="contact-page">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="contact-info-section">
                            <h2>Let's Start a Conversation</h2>
                            <p>Have a project in mind? We would love to hear from you. Send us a message and we will respond as soon as possible.</p>

                            <div className="contact-details">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Our Location</h4>
                                        <p>Hyderabad, Telangana, India</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Phone Number</h4>
                                        <p><a href="tel:+918125452828">+91 81 25 45 28 28</a></p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Email Address</h4>
                                        <p><a href="mailto:asionixtechnologies@gmail.com">asionixtechnologies@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>WhatsApp</h4>
                                        <p><a href="https://wa.me/918125452828">Chat with us</a></p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h4>Working Hours</h4>
                                        <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-section">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <h3>Send Us a Message</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Service Interested In</label>
                                    <select id="service" name="service" value={formData.service} onChange={handleChange}>
                                        <option value="">Select a service</option>
                                        <option value="ios-development">iOS App Development</option>
                                        <option value="android-development">Android App Development</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="vfx-services">VFX Services</option>
                                        <option value="digital-marketing">Digital Marketing</option>
                                        <option value="data-management">Data Management</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="attachment">Attach Requirement File (Word, TXT, Excel, PPT, PDF)</label>
                                    <input type="file" id="attachment" name="attachment" accept=".doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx,.pdf" onChange={handleFileChange} />
                                </div>
                                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/*  Footer  */}
        </>
    );
};

export default Contact;
