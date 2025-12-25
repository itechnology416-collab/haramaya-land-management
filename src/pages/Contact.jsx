import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { supabase } from '../supabaseClient';

const Contact = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

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

            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
            setFormData({ full_name: '', email: '', subject: 'General Inquiry', message: '' });
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="bg-brand-light min-h-screen pb-12">
            <div className="bg-brand-green text-white py-12 mb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-green-100">"We are here to help you"</p>
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
                                <h3 className="text-lg font-bold">Address</h3>
                                <p className="text-gray-600">Kebele 01, Near Main Market<br />Haramaya Woreda, Ethiopia</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-brand-green">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Phone</h3>
                                <p className="text-gray-600">+251 25 XXX XXXX</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-full text-brand-green">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Email</h3>
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
                        <h2 className="text-2xl font-bold mb-6 text-brand-green">Send a Message</h2>
                        {status.message && (
                            <div className={`p-4 mb-4 rounded-lg ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {status.message}
                            </div>
                        )}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="full_name"
                                    value={formData.full_name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Tax Question</option>
                                    <option>Report Issue</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none h-32"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-green-800 transition disabled:opacity-50">
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
