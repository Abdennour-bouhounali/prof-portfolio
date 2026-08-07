import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Calculator, PenTool, BrainCircuit } from 'lucide-react';

const floatingIcons = [
  { Icon: Calculator, color: 'text-blue-500', bg: 'bg-blue-50', position: 'top-[15%] left-[10%]', delay: 0 },
  { Icon: BookOpen, color: 'text-purple-500', bg: 'bg-purple-50', position: 'top-[20%] right-[12%]', delay: 0.2 },
  { Icon: BrainCircuit, color: 'text-indigo-500', bg: 'bg-indigo-50', position: 'bottom-[30%] left-[15%]', delay: 0.4 },
  { Icon: PenTool, color: 'text-emerald-500', bg: 'bg-emerald-50', position: 'bottom-[25%] right-[15%]', delay: 0.6 },
];

export default function Hero() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-400/10 to-purple-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Math Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute hidden md:flex w-16 h-16 rounded-2xl ${item.bg} border border-white/50 shadow-xl items-center justify-center ${item.position} backdrop-blur-sm z-0`}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.Icon className={`w-8 h-8 ${item.color}`} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8 shadow-sm"
            >
              <span className="text-lg">🚀</span>
              100% Gratuit et en accès libre
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-space font-bold text-5xl sm:text-6xl lg:text-7xl text-slate-900 mb-6 leading-tight tracking-tight"
            >
              Smarter <span className="gradient-text block mt-2">Academy</span>
            </motion.h1>

            {/* Core Promise Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-inter text-slate-600 text-lg sm:text-xl font-medium max-w-xl leading-relaxed mb-10"
            >
              Apprenez, pratiquez et maîtrisez les mathématiques gratuitement. Une plateforme éducative interactive pour les élèves du Collège au Lycée.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/courses"
                className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 shadow-lg hover:shadow-blue-500/30"
                style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
              >
                <BookOpen size={20} />
                Commencer à apprendre
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Touch Math Widget Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full max-w-[400px] mx-auto relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative bg-white border border-slate-200 rounded-[2rem] p-8 shadow-xl overflow-hidden flex flex-col h-full hover:border-emerald-300 transition-colors duration-500">
              <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-4 py-1.5 rounded-bl-2xl font-mono tracking-wider">
                NOUVEAU
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl">🎮</div>
                <h3 className="font-space font-bold text-2xl text-slate-900">Touch Math</h3>
              </div>
              
              <p className="text-sm text-slate-500 mb-6 font-inter text-left">
                Manipulez les fonctions affines et découvrez visuellement l'impact de <span className="font-mono bg-slate-100 px-1 rounded text-slate-700">a</span> et <span className="font-mono bg-slate-100 px-1 rounded text-slate-700">b</span>.
              </p>
              
              <div className="bg-slate-50 rounded-2xl border border-slate-200 aspect-[4/3] flex flex-col p-4 mb-6 relative overflow-hidden group-hover:bg-slate-100 transition-colors">
                 {/* Mini SVG Graph representation */}
                 <div className="relative flex-1 w-full h-full">
                   <svg viewBox="0 0 100 100" className="w-full h-full opacity-90 drop-shadow-sm absolute inset-0">
                      {/* Grid Lines */}
                      <line x1="0" y1="50" x2="100" y2="50" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="50" y1="0" x2="50" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                      <line x1="0" y1="25" x2="100" y2="25" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="0" y1="75" x2="100" y2="75" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="25" y1="0" x2="25" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                      <line x1="75" y1="0" x2="75" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                      
                      {/* Affine Line */}
                      <line x1="0" y1={50 - (a*(-5) + b)*10} x2="100" y2={50 - (a*(5) + b)*10} stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-300" />
                      
                      {/* Dots & Fake Staircase */}
                      <circle cx="50" cy={50 - b*10} r="4" fill="#f59e0b" className="transition-all duration-300" />
                      <circle cx="75" cy={50 - (a*2.5 + b)*10} r="3" fill="#3b82f6" className="transition-all duration-300" />
                      
                      <line x1="50" y1={50 - b*10} x2="75" y2={50 - b*10} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2" className="transition-all duration-300" />
                      <line x1="75" y1={50 - b*10} x2="75" y2={50 - (a*2.5 + b)*10} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="2" className="transition-all duration-300" />
                   </svg>
                   <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono text-slate-700 font-bold border border-slate-200 shadow-sm transition-all duration-300">
                      f(x) = {a}x {b >= 0 ? '+' : '-'} {Math.abs(b)}
                   </div>
                 </div>

                 {/* Interactive Controls */}
                 <div className="flex gap-4 items-center justify-between mt-4">
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Pente (a)</span>
                        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
                           <button onClick={() => setA(Math.max(-5, a-1))} className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-slate-100 font-mono text-slate-700 leading-none pb-0.5">-</button>
                           <span className="w-4 text-center font-mono font-bold text-slate-800 text-xs">{a}</span>
                           <button onClick={() => setA(Math.min(5, a+1))} className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-slate-100 font-mono text-slate-700 leading-none pb-0.5">+</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Ordonnée (b)</span>
                        <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
                           <button onClick={() => setB(Math.max(-5, b-1))} className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-slate-100 font-mono text-slate-700 leading-none pb-0.5">-</button>
                           <span className="w-4 text-center font-mono font-bold text-slate-800 text-xs">{b}</span>
                           <button onClick={() => setB(Math.min(5, b+1))} className="w-5 h-5 flex items-center justify-center rounded-md hover:bg-slate-100 font-mono text-slate-700 leading-none pb-0.5">+</button>
                        </div>
                    </div>
                 </div>
              </div>

              <a href="/modules/college/3e/fonctions-lineaires-affines/lessons/01-simulateur-graphique/index.html" className="mt-auto w-full py-3.5 rounded-xl bg-emerald-50 text-emerald-700 font-mono text-sm font-bold border border-emerald-200 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 text-center shadow-sm">
                Lancer le simulateur ➔
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll down hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
      >
        <span className="text-xs font-mono-jetbrains">découvrir la plateforme</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
