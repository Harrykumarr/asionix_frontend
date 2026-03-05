import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <TopBar />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {/* WhatsApp Float Button */}
            <a href="https://wa.me/918125452828" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
        </>
    );
};

export default Layout;
