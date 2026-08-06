import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section-wrapper bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono-jetbrains text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            04. Education
          </p>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            Combining French engineering excellence with deep technical specialization in AI and embedded systems.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.01, y: -3 }}
              className="glass-card p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />

              <div className="flex flex-col sm:flex-row gap-5">
                {/* School initials circle */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-space font-black text-lg shadow-lg bg-gradient-to-br ${edu.color}`}
                  >
                    {edu.shortName.slice(0, 3)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-space font-bold text-lg text-slate-900">{edu.school}</h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={13} className="text-slate-400" />
                        <span className="font-inter text-slate-400 text-sm">{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 self-start">
                      <Calendar size={12} className="text-slate-400" />
                      <span className="font-mono-jetbrains text-xs text-slate-500">{edu.date}</span>
                    </div>
                  </div>

                  <p className={`font-space font-semibold text-sm mb-4 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                    {edu.degree}
                  </p>

                  <div className="space-y-2">
                    {edu.details.map((detail, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="text-base mt-0.5">{edu.icon}</span>
                        <p className="font-inter text-slate-600 text-sm leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 glass-card p-6 text-center"
        >
          <div className="text-2xl mb-3">📜</div>
          <h4 className="font-space font-bold text-slate-700 mb-2">IEEE Publication</h4>
          <p className="font-inter text-slate-500 text-sm mb-4">
            "LoRa-Based IoT System for Smart Agricultural Monitoring" — IEEE EDiS 2024
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/10783387"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-white text-sm transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', boxShadow: '0 4px 14px rgba(59,130,246,0.3)' }}
          >
            View on IEEE Xplore ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
