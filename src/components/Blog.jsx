import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: "Building AI Vision Systems for Agricultural Robotics",
    date: "June 2025",
    readTime: "8 min read",
    summary: "How we designed a multi-camera + IMU perception pipeline for 3D plant scanning, from sensor benchmarking to prototype delivery.",
    tag: "Computer Vision",
    gradient: "from-purple-600 via-blue-500 to-cyan-400",
    icon: "👁️"
  },
  {
    title: "From Sensors to Intelligent Applications: LoRa IoT in Precision Agriculture",
    date: "October 2024",
    readTime: "10 min read",
    summary: "A deep dive into a complete LoRa IoT system — ESP32 firmware, PCB design, real-time dashboard, and IEEE publication.",
    tag: "Embedded Systems",
    gradient: "from-orange-500 via-red-500 to-pink-400",
    icon: "📡"
  },
  {
    title: "Edge AI: Deploying Deep Learning on Embedded Platforms",
    date: "March 2025",
    readTime: "7 min read",
    summary: "Challenges and solutions running YOLOv8 on NVIDIA Jetson with real-time constraints and power budget optimizations.",
    tag: "AI",
    gradient: "from-blue-600 via-indigo-500 to-violet-400",
    icon: "🤖"
  },
  {
    title: "SLAM for Robotics: Combining Cameras and IMU",
    date: "May 2025",
    readTime: "12 min read",
    summary: "Introduction to SLAM, sensor fusion strategies, and practical implementation notes from agricultural robotics projects.",
    tag: "Robotics",
    gradient: "from-green-500 via-teal-500 to-emerald-400",
    icon: "🗺️"
  }
];

const tagColors = {
  "Computer Vision": "bg-purple-100 text-purple-700",
  "Embedded Systems": "bg-orange-100 text-orange-700",
  "AI": "bg-blue-100 text-blue-700",
  "Robotics": "bg-green-100 text-green-700",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Blog() {
  return (
    <section id="blog" className="section-wrapper bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono-jetbrains text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            06. Blog
          </p>
          <h2 className="section-title">Technical Writing</h2>
          <p className="section-subtitle">
            Sharing knowledge about AI, embedded systems, and engineering challenges.
          </p>

          {/* Coming soon banner */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mt-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Articles coming soon — stay tuned!
          </div>
        </motion.div>

        {/* Blog card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card overflow-hidden flex flex-col cursor-default relative"
            >
              {/* Coming soon overlay badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className="px-2 py-1 rounded-full bg-slate-900/80 text-white text-xs font-mono-jetbrains font-medium backdrop-blur-sm">
                  Soon
                </span>
              </div>

              {/* Card header gradient */}
              <div className={`h-32 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                />
                <span className="text-5xl relative z-10">{post.icon}</span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Tag */}
                <span className={`self-start font-inter text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${tagColors[post.tag] || 'bg-slate-100 text-slate-700'}`}>
                  {post.tag}
                </span>

                <h3 className="font-space font-bold text-slate-900 text-sm leading-snug mb-2 flex-1">
                  {post.title}
                </h3>

                <p className="font-inter text-slate-500 text-xs leading-relaxed mb-4">
                  {post.summary}
                </p>

                <div className="flex items-center gap-3 text-slate-400 text-xs pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={11} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
