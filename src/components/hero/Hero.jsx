import { Link } from 'react-router-dom';
import { ArrowDown, Calendar, Download } from 'lucide-react';
import profileImg from '../../assets/myimage.png';

const quickBadges = [
  '✓ Collège (6e - 3e)',
  '✓ Lycée (2nde - Terminale)',
  '✓ Prépa Brevet (DNB)',
  '✓ Prépa Bac (Spé / Expertes)',
  '✓ À domicile (Toulouse & Paris)',
  '✓ En Ligne (Toute la France)',
];

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
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
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Disponible pour cours particuliers (Toulouse, Paris & En Ligne)
            </div>

            {/* Name */}
            <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 mb-3 leading-tight">
              Abdennour{' '}
              <span className="gradient-text">BOUHOUNALI</span>
            </h1>

            {/* Title */}
            <p className="font-space text-xl sm:text-2xl font-semibold text-slate-500 mb-4">
              Professeur de Mathématiques
            </p>

            {/* Core Promise Headline */}
            <p className="font-inter text-slate-700 text-base sm:text-lg lg:text-xl font-medium max-w-2xl leading-relaxed mb-6">
              Des cours de mathématiques clairs, personnalisés et efficaces pour aider chaque élève à reprendre confiance et réussir le Brevet ou le Bac.
            </p>

            {/* Decision Quick Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {quickBadges.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-inter font-semibold shadow-sm hover:shadow-md hover:border-blue-200 hover:text-blue-600 transition-all duration-300"
                >
                  {label}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="btn-primary text-sm"
                id="hero-book-lesson"
              >
                <Calendar size={16} />
                Réserver un cours d'essai
              </Link>

              <a
                href="/CV.pdf"
                download
                className="btn-secondary text-sm"
                id="hero-download-cv"
              >
                <Download size={15} />
                Télécharger le CV Enseignant
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
                  alt="Abdennour BOUHOUNALI — Professeur de Mathématiques"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Static badge — top right */}
              <div className="absolute -top-3 -right-3 bg-white rounded-2xl px-3.5 py-2 shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="text-lg">📐</span>
                <span className="font-space text-xs font-bold text-slate-800">5+ Ans Exp.</span>
              </div>

              {/* Static badge — bottom left */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl px-3.5 py-2 shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <span className="font-space text-xs font-bold text-slate-800">Bac 17/20</span>
              </div>

              {/* IEEE/Degree badge */}
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl px-3.5 py-2 shadow-lg flex items-center gap-1">
                <span className="text-white text-xs font-bold">Ingénieur & M2</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll down hint */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
      >
        <span className="text-xs font-mono-jetbrains">découvrir ma méthode</span>
        <ArrowDown size={16} />
      </button>
    </section>
  );
}
