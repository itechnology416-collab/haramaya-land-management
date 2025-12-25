import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Home, CheckCircle, Shield, Briefcase, Ruler } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

const Services = ({ lang }) => {
    const services = [
        {
            icon: <Home size={32} />,
            title: { en: "Land Registration", or: "Galmee Lafa" },
            desc: { en: "Secure your property rights with our efficient digital land registration system.", or: "Mirga qabiyyee keessanii sirna galmee lafaa dijitaalaa si'ataa ta'een mirkaneeffadhaa." },
            color: "text-brand-green",
            bg: "bg-green-100"
        },
        {
            icon: <FileText size={32} />,
            title: { en: "Property Tax", or: "Gibira Qabeenyaa" },
            desc: { en: "Calculate and pay your property taxes easily and transparently.", or: "Gibira qabeenyaa keessanii salphaatti fi ifaan shallaggadhaa fi kaffalaa." },
            color: "text-brand-gold",
            bg: "bg-yellow-100"
        },
        {
            icon: <CheckCircle size={32} />,
            title: { en: "Construction Permits", or: "Hayyama Ijaarsaa" },
            desc: { en: "Apply for and track building permits for new constructions or renovations.", or: "Hayyama ijaarsa haaraa ykn haaromsuuf iyyadhaa fi hordofaa." },
            color: "text-blue-600",
            bg: "bg-blue-100"
        },
        {
            icon: <Ruler size={32} />,
            title: { en: "Land Surveying", or: "Safara Lafa" },
            desc: { en: "Professional land surveying services to determine precise boundaries.", or: "Tajaajila safara lafaa ogummaa qabuun daangaa sirrii murteessuu." },
            color: "text-purple-600",
            bg: "bg-purple-100"
        },
        {
            icon: <Shield size={32} />,
            title: { en: "Dispute Resolution", or: "Furmata Walitti Bu'iinsa" },
            desc: { en: "Mediation and arbitration services for land-related disputes.", or: "Tajaajila araaraa fi jaarsummaa walitti bu'iinsa lafaan walqabatuuf." },
            color: "text-red-600",
            bg: "bg-red-100"
        },
        {
            icon: <Briefcase size={32} />,
            title: { en: "Investment Land", or: "Lafa Investimentii" },
            desc: { en: "Land allocation and management for agricultural and industrial investment.", or: "Kenniinsa fi bulchiinsa lafaa investimentii qonnaa fi industiriif." },
            color: "text-cyan-600",
            bg: "bg-cyan-100"
        }
    ];

    const t = {
        title: lang === 'en' ? "Our Services" : "Tajaajiloota Keenya",
        subtitle: lang === 'en' ? "Efficient, Transparent, and Citizen-Centric Services" : "Tajaajiloota Si'ataa, Ifa fi Lammii Giddu-galeessa Godhate"
    };

    return (
        <div className="bg-brand-light min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-brand-green text-white py-20 relative overflow-hidden mb-12">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
                    >
                        {t.title}
                    </motion.h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={lang === 'en' ? "What We Offer" : "Waan Nuti Dhiyeessinu"}
                    subtitle={lang === 'en' ? "Comprehensive land management solutions for the community." : "Furmaata bulchiinsa lafaa guutuu hawaasaaf."}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full hover:shadow-card-hover group cursor-pointer transition-all duration-300">
                                <div className={`${service.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-brand-green transition-colors">
                                    {lang === 'en' ? service.title.en : service.title.or}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {lang === 'en' ? service.desc.en : service.desc.or}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;

