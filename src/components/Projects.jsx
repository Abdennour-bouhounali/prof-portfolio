import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, domainGradients, domainIcons, domainColors } from '../data/projects';

const domains = ['All', 'Soutien Hebdo', 'Prépa Examens', 'Stages Vacances', 'Cours en Ligne', 'Remise à Niveau'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
};

function ServiceHeader({ domain }) {
  const gradient = domainGradients[domain] || 'from-blue-600 to-indigo-500';
  const icon = domainIcons[domain] || '📘';
  return (
    <div className={`w-full h-36 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      <span className="text-5xl mb-2 relative z-10">{icon}</span>
      <span className="font-mono-jetbrains text-white/90 text-xs font-semibold tracking-wider uppercase relative z-10">{domain}</span>
    </div>
  );
}

export default function Projects() {
  const [activeDomain, setActiveDomain] = useState('All');

  const filtered = activeDomain === 'All'
    ? projects
    : projects.filter((p) => p.domain === activeDomain);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono-jetbrains text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            03. Offres & Accompagnements
          </p>
          <h2 className="section-title">Mes accompagnements</h2>
          <p className="section-subtitle">
            Des formules adaptées aux besoins de votre enfant : suivi hebdomadaire, préparation aux examens ou stages de vacances.
          </p>
        </motion.div>

        {/* Domain filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`px-4 py-2 rounded-full font-inter text-sm font-medium transition-all duration-300 ${
                activeDomain === domain
                  ? 'text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-blue-600'
              }`}
              style={activeDomain === domain ? {
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                boxShadow: '0 4px 14px rgba(59,130,246,0.3)'
              } : {}}
            >
              {domain === 'All' ? '✦ Tous les accompagnements' : ((domainIcons[domain] || '📘') + ' ' + domain)}
            </button>
          ))}
        </motion.div>

        {/* Services grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card overflow-hidden flex flex-col"
              >
                {/* Header gradient banner */}
                <ServiceHeader domain={service.domain} />

                {/* Card content */}
                <div className="flex-1 p-6 flex flex-col">
                  {/* Category badge */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`font-inter text-xs font-semibold px-2.5 py-1 rounded-full ${domainColors[service.domain]}`}>
                      {service.domain}
                    </span>
                    {service.featured && (
                      <span className="flex items-center gap-1 font-inter text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                        <Star size={10} fill="currentColor" />
                        Recommandé
                      </span>
                    )}
                  </div>

                  <h3 className="font-space font-bold text-slate-900 text-lg mb-2 leading-snug">
                    {service.name}
                  </h3>

                  <p className="font-inter text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>

                  {/* Tech chips / Key tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tech.map((t) => (
                      <span
                        key={t}
                        className="font-inter text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Award badge */}
                  {service.award && (
                    <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 border border-amber-100">
                      <span className="text-sm">🏆</span>
                      <span className="font-inter text-xs font-semibold text-amber-700">{service.award}</span>
                    </div>
                  )}

                  {/* Action button */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      onClick={scrollToContact}
                      className="w-full btn-secondary text-xs flex items-center justify-center gap-2 py-2.5"
                    >
                      <Calendar size={14} className="text-blue-500" />
                      Demander des informations / Réverser
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
