import { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';

const Feedback = ({ lang }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error'

    const t = {
        title: lang === 'en' ? "Send Feedback" : "Yaada Keessan Nuuf Ergaa",
        subtitle: lang === 'en' ? "We value your input to serve you better." : "Tajaajila fooyyessuuf yaadni keessan murteessaadha.",
        name: lang === 'en' ? "Full Name" : "Maqaa Guutuu",
        email: lang === 'en' ? "Email Address" : "Teessoo Imeelii",
        message: lang === 'en' ? "Your Message" : "Ergaa Keessan",
        submit: lang === 'en' ? "Send Message" : "Ergi",
        sending: lang === 'en' ? "Sending..." : "Ergaa jira...",
        success: lang === 'en' ? "Thank you! Your feedback has been received." : "Galatoomaa! Yaadni keessan nu qaqqabeera.",
        error: lang === 'en' ? "Something went wrong. Please try again." : "Rakkoon uumameera. Maaloo irra deebi'aa yaalaa."
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const { error } = await supabase
                .from('feedback')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        message: formData.message,
                        created_at: new Date()
                    }
                ]);

            if (error) throw error;
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error submitting feedback:', error);
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-brand-light min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-brand-green text-white py-16 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        {t.title}
                    </motion.h1>
                    <p className="text-xl text-green-100">{t.subtitle}</p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="p-8 md:p-10 border-t-8 border-brand-green">
                    <div className="flex items-center gap-3 mb-8 text-brand-green">
                        <MessageSquare size={32} />
                        <h2 className="text-2xl font-bold">Feedback Form</h2>
                    </div>

                    {status === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg flex items-center animate-fade-in">
                            <span className="mr-2">✅</span> {t.success}
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-lg flex items-center animate-fade-in">
                            <span className="mr-2">⚠️</span> {t.error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">{t.name}</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                placeholder={lang === 'en' ? "John Doe" : "Maqaa"}
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">{t.email}</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">{t.message}</label>
                            <textarea
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all"
                                placeholder={lang === 'en' ? "How can we help you?" : "Maal isin gargaarru?"}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand-green text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span>{t.sending}</span>
                            ) : (
                                <>
                                    <Send size={20} />
                                    {t.submit}
                                </>
                            )}
                        </button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default Feedback;

