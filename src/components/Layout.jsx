import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, lang, setLang }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar lang={lang} setLang={setLang} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer lang={lang} />
        </div>
    );
};

export default Layout;
