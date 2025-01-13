import React, { useState } from 'react';
import { Mail, Phone, MapPin, User, MessageCircle, PhoneCall } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = encodeURIComponent(
      `New Contact Form Submission\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage: ${formData.message}`
    );

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/916385820982?text=${message}`, '_blank');

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-16">
      <section className="py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <PhoneCall className="w-12 h-12 text-violet-600 dark:text-violet-500 mr-4" />
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Get in Touch</h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Have questions? We're here to help!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <User className="w-6 h-6 text-violet-600 dark:text-violet-500 mr-2" />
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-6 h-6 text-violet-600 dark:text-violet-500 mr-2" />
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <MessageCircle className="w-6 h-6 text-violet-600 dark:text-violet-500 mr-2" />
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <MessageCircle className="w-6 h-6 text-violet-600 dark:text-violet-500 mr-2" />
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-gray-800 dark:text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-800 transition-colors"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-violet-600 dark:text-violet-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">hustlersfitlife@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-violet-600 dark:text-violet-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">+91 6385820982</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-violet-600 dark:text-violet-500 mr-3" />
                    <span className="text-gray-600 dark:text-gray-400">6 kk Nagar, Second main st, Guduvanchery, Chennai-603 202</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">FAQ</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What programs do you offer?</h3>
                    <p className="text-gray-600 dark:text-gray-400">We offer personalized training, nutrition coaching, and group fitness programs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">How do I get started?</h3>
                    <p className="text-gray-600 dark:text-gray-400">Simply fill out the contact form or give a call & book a free consultation to discuss your goals.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Do you offer online coaching?</h3>
                    <p className="text-gray-600 dark:text-gray-400">Yes, we provide virtual coaching services to clients worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}