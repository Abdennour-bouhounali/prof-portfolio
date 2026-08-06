import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import profileImg from '../assets/myimage.png';

const techBadges = [
  'Artificial Intelligence',
  'Computer Vision',
  'Embedded Systems',
  'IoT & LoRa',
  'SLAM & 3D Vision',
  'Deep Learning',
];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — Text */}
          <div className="flex-1 text-center lg:text-left">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 mb-3 leading-tight">
              Abdennour{' '}
              <span className="gradient-text">BOUHOUNALI</span>
            </h1>

            {/* Title */}
            <p className="font-space text-xl sm:text-2xl font-semibold text-slate-500 mb-2">
              Software Engineer
            </p>

            <p className="font-mono-jetbrains text-sm sm:text-base text-blue-500 font-medium mb-6">
              AI • Embedded Systems • Computer Vision
            </p>

            {/* Tagline */}
            <p className="font-inter text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed mb-8">
              Engineering intelligent software for the next generation of connected and autonomous systems.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
              {techBadges.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-mono-jetbrains font-medium shadow-sm hover:shadow-md hover:border-blue-200 hover:text-blue-600 transition-all duration-300"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="btn-primary text-sm"
                id="hero-view-projects"
              >
                View Projects
                <ExternalLink size={15} />
              </button>

              <a
                href="/CV.pdf"
                download
                className="btn-secondary text-sm"
                id="hero-download-cv"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right — Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Gradient ring */}
              <div
                className="absolute inset-0 rounded-full gradient-ring"
                style={{ padding: '3px' }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </div>

              {/* Profile image */}
              <div className="absolute inset-[4px] rounded-full overflow-hidden">
                <img
                  src={profileImg}
                  alt="Abdennour BOUHOUNALI"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Static badge — top right */}
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl px-3 py-2 shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="text-lg">🤖</span>
                <span className="font-mono-jetbrains text-xs font-semibold text-slate-700">AI Engineer</span>
              </div>

              {/* Static badge — bottom left */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-3 py-2 shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="text-lg">📡</span>
                <span className="font-mono-jetbrains text-xs font-semibold text-slate-700">IoT & LoRa</span>
              </div>

              {/* IEEE badge */}
              <div className="absolute -bottom-3 -right-3 bg-blue-600 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-1">
                <span className="text-white text-xs font-bold">IEEE</span>
                <span className="text-blue-200 text-xs">Published</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll down hint */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
      >
        <span className="text-xs font-mono-jetbrains">scroll down</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
