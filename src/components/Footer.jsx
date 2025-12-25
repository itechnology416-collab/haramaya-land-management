
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ lang }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/90 backdrop-blur-md text-gray-300 pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Column 1: Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/ethiopia.png"
                                alt="Flag"
                                className="w-10 h-auto rounded-sm opacity-80"
                            />
                            <h3 className="text-2xl font-bold text-brand-gold">
                                {lang === 'en' ? 'Haramaya Woreda' : 'Aanaa Haramayaa'}
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {lang === 'en'
                                ? 'Your trusted partner in sustainable land management, ensuring equitable and efficient property administration for all citizens.'
                                : 'Michuu keessan amanamamaa bulchiinsa lafa itti fufiinsa qabuu fi gibira qabeenyaa haqa qabeessa ta\'e keessatti.'}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-brand-gold pl-3">
                            {lang === 'en' ? 'Quick Links' : 'Geessituu Ariifachiiso'}
                        </h4>
                        <ul className="text-gray-400 space-y-3">
                            <li><Link to="/" className="hover:text-brand-gold transition-colors">{lang === 'en' ? 'Home' : 'Man\'ee'}</Link></li>
                            <li><Link to="/news" className="hover:text-brand-gold transition-colors">{lang === 'en' ? 'News & Announcements' : 'Oduu'}</Link></li>
                            <li><Link to="/services" className="hover:text-brand-gold transition-colors">{lang === 'en' ? 'Our Services' : 'Tajaajiloota'}</Link></li>
                            <li><Link to="/feedback" className="hover:text-brand-gold transition-colors">{lang === 'en' ? 'Submit Feedback' : 'Yaada Kennuuf'}</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-brand-gold pl-3">
                            {lang === 'en' ? 'Contact Us' : 'Nu Quunnamaa'}
                        </h4>
                        <ul className="text-gray-400 space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-green mt-1" size={18} />
                                <span>Haramaya, Ethiopia<br />Main Administration Building</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-green" size={18} />
                                <span>0900 201 691 / 0915 707 761</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-brand-green" size={18} />
                                <span>haramayaifo@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div>
                        &copy; {currentYear} Haramaya Woreda Land Management.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
