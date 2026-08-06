import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { projects, domainGradients, domainIcons, domainColors } from '../data/projects';

const domains = ['All', 'Computer Vision', 'Artificial Intelligence', 'Embedded Systems', 'IoT', 'Web Development', 'Desktop Apps'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } }
};

// ─── Project image carousel ─────────────────────────────────────────────────
function ProjectImage({ domain, images }) {
  const [idx, setIdx] = useState(0);
  const hasImages = images && images.length > 0;

  if (!hasImages) {
    // Gradient placeholder
    const gradient = domainGradients[domain] || 'from-slate-500 to-gray-500';
    const icon = domainIcons[domain] || '💻';
    return (
      <div className={`w-full h-44 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center relative overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-white/10" />
        <span className="text-5xl mb-2 relative z-10">{icon}</span>
        <span className="font-mono-jetbrains text-white/80 text-xs font-medium relative z-10">{domain}</span>
      </div>
    );
  }

  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); };

  return (
    <div className="relative w-full h-44 overflow-hidden bg-slate-900 group">
      {/* Image */}
      <img
        key={idx}
        src={images[idx]}
        alt={`Screenshot ${idx + 1}`}
        className="w-full h-full object-cover transition-opacity duration-300"
        onError={(e) => { e.target.style.display = 'none'; }}
      />

      {/* Prev / Next arrows — visible on hover when more than 1 image */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            aria-label="Previous image"
          >
            <ChevronLeft size={15} />
          </button>
          <button
            onClick={next}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            aria-label="Next image"
          >
            <ChevronRight size={15} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setIdx(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === idx ? 'bg-white w-3' : 'bg-white/50'}`}
            />
          ))}
        </div>
      )}

      {/* Image counter badge */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/50 text-white text-xs font-mono-jetbrains">
          {idx + 1}/{images.length}
        </div>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

export default function Projects() {
  const [activeDomain, setActiveDomain] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeDomain === 'All'
    ? projects
    : projects.filter((p) => p.domain === activeDomain);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

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
            05. Projects
          </p>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            From AI vision systems to IoT deployments and full-stack platforms — engineering that ships.
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
              onClick={() => { setActiveDomain(domain); setShowAll(false); }}
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
              {domain === 'All' ? '✦ All' : (domainIcons[domain] + ' ' + domain)}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayed.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card overflow-hidden flex flex-col"
              >
                {/* Card image / carousel */}
                <ProjectImage domain={project.domain} images={project.images} />

                {/* Card content */}
                <div className="flex-1 p-5 flex flex-col">
                  {/* Domain + Featured + Award badges */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`font-inter text-xs font-semibold px-2.5 py-1 rounded-full ${domainColors[project.domain]}`}>
                      {project.domain}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 font-inter text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 border border-amber-100">
                        <Star size={10} fill="currentColor" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="font-space font-bold text-slate-900 text-base mb-2 leading-tight">
                    {project.name}
                  </h3>

                  <p className="font-inter text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono-jetbrains text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Award badge */}
                  {project.award && (
                    <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 border border-amber-100">
                      <span className="text-sm">🏆</span>
                      <span className="font-inter text-xs font-semibold text-amber-700">{project.award}</span>
                    </div>
                  )}

                  {/* Links */}
                  {(project.github || project.demo) && (
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors"
                        >
                          <Github size={14} />
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-blue-500 hover:text-blue-700 text-xs font-medium transition-colors"
                        >
                          <ExternalLink size={14} />
                          View Publication
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more */}
        {!showAll && filtered.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
            >
              Show All Projects ({filtered.length - 6} more)
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
