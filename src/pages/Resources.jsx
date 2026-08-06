import { motion } from 'framer-motion';
import { FileText, Edit3, RefreshCw, BookOpen, Download, Sparkles } from 'lucide-react';
import Blog from '../components/Blog';

const resourceCategories = [
  {
    title: "Fiches PDF Synthétiques",
    category: "Fiches",
    description: "Les fiches de révision condensées sur les chapitres fondamentaux du Brevet et du Bac Spé Maths.",
    icon: FileText,
    gradient: "from-blue-600 via-indigo-500 to-cyan-400"
  },
  {
    title: "Exercices Types Corrigés",
    category: "Exercices",
    description: "Des séries d'exercices progressifs avec rédactions détaillées et conseils pour éliminer les erreurs.",
    icon: Edit3,
    gradient: "from-purple-600 via-pink-500 to-rose-400"
  },
  {
    title: "Programmes de Révisions",
    category: "Révisions",
    description: "Plannings de travail hebdomadaires et méthodes d'organisation pour les vacances scolaires.",
    icon: RefreshCw,
    gradient: "from-orange-500 via-amber-500 to-yellow-400"
  },
  {
    title: "Articles & Astuces Maths",
    category: "Articles",
    description: "Conseils pour surmonter l'anxiété face aux maths et maîtriser sa calculatrice / Python aux épreuves.",
    icon: BookOpen,
    gradient: "from-emerald-500 via-teal-500 to-cyan-400"
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function ResourcesPage() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono-jetbrains font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={14} className="text-emerald-500" />
              Téléchargements & Supports
            </div>
            <h1 className="font-space font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
              Ressources Gratuites
            </h1>
            <p className="font-inter text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Des supports pédagogiques, fiches de révision et exercices corrigés pour accompagner le travail des élèves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Cards with Coming Soon Badges */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {resourceCategories.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card overflow-hidden flex flex-col relative cursor-default"
              >
                {/* Coming Soon badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-0.5 rounded-full bg-slate-900/90 text-white text-[11px] font-mono-jetbrains font-medium backdrop-blur-sm">
                    Bientôt disponible
                  </span>
                </div>

                {/* Header Gradient */}
                <div className={`h-32 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                  />
                  <item.icon size={36} className="text-white relative z-10" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <span className="self-start font-inter text-xs font-semibold px-2.5 py-1 rounded-full mb-3 bg-blue-100 text-blue-700">
                    {item.category}
                  </span>

                  <h2 className="font-space font-bold text-slate-900 text-base leading-snug mb-2">
                    {item.title}
                  </h2>

                  <p className="font-inter text-slate-500 text-xs leading-relaxed flex-1 mb-4">
                    {item.description}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <button
                      disabled
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 text-slate-400 text-xs font-semibold opacity-80 cursor-not-allowed"
                    >
                      <Download size={13} />
                      Téléchargement à venir
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Blog Preview */}
      <Blog />
    </div>
  );
}
