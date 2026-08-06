import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Clock, ArrowRight } from 'lucide-react';
import CoursesSection from '../components/services/CoursesSection';

export default function CoursesPage() {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono-jetbrains font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-blue-500" />
              Plateforme Pédagogique
            </div>
            <h1 className="font-space font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
              Cours de Mathématiques
            </h1>
            <p className="font-inter text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Cette section accueillera prochainement tous les cours interactifs de mathématiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Glass Card Placeholder */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-10 text-center relative overflow-hidden"
          >
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />

            <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
              <BookOpen size={30} />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-white font-mono-jetbrains text-xs font-semibold mb-4">
              Bientôt disponible • Coming Soon
            </span>

            <h2 className="font-space font-bold text-2xl text-slate-900 mb-3">
              Espace de cours interactifs & fiches numériques
            </h2>

            <p className="font-inter text-slate-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
              Nous préparons une plateforme complète d'apprentissage avec des synthèses interactives, des animations GeoGebra et des modules d'exercices autocheckés pour chaque niveau (Collège & Lycée).
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-xs flex items-center gap-2"
              >
                <span>Réserver un cours particulier en attendant</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offres de cours actuelles */}
      <CoursesSection />
    </div>
  );
}
