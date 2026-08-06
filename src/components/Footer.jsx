import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Abdennour-bouhounali', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/abdennour-bouhounali-09002b236/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:abdennour.bouhounali@gmail.com', label: 'Email' },
  { icon: ExternalLink, href: 'https://ieeexplore.ieee.org/document/10783387', label: 'IEEE' },
];

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xs"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-space font-bold text-white text-sm"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
              >
                AB
              </div>
              <div>
                <p className="font-space font-bold text-white">Abdennour BOUHOUNALI</p>
                <p className="font-mono-jetbrains text-slate-400 text-xs">Software Engineer</p>
              </div>
            </div>
            <p className="font-inter text-slate-400 text-sm leading-relaxed">
              Engineering intelligent software for the next generation of connected and autonomous systems.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-space font-bold text-slate-300 text-sm mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-inter text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-space font-bold text-slate-300 text-sm mb-4 uppercase tracking-widest">Specializations</h4>
            <div className="flex flex-wrap gap-2 max-w-xs">
              {['AI / ML', 'Computer Vision', 'Embedded Systems', 'IoT', 'SLAM', 'C/C++', 'Python', 'React', 'IEEE Published'].map((tech) => (
                <span
                  key={tech}
                  className="font-mono-jetbrains text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="font-inter text-slate-500 text-sm text-center">
              © 2025 Abdennour BOUHOUNALI — All rights reserved
            </p>
            <div className="flex items-center gap-2">
              <span className="font-inter text-slate-500 text-xs">Built with</span>
              <div className="flex items-center gap-1.5">
                {['React', 'Vite', 'Tailwind', 'Framer Motion'].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-jetbrains text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
