import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';

const History = ({ lang }) => {
  // Placeholder data - ideally this comes from a database or config
  const leaders = [
    { name: "Obbo Ahmed Ali", role: "Administrator", period: "2018 - Present" },
    { name: "Adde Fatuma Hassan", role: "Deputy Admin", period: "2020 - Present" },
    { name: "Obbo Bekele Tadesse", role: "Land Head", period: "2019 - Present" }
  ];

  const milestones = [
    { year: "2024", title: "Digital Transformation Initiated" },
    { year: "2020", title: "New Woreda Office Built" },
    { year: "2010", title: "Formal Land Registration Started" },
  ];

  return (
    <div className="bg-brand-light min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-brand-green text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {lang === 'en' ? "History & Leadership" : "Seenaa fi Hoggana"}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* History Section */}
        <div className="mb-20">
          <SectionHeader
            title={lang === 'en' ? "Our History" : "Seenaa Keenya"}
            subtitle={lang === 'en' ? "Key milestones in the development of Haramaya land management." : "Taiteewwan gurguddoo guddina bulchiinsa lafa Haramayaa keessatti."}
          />

          <div className="relative border-l-4 border-brand-green/20 ml-6 md:ml-12 space-y-12 py-4">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-8"
              >
                <div className="absolute -left-[14px] top-1 bg-brand-green w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                <h3 className="text-2xl font-bold text-gray-900">{item.year}</h3>
                <p className="text-lg text-gray-600 mt-1">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Section */}
        <div>
          <SectionHeader
            title={lang === 'en' ? "Key Personnel" : "Hoggantoota Ijoo"}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center p-8 hover:shadow-card-hover border-t-4 border-brand-gold">
                  <div className="bg-brand-light w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-gray-400">
                    <User size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-brand-green font-medium mb-2">{leader.role}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 gap-1 bg-gray-50 py-1 px-3 rounded-full mx-auto w-max">
                    <Clock size={14} /> {leader.period}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default History;

