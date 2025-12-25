import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

const About = ({ lang }) => {
  const t = {
    en: {
      title: "Mission & Vision",
      subtitle: "Our core values and strategic direction for land management.",
      missionTitle: "Our Mission",
      missionDesc: "To ensure a transparent, fair, and efficient land administration system that promotes sustainable development, secures land rights, and fosters economic growth for the community of Haramaya Woreda.",
      visionTitle: "Our Vision",
      visionDesc: "To see a model woreda where every citizen enjoys secure land tenure, efficient land use, and a minimized land-related dispute environment by 2030."
    },
    or: {
      title: "Ergamaa fi Mul'ata",
      subtitle: "Duudhaalee bu'uuraa fi kallattii tarsiimoo keenya.",
      missionTitle: "Ergama Keenya",
      missionDesc: "Sirna bulchiinsa lafaa ifa, haqa qabeessa fi si'ataa ta'e mirkaneessuun misooma itti fufiinsa qabu jajjabeessuu, mirga abbaa qabiyyummaa lafaa kabachiisuu fi guddina dinagdee hawaasa Aanaa Haramayaaf uumuu.",
      visionTitle: "Mul'ata Keenya",
      visionDesc: "Bara 2030tti aanaa fakkeenya ta'e kan lammiin hundi wabii qabiyyee lafaa qabu, itti fayyadama lafaa bu'a qabeessa ta'e fi walitti bu'iinsi lafaan walqabatu xiqqaa ta'e keessatti arguudha."
    }
  }[lang];

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Section */}
      <div className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-green-100 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-8 border-brand-green bg-gradient-to-br from-white to-green-50/50">
              <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-brand-green">
                <Target size={32} />
              </div>
              <h2 className="text-2xl font-bold text-brand-green mb-4">{t.missionTitle}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.missionDesc}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-l-8 border-brand-gold bg-gradient-to-br from-white to-yellow-50/50">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-yellow-700">
                <Eye size={32} />
              </div>
              <h2 className="text-2xl font-bold text-brand-gold mb-4">{t.visionTitle}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.visionDesc}
              </p>
            </Card>
          </motion.div>
        </div>

        <div className="mt-20">
          <SectionHeader title={lang === 'en' ? "Administration Structure" : "Caaseffama Bulchiinsaa"} />
          <div className="flex justify-center mt-10">
            {/* Placeholder for structure chart */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 max-w-3xl w-full text-center">
              <Users size={64} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 italic">Organizational Structure Chart to be added here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

