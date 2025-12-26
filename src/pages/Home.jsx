import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Home as HomeIcon, CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';

const Home = ({ lang }) => {
    const t = {
        en: {
            heroTitle: "Haramaya Woreda Land Management",
            heroSubtitle: "Ensuring transparent, efficient, and fair land administration for all citizens.",
            ctaPrimary: "Our Services",
            ctaSecondary: "About Us",
            newsTitle: "Latest Announcements",
            servicesTitle: "Quick Services",
            s1: "Land Registration",
            s2: "Property Tax",
            s3: "Construction Permit"
        },
        or: {
            heroTitle: "Bulchiinsa Lafa Aanaa Haramayaa",
            heroSubtitle: "Bulchiinsa lafaa ifa, si'ataa fi haqa qabeessa ta'e lammiilee hundaaf mirkaneessuu.",
            ctaPrimary: "Tajaajiloota Keenya",
            ctaSecondary: "Waa'ee Keenya",
            newsTitle: "Beeksisa Haaraa",
            servicesTitle: "Tajaajiloota Ariifachiiso",
            s1: "Galmee Lafa",
            s2: "Gibira Qabeenyaa",
            s3: "Hayyama Ijaarsaa"
        }
    }[lang];

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-brand-light min-h-screen">
            {/* Hero Section */}
            <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background with overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
                >
                    <div className="absolute inset-0 bg-brand-green/80 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
                            {t.heroTitle}
                        </h1>
                        <p className="text-lg md:text-2xl mb-10 text-brand-light/90 max-w-3xl mx-auto font-light leading-relaxed">
                            {t.heroSubtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/services"
                                className="group bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center gap-2"
                            >
                                {t.ctaPrimary}
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/about"
                                className="px-8 py-4 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all text-white flex items-center justify-center"
                            >
                                {t.ctaSecondary}
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scrolldown Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-white/70 rounded-full"></div>
                    </div>
                </motion.div>
            </div>

            {/* Stats / Quick Info Strip */}
            <div className="bg-white border-b border-gray-100 relative z-20 -mt-20 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                <div className="p-4">
                    <div className="text-4xl font-bold text-brand-green mb-2">50k+</div>
                    <div className="text-gray-500 uppercase text-sm tracking-wider">Residents Served</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl font-bold text-brand-gold mb-2">15k+</div>
                    <div className="text-gray-500 uppercase text-sm tracking-wider">Land Certicates</div>
                </div>
                <div className="p-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-500 uppercase text-sm tracking-wider">Digital Transition</div>
                </div>
            </div>

            {/* Quick Services Preview */}
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={t.servicesTitle}
                    subtitle="Access our core services directly from here."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="hover:border-brand-green/50 group cursor-pointer">
                        <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-brand-green group-hover:scale-110 transition-transform">
                            <HomeIcon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{t.s1}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">Register your property and secure your legal title deed efficiently using our modern systems.</p>
                        <Link to="/services" className="inline-flex items-center text-brand-green font-semibold hover:gap-2 transition-all group-hover:underline">
                            Start Registration <ChevronRight size={16} className="ml-1" />
                        </Link>
                    </Card>

                    <Card className="hover:border-brand-gold/50 group cursor-pointer border-t-4 border-t-brand-gold">
                        <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform">
                            <FileText size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{t.s2}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">Check tax rates, calculate dues, and view deadlines for residential and commercial properties.</p>
                        <Link to="/services" className="inline-flex items-center text-yellow-600 font-semibold hover:gap-2 transition-all group-hover:underline">
                            Check Taxes <ChevronRight size={16} className="ml-1" />
                        </Link>
                    </Card>

                    <Card className="hover:border-blue-500/50 group cursor-pointer">
                        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{t.s3}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">Apply for renovation or new construction permits online. View guidelines and status.</p>
                        <Link to="/services" className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all group-hover:underline">
                            Apply Now <ChevronRight size={16} className="ml-1" />
                        </Link>
                    </Card>
                </div>
            </section>

            {/* Latest News Ticker/Section */}
            <section className="bg-white py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                {t.newsTitle}
                            </h2>
                            <p className="text-gray-500">Stay updated with the latest from the administration.</p>
                        </div>
                        <Link to="/news" className="text-brand-green font-semibold hover:underline flex items-center">
                            View all news <ArrowRight size={16} className="ml-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <span className="text-xs font-bold text-blue-600 bg-white px-2 py-1 rounded mb-2 inline-block">UPDATE</span>
                                <h4 className="font-bold text-blue-900 text-lg mb-2">Tax Collection Deadline Extended</h4>
                                <p className="text-sm text-blue-800/80">The deadline for 2017 E.C. property tax has been extended by 15 days due to public request.</p>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 group-hover:scale-150 transition-transform">
                                <FileText size={150} />
                            </div>
                        </div>
                        <div className="bg-green-50 border-l-4 border-brand-green p-6 rounded-r-xl relative overflow-hidden group">
                            <div className="relative z-10">
                                <span className="text-xs font-bold text-brand-green bg-white px-2 py-1 rounded mb-2 inline-block">NEW SYSTEM</span>
                                <h4 className="font-bold text-green-900 text-lg mb-2">New Land Registration System</h4>
                                <p className="text-sm text-green-800/80">Starting next month, digital ID will be required for all land transactions to ensure security.</p>
                            </div>
                            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 group-hover:scale-150 transition-transform">
                                <CheckCircle size={150} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
