import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code2, Cpu, Eye, MapPin, Mail, BookOpen } from 'lucide-react';

const whatIDo = [
  { icon: Brain, label: 'Artificial Intelligence', desc: 'Deep learning models, computer vision pipelines, SLAM algorithms' },
  { icon: Cpu, label: 'Embedded Systems', desc: 'ESP32, STM32, RISC-V, RTOS, Embedded Linux, ROS2' },
  { icon: Eye, label: 'Computer Vision', desc: '3D perception, point cloud fusion, sensor fusion, stereo vision' },
  { icon: Code2, label: 'Software Engineering', desc: 'React, Laravel, REST APIs, CI/CD, agile development' },
];

const stats = [
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 1, suffix: '', label: 'IEEE Publication' },
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
            01. About
          </p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A software engineer at the intersection of AI, embedded hardware, and intelligent vision systems.
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
          {/* Left — Bio + What I do */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}>
                  👋
                </div>
                <h3 className="font-space text-xl font-bold text-slate-800">About Me</h3>
              </div>

              <p className="font-inter text-slate-600 leading-relaxed mb-4">
                I'm a Software Engineer passionate about building intelligent, scalable, and high-performance software solutions. My expertise spans <strong className="text-slate-800">Artificial Intelligence</strong>, <strong className="text-slate-800">Computer Vision</strong>, <strong className="text-slate-800">Embedded Systems</strong>, and <strong className="text-slate-800">IoT</strong>, with hands-on experience developing industrial applications from embedded devices to AI-powered vision systems.
              </p>
              <p className="font-inter text-slate-600 leading-relaxed">
                I enjoy solving complex engineering challenges by combining modern software engineering with cutting-edge technologies to create impactful, real-world solutions.
              </p>

              <div className="flex flex-col gap-2 mt-5 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin size={14} className="text-blue-500" />
                  <span>Toulouse, France</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Mail size={14} className="text-blue-500" />
                  <a href="mailto:abdennour.bouhounali@gmail.com" className="hover:text-blue-600 transition-colors">
                    abdennour.bouhounali@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <BookOpen size={14} className="text-blue-500" />
                  <a href="https://ieeexplore.ieee.org/document/10783387" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    IEEE EDiS 2024 Publication
                  </a>
                </div>
              </div>
            </div>

            {/* What I do */}
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
                Building intelligent systems by combining:
              </h3>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { emoji: '🤖', label: 'AI', sublabel: 'Machine Learning' },
                  { emoji: '💻', label: 'Software Eng', sublabel: 'Architecture' },
                  { emoji: '⚙️', label: 'Embedded HW', sublabel: 'Systems' },
                  { emoji: '👁️', label: 'Computer Vision', sublabel: '3D Perception' },
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
                <p className="font-mono-jetbrains text-xs text-slate-500 leading-relaxed">
                  <span className="text-blue-500">$ </span>
                  AI + Embedded + Vision = Autonomous Intelligent Systems
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
                  <div className="font-space font-bold text-4xl gradient-text-blue-purple mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} inView={statsInView} />
                  </div>
                  <p className="font-inter text-slate-500 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
