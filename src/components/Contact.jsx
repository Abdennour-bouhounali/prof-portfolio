import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdennour.bouhounali@gmail.com',
    href: 'mailto:abdennour.bouhounali@gmail.com',
    color: 'from-blue-500 to-cyan-500',
    bg: 'bg-blue-50'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Abdennour-bouhounali',
    href: 'https://github.com/Abdennour-bouhounali',
    color: 'from-slate-600 to-slate-800',
    bg: 'bg-slate-50'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdennour-bouhounali',
    href: 'https://www.linkedin.com/in/abdennour-bouhounali-09002b236/',
    color: 'from-blue-600 to-blue-800',
    bg: 'bg-blue-50'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Toulouse, France',
    href: null,
    color: 'from-red-400 to-pink-500',
    bg: 'bg-red-50'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+33 7 58 10 30 86',
    href: 'tel:+33758103086',
    color: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-500'
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a short delay before showing success
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono-jetbrains text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            07. Contact
          </p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Open to exciting opportunities, collaborations, and conversations about AI and embedded systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — Contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-space font-bold text-xl text-slate-800 mb-6">Let's Connect</h3>

            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass-card p-4 flex items-center gap-4"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.color}`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <div className="min-w-0">
                  <p className="font-inter text-xs text-slate-400 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="font-inter text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-inter text-sm font-medium text-slate-700 truncate">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-5 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))', border: '1px solid rgba(59,130,246,0.15)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="font-space font-bold text-slate-800 text-sm">Available for opportunities</span>
              </div>
              <p className="font-inter text-slate-500 text-xs leading-relaxed">
                I'm currently open to full-time roles, research collaborations, and interesting freelance projects in AI, embedded systems, and computer vision.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-space font-bold text-xl text-slate-800 mb-6">Send a Message</h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <CheckCircle size={56} className="text-green-500 mb-4" />
                    </motion.div>
                    <h4 className="font-space font-bold text-slate-800 text-lg mb-2">Message Sent!</h4>
                    <p className="font-inter text-slate-500 text-sm mb-6">
                      Thanks for reaching out. I'll get back to you soon!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-sm"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label htmlFor="contact-name" className="block font-inter text-sm font-medium text-slate-700 mb-1.5">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 font-inter text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block font-inter text-sm font-medium text-slate-700 mb-1.5">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 font-inter text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block font-inter text-sm font-medium text-slate-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, opportunity, or just say hi..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/80 font-inter text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-none"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-70"
                      style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 4px 14px rgba(59,130,246,0.3)' }}
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
