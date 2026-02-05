import React, { useState } from 'react';
import * as FM from "framer-motion";
import { Mail, Send, MapPin, MessageSquare } from 'lucide-react';

const { motion } = FM;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending email (We will add Real EmailJS later)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 container mx-auto">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-4"
          >
            Level Up Your <span className="text-purple-500">Project</span>
          </motion.h1>
          <p className="text-gray-400 text-lg">
            Have a game idea? Want to hire us? Just saying hi? Drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#1b1e24] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-lg text-purple-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email Us</h4>
                    <p className="text-gray-400">hello@crazyclone.com</p>
                    <p className="text-gray-400">support@crazyclone.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-lg text-purple-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">HQ Location</h4>
                    <p className="text-gray-400">123 Gaming Street</p>
                    <p className="text-gray-400">Metaverse City, MC 80085</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#1b1e24] p-8 rounded-2xl border border-gray-800">
              <div>
                <label className="block text-gray-400 mb-2 text-sm font-bold uppercase">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0f1014] border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Player One"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm font-bold uppercase">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0f1014] border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="player@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2 text-sm font-bold uppercase">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#0f1014] border border-gray-700 rounded-lg p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] ${
                  status === 'success' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white'
                }`}
              >
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : status === 'success' ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;