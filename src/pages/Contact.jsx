import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../supabaseClient';

const Contact = ({ lang }) => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const t = {
        title: lang === 'en' ? "Contact Us" : "Nu Qunnamaa",
        subtitle: lang === 'en' ? "We are here to help you" : "Isin gargaaruuf as jirra",
        address: lang === 'en' ? "Address" : "Teessoo",
        phone: lang === 'en' ? "Phone" : "Bilbila",
        email: lang === 'en' ? "Email" : "Imeelii",
        sendMessage: lang === 'en' ? "Send a Message" : "Ergaa Ergi",
        fullName: lang === 'en' ? "Full Name" : "Maqaa Guutuu",
        subject: lang === 'en' ? "Subject" : "Mata Duree",
        message: lang === 'en' ? "Message" : "Ergaa",
        sending: lang === 'en' ? "Sending..." : "Ergaa jira...",
        send: lang === 'en' ? "Send Message" : "Ergaa Ergi",
        successMsg: lang === 'en' ? "Message sent successfully! We will get back to you soon." : "Ergaan milkaa'inaan ergameera! Dafanii deebii siif kennina.",
        errorMsg: lang === 'en' ? "Failed to send message. Please try again later." : "Ergaan ergamuu hin dandeenye. Maaloo booda irra deebi'aa yaalaa."
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([formData]);

            if (error) throw error;

            setStatus({ type: 'success', message: t.successMsg });
            setFormData({ full_name: '', email: '', subject: 'General Inquiry', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: t.errorMsg });
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="bg-brand-light min-h-screen pb-12">
            <div className="bg-brand-green text-white py-12 mb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold">{t.title}</h1>
                    <p className="mt-4 text-green-100">&ldquo;{t.subtitle}&rdquo;</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-brand-green">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{t.address}</h3>
                                <p className="text-gray-600">Kebele 01, Near Main Market<br />Haramaya Woreda, Ethiopia</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-brand-green">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{t.phone}</h3>
                                <p className="text-gray-600">+251 25 XXX XXXX</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-brand-green">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">{t.email}</h3>
                                <p className="text-gray-600">info@haramayaland.gov.et</p>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center font-bold text-gray-500 shadow-inner">
                            Interactive Map Container
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg h-fit">
                        <h2 className="text-2xl font-bold mb-6 text-brand-green">{t.sendMessage}</h2>
                        {status.message && (
                            <div className={`p-4 mb-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {status.message}
                            </div>
                        )}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.fullName}</label>
                                <input
                                    type="text"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                    placeholder={lang === 'en' ? "Your Name" : "Maqaa Keessan"}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.subject}</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                >
                                    <option>{lang === 'en' ? "General Inquiry" : "Gaafii Waliigalaa"}</option>
                                    <option>{lang === 'en' ? "Tax Question" : "Gaafii Gibiraa"}</option>
                                    <option>{lang === 'en' ? "Report Issue" : "Rakkoo Gabaasuu"}</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t.message}</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none h-32"
                                    placeholder={lang === 'en' ? "How can we help you?" : "Maal isin gargaarru?"}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-green-800 transition disabled:opacity-50">
                                {isSubmitting ? t.sending : t.send}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
