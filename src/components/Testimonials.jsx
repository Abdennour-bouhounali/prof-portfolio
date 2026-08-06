import { motion } from 'framer-motion';
import { MessageSquareQuote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-wrapper bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono-jetbrains text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            07. Témoignages
          </p>
          <h2 className="section-title">Avis des élèves & Parents</h2>
          <p className="section-subtitle">
            Retours d'expérience et témoignages sur la progression et les résultats obtenus.
          </p>
        </motion.div>

        {/* Coming soon glass banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-10 text-center relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
            <MessageSquareQuote size={30} />
          </div>

          <h3 className="font-space font-bold text-xl text-slate-800 mb-3">
            Témoignages en cours de collecte
          </h3>

          <p className="font-inter text-slate-600 text-sm max-w-xl mx-auto leading-relaxed mb-6">
            Les avis certifiés d'élèves accompagnés (Collège, Lycée Spé Maths) et de leurs parents seront très prochainement publiés sur cette section.
          </p>

          <div className="flex items-center justify-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
            <span className="font-mono-jetbrains text-xs font-semibold text-slate-500 ml-2">5.0 / 5.0 (Satisfaction garantie)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
