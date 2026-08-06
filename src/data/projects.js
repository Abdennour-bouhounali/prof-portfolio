export const domainGradients = {
  "Soutien Hebdo": "from-blue-600 via-indigo-500 to-cyan-400",
  "Prépa Examens": "from-purple-600 via-pink-500 to-rose-400",
  "Stages Vacances": "from-orange-500 via-amber-500 to-yellow-400",
  "Cours en Ligne": "from-emerald-500 via-teal-500 to-cyan-400",
  "Remise à Niveau": "from-slate-600 via-gray-500 to-zinc-400",
};

export const domainIcons = {
  "Soutien Hebdo": "📘",
  "Prépa Examens": "🏆",
  "Stages Vacances": "🚀",
  "Cours en Ligne": "💻",
  "Remise à Niveau": "📚",
};

export const domainColors = {
  "Soutien Hebdo": "bg-blue-100 text-blue-700",
  "Prépa Examens": "bg-purple-100 text-purple-700",
  "Stages Vacances": "bg-orange-100 text-orange-700",
  "Cours en Ligne": "bg-emerald-100 text-emerald-700",
  "Remise à Niveau": "bg-slate-100 text-slate-700",
};

export const projects = [
  {
    id: 1,
    domain: "Soutien Hebdo",
    name: "Soutien Hebdomadaire & Suivi Continu",
    description: "Un accompagnement régulier de 1h à 2h par semaine pour consolider le cours vu en classe, clarifier les zones d'ombre, préparer les devoirs surveillés et installer une routine de travail efficace.",
    tech: ["Collège", "Lycée", "Toulouse", "Paris", "En Ligne"],
    images: null,
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 2,
    domain: "Prépa Examens",
    name: "Préparation au Baccalauréat (Spé & Expertes)",
    description: "Programme intensif axé sur le programme de Terminale Spécialité et Maths Expertes. Entraînement sur sujets d'annales corrigés, maîtrise des méthodes types Bac et optimisation de la rédaction.",
    tech: ["Terminale Spé Maths", "Maths Expertes", "Annales Bac", "Rédaction Types"],
    images: null,
    github: null,
    demo: null,
    featured: true,
    award: "🏆 98% Taux de Réussite"
  },
  {
    id: 3,
    domain: "Prépa Examens",
    name: "Stage Commando Brevet des Collèges (DNB)",
    description: "Préparation ciblée pour les élèves de 3ème : révisions programmées en calcul, géométrie, probabilités et algorithmique. Entraînement en conditions réelles d'examen.",
    tech: ["Troisième (3ème)", "DNB Brevet", "Annales", "Gestion du Temps"],
    images: null,
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 4,
    domain: "Stages Vacances",
    name: "Stages Intensifs pendant les Vacances",
    description: "Des stages de 5 à 10 heures réparties sur la semaine (Toussaint, Février, Pâques, Été) pour combler rapidement les lacunes accumulate et prendre de l'avance sur le trimestre suivant.",
    tech: ["Toussaint", "Février", "Pâques", "Stage d'Été", "Petits Groupes ou Individuel"],
    images: null,
    github: null,
    demo: null,
    featured: true
  },
  {
    id: 5,
    domain: "Cours en Ligne",
    name: "Cours en Ligne Interactive (Visio HD)",
    description: "Séances à distance sur tableau blanc virtuel partagé (GeoGebra, PDF annotés en direct). Les notes et exercices sont envoyés en PDF à la fin de chaque cours pour une révision optimale.",
    tech: ["Tableau Interactif", "Visio HD", "Toute la France", "Support PDF d'après-cours"],
    images: null,
    github: null,
    demo: null,
    featured: false
  },
  {
    id: 6,
    domain: "Remise à Niveau",
    name: "Remise à Niveau & Déclic Mathématique",
    description: "Conçu pour les élèves en grande difficulté ou anxieux face aux maths. Déconstruction des blocages, reprise des fondamentaux et redonner confiance par des réussites progressives.",
    tech: ["Confiance en soi", "Méthodologie", "Diagnostic initial", "Pédagogie bienveillante"],
    images: null,
    github: null,
    demo: null,
    featured: false
  }
];
