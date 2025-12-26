import { motion } from 'framer-motion';
import { Bell, Calendar, Image, Info } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { supabase } from '../supabaseClient';

const News = ({ lang }) => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const t = {
        title: lang === 'en' ? "News & Gallery" : "Oduu fi Galaarii",
        subtitle: lang === 'en' ? "Stay informed with the latest developments, announcements, and events in Haramaya Woreda." : "Guddina, beeksisa fi taateewwan haaraa Aanaa Haramayaa keessatti mul'atan beekaa.",
        latestUpdates: lang === 'en' ? "Latest Updates" : "Fooyya'iinsa Haaraa",
        updatesSubtitle: lang === 'en' ? "Official announcements and community news" : "Beeksisa ofiisaa fi oduu hawaasaa",
        photoGallery: lang === 'en' ? "Photo Gallery" : "Galaarii Suuraa",
        gallerySubtitle: lang === 'en' ? "Glimpses of our community and projects" : "Mul'ata hawaasa fi pirojektoota keenyaa",
        noNews: lang === 'en' ? "No news updates available at the moment." : "Yeroo ammaa kana fooyya'iinsi oduu hin jiru.",
        readMore: lang === 'en' ? "Read more →" : "Dabalata dubbisaa →",
        errorMsg: lang === 'en' ? "Failed to load news." : "Oduu fe'uun hin dandeenye."
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const { data, error } = await supabase
                    .from('news')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                setNewsItems(data);
            } catch (err) {
                console.error('Error fetching news:', err);
                setError(t.errorMsg);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <div className="bg-brand-light min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-brand-green to-brand-dark text-white py-20 mb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4 tracking-tight"
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-green-100 max-w-2xl mx-auto font-light"
                    >
                        {t.subtitle}
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* News Section */}
                <SectionHeader
                    title={t.latestUpdates}
                    subtitle={t.updatesSubtitle}
                />

                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                        ))}
                    </div>
                )}

                {error && <div className="text-center py-8 text-red-500 bg-red-50 rounded-lg border border-red-100">{error}</div>}

                {!loading && !error && newsItems.length === 0 && (
                    <div className="text-center py-12 text-gray-500 italic">{t.noNews}</div>
                )}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                >
                    {newsItems.map((item) => (
                        <motion.div key={item.id} variants={itemVariants}>
                            <Card className="h-full flex flex-col hover:border-brand-green/30">
                                <div className="flex justify-between items-start mb-4">
                                    <Badge variant={item.type === 'Alert' ? 'danger' : 'info'}>
                                        {item.type === 'Alert' ? <Bell className="w-3 h-3 mr-1" /> : <Info className="w-3 h-3 mr-1" />}
                                        {item.type}
                                    </Badge>
                                    <span className="text-xs text-gray-400 font-mono flex items-center">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2">{item.title}</h3>
                                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{item.content}</p>

                                <button className="text-brand-green font-medium text-sm hover:underline mt-auto self-start">
                                    {t.readMore}
                                </button>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Gallery Section */}
                <SectionHeader
                    title={t.photoGallery}
                    subtitle={t.gallerySubtitle}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Gallery Items with Placeholder Images */}
                    {[
                        { title: "New Office Complex", color: "bg-blue-100" },
                        { title: "Community Forum", color: "bg-green-100" },
                        { title: "Road Infrastructure", color: "bg-orange-100" },
                        { title: "Agricultural Workshop", color: "bg-yellow-100" },
                        { title: "Youth Sports Event", color: "bg-purple-100" },
                        { title: "Water Project", color: "bg-cyan-100" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="group relative overflow-hidden rounded-xl shadow-md cursor-pointer aspect-video"
                        >
                            <div className={`w-full h-full ${item.color} flex items-center justify-center`}>
                                <Image className="w-12 h-12 text-gray-400 opacity-50" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <span className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default News;
