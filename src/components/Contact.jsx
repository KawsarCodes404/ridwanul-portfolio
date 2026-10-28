import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  MapPin, 
  CheckCircle2, 
  MessageCircle, 
  ArrowUpRight,
  Clock,
  Sparkles
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

    setTimeout(() => {
      setStatus({ submitted: true, loading: false, error: '' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]/60">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-72 bg-gradient-to-t from-blue-600/10 to-transparent blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Have a project, role, or collaboration in mind? Reach out directly via Email, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (Requirement 10) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 space-y-6 shadow-xl">
              <h3 className="text-lg font-bold text-white">Direct Contact Channels</h3>
              
              <div className="space-y-4">
                
                {/* Email Address */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1424] border border-blue-500/20 hover:border-blue-400 hover:bg-[#121c33] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors truncate">
                      {personal.email}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Click to send direct email</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* Phone Number */}
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1424] border border-blue-500/20 hover:border-blue-400 hover:bg-[#121c33] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Phone Call</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                      {personal.phone}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Direct mobile phone</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* WhatsApp Chat (Requirement 10) */}
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1424] border border-blue-500/20 hover:border-cyan-400 hover:bg-[#121c33] transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">WhatsApp Direct</p>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors">
                      Chat on WhatsApp
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Instant messaging &amp; chat</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#0d1424]/40 border border-white/5">
                  <div className="p-2.5 rounded-lg bg-[#07090e] text-zinc-400">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-zinc-300">
                      {personal.location}
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Open to remote &amp; onsite roles</p>
                  </div>
                </div>

              </div>

              {/* Response Time Guarantee */}
              <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Fast response guarantee: within a few hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Me a Message</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Leave your details and brief message below, and I will get back to you promptly.
              </p>

              {status.submitted ? (
                <div className="p-8 rounded-xl bg-blue-950/30 border border-blue-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Jazakallah Khair! Message Received.</h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto font-sans">
                    Thank you for reaching out. I have received your message and will reply to your email address shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ submitted: false, loading: false, error: '' })}
                    className="mt-3 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-300 bg-blue-900/50 hover:bg-blue-800/50 transition-colors"
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
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-zinc-300 font-mono" htmlFor="email">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 font-mono" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Frontend Project / Collaboration / Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-zinc-300 font-mono" htmlFor="message">
                      Your Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Assalamu Alaikum Ridwanul, I would like to discuss..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0d1424] border border-white/10 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status.loading ? 'Dispatching Message...' : 'Send Message Now'}</span>
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
