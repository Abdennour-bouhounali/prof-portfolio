import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Où se déroulent les cours à domicile ?",
    answer: "Les cours à domicile ont lieu à Toulouse et dans son agglomération proche. Je me déplace également à Paris pour des stages intensifs pendant les vacances scolaires."
  },
  {
    question: "Comment fonctionnent les cours en ligne ?",
    answer: "Les cours en ligne s'effectuent via visioconférence HD avec un tableau blanc interactif virtuel. L'élève voit l'écriture des équations en temps réel. À la fin de chaque séance, le support complet (notes de cours, schémas GeoGebra et exercices résolus) est envoyé au format PDF."
  },
  {
    question: "Quels niveaux enseignez-vous ?",
    answer: "J'enseigne du Collège (6ème à 3ème / préparation au Brevet des collèges) au Lycée (Seconde, Première Spé Maths, Terminale Spécialité & Maths Expertes pour le Bac). J'accompagne également des étudiants du supérieur sur les bases d'analyse et d'algèbre."
  },
  {
    question: "Proposez-vous un premier cours d'évaluation ?",
    answer: "Oui ! La première séance permet de réaliser un diagnostic complet des compétences, d'évaluer les lacunes éventuelles et de fixer une feuille de route claire avec l'élève et ses parents."
  },
  {
    question: "Comment les parents sont-ils informés de la progression ?",
    answer: "Un bilan synthétique est transmis aux parents après chaque séance (notions travaillées, comportement de l'élève, points forts et axes d'amélioration). Les parents peuvent me contacter à tout moment pour échanger."
  },
  {
    question: "Quels sont les tarifs et modalités de paiement ?",
    answer: "Les tarifs varient selon le niveau de l'élève (Collège, Lycée, Supérieur) et la formule choisie (à domicile ou en ligne). Vous pouvez me contacter directement pour obtenir un devis rapide et personnalisé."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="section-wrapper">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono-jetbrains text-blue-500 text-sm font-semibold tracking-widest uppercase mb-3">
            08. Questions fréquentes
          </p>
          <h2 className="section-title">Foire Aux Questions (FAQ)</h2>
          <p className="section-subtitle">
            Toutes les réponses aux questions que vous vous posez sur les cours, les tarifs et les modalités.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-space font-bold text-slate-800 text-base sm:text-lg hover:text-blue-600 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-blue-500 flex-shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 font-inter text-slate-600 text-sm leading-relaxed border-t border-slate-100/60">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
