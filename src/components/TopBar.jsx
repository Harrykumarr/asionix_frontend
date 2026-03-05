import React from 'react';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container">
                <div className="top-bar-left">
                    <a href="mailto:asionixtechnologies@gmail.com"><i className="fas fa-envelope"></i> asionixtechnologies@gmail.com</a>
                    <a href="tel:+918125452828"><i className="fas fa-phone"></i> +91 81 25 45 28 28</a>
                </div>
                <div className="top-bar-right">
                    <a href="https://wa.me/918125452828" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
