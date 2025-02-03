'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SignupModal } from '@/app/components/signupModal';

export const ProgramContent = () => {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  const modules = [
    {
      title: "Module 1 | Stratégie de Contenu YouTube",
      details: [
        "Analyse approfondie du marché YouTube",
        "Définition de votre niche et positionnement",
        "Création de persona de spectateur",
        "Stratégies de contenu à fort engagement"
      ]
    },
    {
      title: "Module 2 | Outils d'Automatisation et Gestion",
      details: [
        "Présentation des meilleurs outils d'automatisation",
        "Gestion de planning de contenu",
        "Automatisation des publications",
        "Outils de gestion de communauté"
      ]
    },
    {
      title: "Module 3 | Algorithme YouTube et SEO",
      details: [
        "Comprendre l'algorithme YouTube",
        "Optimisation des titres et miniatures",
        "Techniques de référencement avancées",
        "Analyse des metrics de performance"
      ]
    },
    {
      title: "Module 4 | Monétisation et Partenariats",
      details: [
        "Stratégies de monétisation YouTube",
        "Négociation avec des marques",
        "Création de partenariats rentables",
        "Diversification des revenus"
      ]
    },
    {
      title: "Module 5 | Marketing et Croissance de Chaîne",
      details: [
        "Stratégies de cross-platform marketing",
        "Création de communauté engagée",
        "Techniques de growth hacking",
        "Publicité et promotion efficace"
      ]
    },
    {
      title: "Module 6 | Scripts et Édition Automatisée",
      details: [
        "Conception de scripts performants",
        "Outils d'édition automatique",
        "Techniques de montage rapide",
        "Optimisation du workflow de création"
      ]
    }
  ];

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const moduleAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const contentAnimation = {
    hidden: { height: 0, opacity: 0 },
    show: { 
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033] py-16"
    >
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Parcourez le programme !
        </motion.h2>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="space-y-4 mb-16"
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={moduleAnimation}
              className="bg-navy-800 bg-opacity-50 rounded-lg overflow-hidden"
            >
              <motion.div
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                className="p-4 flex items-center justify-between text-white cursor-pointer transition-all rounded-lg"
              >
                <div className="flex items-center">
                  <span className="text-xl font-bold mr-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{module.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: expandedModule === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {expandedModule === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {expandedModule === index && (
                  <motion.div
                    variants={contentAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-gray-300">
                      <ul className="list-disc pl-5 space-y-2">
                        {module.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Transformez votre <span className="text-blue-400">Chaîne YouTube</span>
          </h3>
          <p className="text-gray-300 mb-8">
            4K Pro YouTube est la formation ultime pour maîtriser l&apos;automatisation
            et la croissance de votre chaîne, avec des stratégies éprouvées.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <span>Rejoindre la Formation maintenant ! 62€ / 40.000 Fcfa</span>
          </motion.button>
        </motion.div>
      </div>
      <SignupModal isOpen={isModalOpen} onClose={handleModalClose} />
    </motion.div>
  );
};