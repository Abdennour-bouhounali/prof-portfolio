import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, FolderSearch, Calendar, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'college', label: 'Collège', path: '/lessons/college/' },
  { id: 'lycee', label: 'Lycée', path: '/lessons/lycee/' },
  { id: 'brevet', label: 'Préparation Brevet', path: '/lessons/brevet/' },
  { id: 'bac', label: 'Préparation Bac', path: '/lessons/bac/' }
];

export default function CoursesPage() {
  return (
    <div className="pt-16 min-h-[85vh] flex flex-col justify-between">
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
              Index des Cours HTML
            </div>
            <h1 className="font-space font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
              Cours de Mathématiques
            </h1>
            <p className="font-inter text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Index centralisé pointant vers nos leçons HTML indépendantes et interactives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Pills Header */}
      <section className="pb-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <span
              key={cat.id}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-inter text-sm font-medium shadow-sm"
            >
              📚 {cat.label}
            </span>
          ))}
        </div>
      </section>

      {/* Beautiful Empty State — "Aucune leçon disponible pour le moment / Coming Soon" */}
      <section className="py-8 px-4 flex-1 flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-10 text-center relative overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />

            <div className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl">
              <FolderSearch size={36} />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-mono-jetbrains text-xs font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Coming Soon • Indéxation en cours
            </div>

            <h2 className="font-space font-bold text-2xl sm:text-3xl text-slate-900 mb-3">
              Aucune leçon disponible pour le moment
            </h2>

            <p className="font-inter text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
              Les leçons HTML indépendantes (Collège, Lycée, Brevet, Bac) sont actuellement en cours de génération et d'indexation. Elles seront directement accessibles ici très prochainement.
            </p>

            <div className="pt-6 border-t border-slate-100/80 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary text-xs flex items-center gap-2 py-3 px-6"
              >
                <Calendar size={15} />
                Réserver un cours particulier d'ici là
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
