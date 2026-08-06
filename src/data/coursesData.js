export const courseLevels = [
  {
    id: 'college',
    title: 'Collège',
    subtitle: 'De la 6ème à la 3ème',
    icon: '📘',
    color: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50/50 border-blue-200',
    accentColor: 'text-blue-600',
    badgeBg: 'bg-blue-100 text-blue-700',
    grades: [
      {
        id: '6e',
        name: '6ème',
        lessons: [
          { 
            id: 'nombres-decimaux', 
            title: 'Nombres Décimaux (Module)', 
            description: 'Module complet en 6 micro-leçons : numération, comparaison, droite graduée.', 
            duration: '35 min total', 
            difficulty: 'Facile', 
            status: 'available', 
            path: '/modules/college/6e/nombres-decimaux/index.html',
            icon: '🔢' 
          },
          { 
            id: 'fractions-intro', 
            title: 'Fractions (Module)', 
            description: 'Module complet en 6 micro-leçons : numérateur, dénominateur, mur des fractions, simplification.', 
            duration: '35 min total', 
            difficulty: 'Facile', 
            status: 'available', 
            path: '/modules/college/6e/fractions/index.html',
            icon: '🍕' 
          },
          { 
            id: 'proportionnalite-6e', 
            title: 'Proportionnalité (Module)', 
            description: 'Module complet en 6 micro-leçons : tableaux, coefficient et calculs de pourcentages.', 
            duration: '35 min total', 
            difficulty: 'Moyen', 
            status: 'available', 
            path: '/modules/college/6e/proportionnalite/index.html',
            icon: '📊' 
          },
          { 
            id: 'geometrie-base', 
            title: 'Géométrie du plan (Module)', 
            description: 'Module complet en 6 micro-leçons : droites perpendiculaires, parallèles, notations et équerre.', 
            duration: '35 min total', 
            difficulty: 'Facile', 
            status: 'available', 
            path: '/modules/college/6e/geometrie-base/index.html',
            icon: '📐' 
          },
          { 
            id: 'aires-perimetres', 
            title: 'Aires et Périmètres (Module)', 
            description: 'Module complet en 6 micro-leçons : contour, surface, formules et tableau d\'unités.', 
            duration: '35 min total', 
            difficulty: 'Moyen', 
            status: 'available', 
            path: '/modules/college/6e/aires-perimetres/index.html',
            icon: '📏' 
          },
          { 
            id: 'symetrie-axiale', 
            title: 'Symétrie axiale (Module)', 
            description: 'Module complet en 6 micro-leçons : axes, propriétés, pliage, quadrillage et compas.', 
            duration: '35 min total', 
            difficulty: 'Facile', 
            status: 'available', 
            path: '/modules/college/6e/symetrie-axiale/index.html',
            icon: '🪞' 
          }
        ]
      },
      {
        id: '5e',
        name: '5ème',
        lessons: [
          { id: 'nombres-relatifs-5e', title: 'Nombres relatifs', description: 'Addition et soustraction des nombres positifs et négatifs.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '➕' },
          { id: 'calcul-litteral-5e', title: 'Calcul littéral', description: 'Développer et réduire des expressions simples.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🔤' },
          { id: 'angles-triangles', title: 'Angles et Triangles', description: 'Somme des angles d\'un triangle et angles particuliers.', duration: '20 min', difficulty: 'Facile', status: 'coming_soon', icon: '📐' },
          { id: 'statistiques-5e', title: 'Statistiques', description: 'Effectifs, fréquences et représentations graphiques.', duration: '20 min', difficulty: 'Facile', status: 'coming_soon', icon: '📈' },
          { id: 'probabilites-5e', title: 'Probabilités', description: 'Notion de chance, événements et expériences aléatoires.', duration: '20 min', difficulty: 'Facile', status: 'coming_soon', icon: '🎲' },
          { id: 'proportionnalite-5e', title: 'Proportionnalité & Échelles', description: 'Vitesse moyenne, échelles et ratios.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🏎️' }
        ]
      },
      {
        id: '4e',
        name: '4ème',
        lessons: [
          { id: 'puissances-4e', title: 'Puissances', description: 'Puissances de 10 et notation scientifique.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '⚡' },
          { id: 'equations-4e', title: 'Équations', description: 'Résolution d\'équations du premier degré.', duration: '30 min', difficulty: 'Moyen', status: 'coming_soon', icon: '⚖️' },
          { id: 'pythagore-4e', title: 'Théorème de Pythagore', description: 'Calculer une longueur et démontrer qu\'un triangle est rectangle.', duration: '30 min', difficulty: 'Moyen', status: 'coming_soon', icon: '📐' },
          { id: 'calcul-litteral-4e', title: 'Calcul littéral & Double distributivité', description: 'Développement avancé et premières factorisations.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🔤' },
          { id: 'fonctions-intro', title: 'Notion de fonction', description: 'Image, antécédent et représentation graphique.', duration: '25 min', difficulty: 'Avancé', status: 'coming_soon', icon: '📈' },
          { id: 'statistiques-4e', title: 'Statistiques & Moyenne pondérée', description: 'Calculs de moyennes et interprétation de données.', duration: '20 min', difficulty: 'Facile', status: 'coming_soon', icon: '📊' }
        ]
      },
      {
        id: '3e',
        name: '3ème',
        lessons: [
          { id: 'thales-3e', title: 'Théorème de Thalès', description: 'Proportionnalité des longueurs et théorème réciproque.', duration: '30 min', difficulty: 'Moyen', status: 'coming_soon', icon: '📐' },
          { id: 'fonctions-lineaires-affines', title: 'Fonctions linéaires et affines', description: 'Tracé de droites, coefficient directeur et ordonnée à l\'origine.', duration: '30 min', difficulty: 'Moyen', status: 'coming_soon', icon: '📈' },
          { id: 'equations-produit', title: 'Équations produit nul', description: 'Résoudre (ax + b)(cx + d) = 0 et factorisation.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '⚖️' },
          { id: 'systemes-equations', title: 'Systèmes d\'équations', description: 'Résolution par substitution et par combinaison.', duration: '30 min', difficulty: 'Avancé', status: 'coming_soon', icon: '🔄' },
          { id: 'trigonometrie-3e', title: 'Trigonométrie', description: 'Cosinus, sinus et tangente dans le triangle rectangle.', duration: '35 min', difficulty: 'Avancé', status: 'coming_soon', icon: '📐' },
          { id: 'probabilites-3e', title: 'Probabilités & Arbres', description: 'Arbres de dénombrement et événements indépendants.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🎲' },
          { id: 'prepa-brevet-3e', title: 'Préparation Brevet', description: 'Révisions globales et annales clés pour le DNB.', duration: '40 min', difficulty: 'Avancé', status: 'coming_soon', icon: '🎯' }
        ]
      }
    ]
  },
  {
    id: 'lycee',
    title: 'Lycée',
    subtitle: 'De la Seconde à la Terminale Spé/Expertes',
    icon: '📗',
    color: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50/50 border-emerald-200',
    accentColor: 'text-emerald-600',
    badgeBg: 'bg-emerald-100 text-emerald-700',
    grades: [
      {
        id: 'seconde',
        name: 'Seconde',
        lessons: [
          { id: 'fonctions-seconde', title: 'Fonctions', description: 'Domaine de définition, variations, parité et extrema.', duration: '30 min', difficulty: 'Moyen', status: 'coming_soon', icon: '📈' },
          { id: 'vecteurs-seconde', title: 'Vecteurs', description: 'Vecteurs du plan, Chasles et coordonnées cartésiennes.', duration: '35 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🏹' },
          { id: 'statistiques-seconde', title: 'Statistiques', description: 'Médiane, quartiles, écart interquartile et diagrammes.', duration: '25 min', difficulty: 'Facile', status: 'coming_soon', icon: '📊' },
          { id: 'probabilites-seconde', title: 'Probabilités', description: 'Ensembles, réunion, intersection et arbres.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🎲' },
          { id: 'geometrie-reperee-2nde', title: 'Géométrie', description: 'Distance entre deux points et milieu d\'un segment.', duration: '25 min', difficulty: 'Facile', status: 'coming_soon', icon: '📍' }
        ]
      },
      {
        id: 'premiere',
        name: 'Première Spécialité',
        lessons: [
          { id: 'polynomes-second-degre', title: 'Polynômes', description: 'Forme canonique, discriminant Delta et racines.', duration: '35 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🧮' },
          { id: 'derivation-1ere', title: 'Dérivation', description: 'Nombre dérivé, équation de la tangente et dérivées usuelles.', duration: '40 min', difficulty: 'Avancé', status: 'coming_soon', icon: '📈' },
          { id: 'produit-scalaire', title: 'Produit scalaire', description: 'Calculs algébriques, projeté orthogonal et applications.', duration: '35 min', difficulty: 'Avancé', status: 'coming_soon', icon: '🎯' },
          { id: 'suites-numeriques-1ere', title: 'Suites', description: 'Définitions par récurrence, termes généraux et sommes.', duration: '35 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🔢' },
          { id: 'trigonometrie-1ere', title: 'Trigonométrie', description: 'Enroulement de la droite numérique, cosinus et sinus.', duration: '35 min', difficulty: 'Avancé', status: 'coming_soon', icon: '⭕' }
        ]
      },
      {
        id: 'terminale',
        name: 'Terminale Spé / Expertes',
        lessons: [
          { 
            id: 'nombres-complexes', 
            title: 'Nombres Complexes (Module)', 
            description: 'Module complet en 6 micro-leçons : forme algébrique, plan d\'Argand-Gauss, module et conjugué.', 
            duration: '40 min total', 
            difficulty: 'Difficile', 
            status: 'available', 
            path: '/modules/lycee/terminale/nombres-complexes/index.html',
            icon: '⚡' 
          },
          { id: 'limites-fonctions', title: 'Limites', description: 'Limites en l\'infini, en un point et formes indéterminées.', duration: '40 min', difficulty: 'Avancé', status: 'coming_soon', icon: '♾️' },
          { id: 'derivees-continuite', title: 'Dérivées', description: 'Dérivation avancée, continuité et théorème des valeurs intermédiaires.', duration: '35 min', difficulty: 'Avancé', status: 'coming_soon', icon: '📊' },
          { id: 'primitives-terminale', title: 'Primitives', description: 'Recherche de primitives usuelles et formes u\'u^n.', duration: '35 min', difficulty: 'Avancé', status: 'coming_soon', icon: '∫' },
          { id: 'integrales-terminale', title: 'Intégrales', description: 'Définition par l\'aire, intégration par parties et valeur moyenne.', duration: '45 min', difficulty: 'Avancé', status: 'coming_soon', icon: '∬' },
          { id: 'suites-recurrence', title: 'Suites', description: 'Démonstration par récurrence et limites de suites.', duration: '40 min', difficulty: 'Avancé', status: 'coming_soon', icon: '🧱' },
          { id: 'probabilites-binomiale', title: 'Probabilités', description: 'Épreuves de Bernoulli, schémas et loi binomiale B(n,p).', duration: '35 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🎲' },
          { id: 'fonction-exponentielle', title: 'Exponentielle', description: 'Définition, propriétés algébriques et dérivée de exp(x).', duration: '35 min', difficulty: 'Avancé', status: 'coming_soon', icon: '📈' }
        ]
      }
    ]
  },
  {
    id: 'brevet',
    title: 'Brevet',
    subtitle: 'Modules de révision & préparation au DNB',
    icon: '🎯',
    color: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50/50 border-amber-200',
    accentColor: 'text-amber-600',
    badgeBg: 'bg-amber-100 text-amber-700',
    grades: [
      {
        id: 'brevet-modules',
        name: 'Modules DNB',
        lessons: [
          { id: 'annales-brevet', title: 'Annales', description: 'Sujets officiels du DNB décortiqués étape par étape.', duration: '45 min', difficulty: 'Examen', status: 'coming_soon', icon: '📝' },
          { id: 'exercices-corriges-dnb', title: 'Exercices corrigés', description: 'Exercices d\'entraînement ciblés sur les notions clés du Brevet.', duration: '30 min', difficulty: 'Moyen', status: 'coming_soon', icon: '💡' },
          { id: 'sujets-blancs-dnb', title: 'Sujets blancs', description: 'Mettez-vous en condition réelle d\'examen.', duration: '2h', difficulty: 'Examen', status: 'coming_soon', icon: '⏱️' },
          { id: 'quiz-dnb-express', title: 'Quiz interactifs', description: 'Testez vos automatismes avec feedback instantané.', duration: '15 min', difficulty: 'Facile', status: 'coming_soon', icon: '⚡' }
        ]
      }
    ]
  },
  {
    id: 'bac',
    title: 'Bac',
    subtitle: 'Modules de révision & entraînement au Baccalauréat',
    icon: '🎓',
    color: 'from-purple-500 to-indigo-500',
    lightBg: 'bg-purple-50/50 border-purple-200',
    accentColor: 'text-purple-600',
    badgeBg: 'bg-purple-100 text-purple-700',
    grades: [
      {
        id: 'bac-modules',
        name: 'Modules Baccalauréat',
        lessons: [
          { id: 'annales-bac-spe', title: 'Annales', description: 'Sujets officiels corrigés avec exigences du Bac.', duration: '60 min', difficulty: 'Examen', status: 'coming_soon', icon: '📜' },
          { id: 'exercices-corriges-bac', title: 'Exercices corrigés', description: 'Résolutions rédigées type Bac Spécialité & Expertes.', duration: '40 min', difficulty: 'Avancé', status: 'coming_soon', icon: '🧠' },
          { id: 'methodes-bac', title: 'Méthodes', description: 'Fiches réflexes et rédactions modèles pour maximiser vos points.', duration: '25 min', difficulty: 'Moyen', status: 'coming_soon', icon: '🎯' },
          { id: 'quiz-bac-reflexes', title: 'Quiz', description: 'Révisions flash sur les définitions et théorèmes du Bac.', duration: '15 min', difficulty: 'Facile', status: 'coming_soon', icon: '⚡' },
          { id: 'revisions-bac', title: 'Révisions', description: 'Fiches synthétiques et cartes mentales pour les révisions finales.', duration: '30 min', difficulty: 'Moyen', status: 'coming_soon', icon: '📑' }
        ]
      }
    ]
  }
];
