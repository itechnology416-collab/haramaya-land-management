import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

import News from './pages/News';
import History from './pages/History';
import ContactInfo from './pages/ContactInfo';
import Feedback from './pages/Feedback';

function App() {
    const [lang, setLang] = useState('en'); // Default language: English

    return (
        <Router>
            <Layout lang={lang} setLang={setLang}>
                <Routes>
                    <Route path="/" element={<Home lang={lang} />} />
                    <Route path="/about" element={<About lang={lang} />} />
                    <Route path="/history" element={<History lang={lang} />} />
                    <Route path="/services" element={<Services lang={lang} />} />
                    <Route path="/news" element={<News lang={lang} />} />
                    <Route path="/contact" element={<Contact lang={lang} />} />
                    <Route path="/contact-info" element={<ContactInfo lang={lang} />} />
                    <Route path="/feedback" element={<Feedback lang={lang} />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
