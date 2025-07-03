import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-300">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a startup looking to build your MVP or an established 
                company needing to scale your backend infrastructure, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-600 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">mohammad.reza.ebadollah@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-600 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-300">+98 912 345 6789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-600 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-300">Tehran, Iran</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-8">
              <a
                href="https://github.com/mohammadrezaebadollah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/mohammadrezaebadollah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mohammad.reza.ebadollah@example.com"
                className="p-3 bg-slate-700 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
          <p className="text-gray-400">
            © 2024 Mohammad Reza Ebadollah. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}