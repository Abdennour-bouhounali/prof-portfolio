# Infrastructure des Leçons HTML & Métadonnées

Ce répertoire abrite l'ensemble des leçons de mathématiques générées sous forme de pages HTML indépendantes.

## Structure de chaque leçon

Chaque leçon réside dans son propre sous-dossier et contient impérativement les 3 fichiers suivants :

```
/public/lessons/[niveau]/[slug-de-la-lecon]/
├── index.html       # La leçon HTML interactive autonome
├── thumbnail.webp   # Illustration / Miniature (format WebP)
└── metadata.json    # Métadonnées de la leçon (titre, chapitre, mots-clés)
```

## Spécification du fichier `metadata.json`

```json
{
  "title": "Les Équations du Second Degré",
  "slug": "equations-second-degre",
  "level": "Lycée",
  "chapter": "Algèbre & Fonctions",
  "duration": "45 min",
  "description": "Apprendre à résoudre ax² + bx + c = 0 à l'aide du discriminant Delta et interpréter les solutions graphiquement.",
  "keywords": ["second degré", "discriminant", "delta", "polynôme", "racines"]
}
```

## Niveaux supportés

- `college/` : Cours du Collège (6ème à 3ème)
- `lycee/` : Cours du Lycée (Seconde, 1ère Spé Maths, Terminale Spé/Expertes)
- `brevet/` : Annales et modules de révision spécifiques au Brevet (DNB)
- `bac/` : Annales et modules de révision spécifiques au Baccalauréat (Spé Maths & Expertes)
