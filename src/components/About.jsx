import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Trophy, Award, MapPin, Mail, Phone, BookOpen } from 'lucide-react';

const whatIDo = [
  { icon: Target, label: 'Diagnostic & Sur-Mesure', desc: 'Identification rapide des lacunes précises et élaboration d\'un plan de travail adapté.' },
  { icon: Lightbulb, label: 'Déclic & Autonomie', desc: 'Explications claires, schémas intuitifs et méthode progressive pour rendre le cours évident.' },
  { icon: Trophy, label: 'Préparation aux Examens', desc: 'Entraînement intensif sur annales du Brevet et du Bac avec gestion du temps et du stress.' },
  { icon: Award, label: 'Rigueur & Suivi Parents', desc: 'Enseignement de la rédaction d\'examen et bilan synthétique transmis après chaque cours.' },
];

const stats = [
  { value: 5, suffix: '+', label: "Ans d'Expérience" },
  { value: 150, suffix: '+', label: 'Élèves Accompagnés' },
  { value: 98, suffix: '%', label: 'Réussite Brevet / Bac' },
  { value: 4, suffix: ' pts', label: 'Progression Moyenne' },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>{count}{suffix}</span>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="about" className="section-wrapper">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono-jetbrains text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            01. Pourquoi me choisir ?
          </p>
          <h2 className="section-title">Pourquoi mes élèves progressent ?</h2>
          <p className="section-subtitle">
            Une approche pédagogique humaine et exigeante qui transforme l'anxiété des maths en déclic et en réussite.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
        >
          {/* Left — Bio + Pillars */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg text-white"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
                  👨‍🏫
                </div>
                <h3 className="font-space text-xl font-bold text-slate-800">Ma Philosophie Pédagogique</h3>
              </div>

              <p className="font-inter text-slate-600 leading-relaxed mb-4">
                Pédagogue passionné avec plus de 5 ans d'expérience dans l'enseignement des mathématiques en lycée et en cours particuliers, je suis convaincu que <strong className="text-slate-800">chaque élève peut réussir en mathématiques</strong> dès lors qu'on adapte l'explication à son fonctionnement.
              </p>
              <p className="font-inter text-slate-600 leading-relaxed">
                Mon objectif ne se limite pas à faire faire des exercices : je construis une relation de confiance, j'enseigne des réflexes de rigueur et je prépare méthodiquement aux épreuves du Brevet et du Baccalauréat.
              </p>

              {/* Differentiator banner */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-150">
                <p className="font-inter text-xs text-slate-700 font-medium leading-relaxed">
                  💡 <strong className="text-blue-600">Mon atout unique :</strong> Mon parcours d'ingénieur et mon Master de l'Université de Toulouse me permettent d'apporter une approche rigoureuse, logique et concrète des mathématiques.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={14} className="text-blue-500" />
                  <span>Toulouse, Paris & Toute la France (En ligne)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Mail size={14} className="text-blue-500" />
                  <a href="mailto:abdennour.bouhounali@gmail.com" className="hover:text-blue-600 transition-colors">
                    abdennour.bouhounali@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Phone size={14} className="text-blue-500" />
                  <a href="tel:+33670445721" className="hover:text-blue-600 transition-colors font-medium">
                    +33 6 70 44 57 21
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Pillars */}
            <div className="space-y-3">
              {whatIDo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="glass-card p-4 flex items-start gap-4 cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
                    <item.icon size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-space font-semibold text-slate-800 text-sm">{item.label}</p>
                    <p className="font-inter text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Glass card + Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Glass highlight card */}
            <div className="glass-card p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '20px 20px' }}
              />
              <h3 className="font-space font-bold text-slate-800 text-lg mb-6 relative z-10">
                Un accompagnement complet axé sur :
              </h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { emoji: '🎯', label: 'Compréhension', sublabel: 'Reprise des bases' },
                  { emoji: '📝', label: 'Rigueur', sublabel: 'Rédaction parfaite' },
                  { emoji: '⏱️', label: 'Gestion', sublabel: 'Gestion du temps' },
                  { emoji: '🚀', label: 'Confiance', sublabel: 'Déclic positif' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="p-4 rounded-2xl border border-slate-100 bg-white/60 text-center cursor-default"
                  >
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <p className="font-space font-bold text-slate-800 text-sm">{item.label}</p>
                    <p className="font-inter text-slate-400 text-xs mt-0.5">{item.sublabel}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 relative z-10">
                <p className="font-mono-jetbrains text-xs text-slate-600 leading-relaxed">
                  <span className="text-blue-500 font-bold">Méthode = </span>
                  Compréhension + Rigueur de calcul + Entraînement régulier = Succès
                </p>
              </div>
            </div>

            {/* Animated counters */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="glass-card p-5 text-center"
                >
                  <div className="font-space font-bold text-3xl sm:text-4xl gradient-text-blue-purple mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} inView={statsInView} />
                  </div>
                  <p className="font-inter text-slate-500 text-xs font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
