import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Sliders, LineChart, Target, MapPin, Mail, Phone } from 'lucide-react';

const whatIDo = [
  {
    icon: Lightbulb,
    label: 'Explications simples',
    desc: 'Démystifier les notions complexes avec une pédagogie claire, illustrée et accessible à chaque élève.'
  },
  {
    icon: Sliders,
    label: 'Méthode personnalisée',
    desc: 'Un accompagnement sur-mesure adapté au rythme, au niveau et au mode d\'apprentissage de votre enfant.'
  },
  {
    icon: LineChart,
    label: 'Suivi régulier',
    desc: 'Un bilan d\'avancement systématique après chaque séance pour mesurer les progrès et informer les parents.'
  },
  {
    icon: Target,
    label: 'Objectif réussite',
    desc: 'Préparation ciblée aux devoirs surveillés, contrôles et examens officiels (Brevet DNB et Baccalauréat).'
  },
];

const stats = [
  { value: 5, suffix: '+ ans', label: "D'expérience" },
  { value: 150, suffix: '+', label: 'Élèves accompagnés' },
  { value: 7, suffix: ' niveaux', label: 'Du Collège au Lycée' },
  { value: 100, suffix: '%', label: 'En ligne & À domicile' },
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

export default function AboutSection() {
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
            01. Présentation
          </p>
          <h2 className="section-title">Pourquoi me choisir ?</h2>
          <p className="section-subtitle">
            Une approche pédagogique personnalisée et rigoureuse pour aider chaque élève à progresser et réussir.
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
                <h3 className="font-space text-xl font-bold text-slate-800">À propos de mon enseignement</h3>
              </div>

              <p className="font-inter text-slate-600 leading-relaxed mb-4">
                Professeur de mathématiques diplômé d'un Master 2 de l'Université de Toulouse III et d'un diplôme d'Ingénieur, j'accompagne les élèves du Collège au Lycée pour leur transmettre la méthode, la rigueur et la confiance nécessaires pour réussir.
              </p>
              <p className="font-inter text-slate-600 leading-relaxed">
                Fort de plus de 5 ans d'expérience en lycée et en cours particuliers, j'adapte chaque séance au profil de l'élève pour débloquer les difficultés et viser l'excellence.
              </p>

              {/* Differentiator banner */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-150">
                <p className="font-inter text-xs text-slate-700 font-medium leading-relaxed">
                  💡 <strong className="text-blue-600">Mon atout :</strong> Mon double parcours scientifique me permet d'apporter une vision concrète, structurée et logique de chaque concept mathématique.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={14} className="text-blue-500" />
                  <span>Toulouse, Paris & En ligne (France)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Mail size={14} className="text-blue-500" />
                  <a href="mailto:abdennour.bouhounali@gmail.com" className="hover:text-blue-600 transition-colors">
                    abdennour.bouhounali@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Phone size={14} className="text-blue-500" />
                  <a href="tel:+33758103086" className="hover:text-blue-600 transition-colors font-medium">
                    +33 7 58 10 30 86
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
                Un accompagnement axé sur :
              </h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { emoji: '🎯', label: 'Explications', sublabel: 'Simples & Claires' },
                  { emoji: '📝', label: 'Méthode', sublabel: 'Sur-mesure' },
                  { emoji: '📊', label: 'Suivi', sublabel: 'Régulier' },
                  { emoji: '🚀', label: 'Objectif', sublabel: 'Réussite' },
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
                  Explications simples + Suivi régulier + Entraînement = Réussite
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
