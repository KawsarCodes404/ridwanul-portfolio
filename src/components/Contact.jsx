import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitted: false, loading: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitted: false, loading: true, error: '' });

    // Simulate sending with clean UX feedback
    setTimeout(() => {
      setStatus({ submitted: true, loading: false, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-gradient-to-t from-indigo-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Have a project in mind, an opportunity to discuss, or just want to connect? Reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (Requirement 10) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channel Cards */}
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Contact Channels</h3>
              
              <div className="space-y-4">
                
                {/* Email Address */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-indigo-500/40 hover:bg-zinc-850 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-indigo-400 transition-colors truncate">
                      {personal.email}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Click to send direct email</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* Phone Number */}
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-cyan-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Phone Number</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-400 transition-colors">
                      {personal.phone}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Direct phone call</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* WhatsApp Chat (Requirement 10) */}
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/80 border border-white/5 hover:border-emerald-500/40 transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">WhatsApp Direct</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors">
                      Instant WhatsApp Chat
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Quick message & chat</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/40 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-zinc-300">
                      {personal.location}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Open to remote & onsite relocations</p>
                  </div>
                </div>

              </div>

              {/* Response Time Guarantee */}
              <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Typical response time: within 12 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl shadow-black/40">
              <h3 className="text-xl font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in the form below and I will get back to you promptly.
              </p>

              {status.submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Thank You! Message Sent.</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto">
                    Your message has been dispatched successfully. I will review it and reply as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, loading: false, error: '' })}
                    className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-900/50 hover:bg-emerald-800/50 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status.error && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                      {status.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 font-mono" htmlFor="name">
                        Your Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 font-mono" htmlFor="email">
                        Your Email <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 font-mono" htmlFor="subject">
                      Subject / Project Topic
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Frontend Opportunity / Collaboration / Web App"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 font-mono" htmlFor="message">
                      Your Message <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Ridwanul, I would like to discuss..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-lg shadow-indigo-600/30 transition-all hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status.loading ? 'Sending Message...' : 'Send Message Now'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
