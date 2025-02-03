"use client";

import React from "react";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      icon: "automated",
      title: "Automatisation Complète",
      description: "Apprenez à automatiser la création, la publication et la monétisation de vos contenus YouTube pour générer des revenus passifs."
    },
    {
      icon: "strategy",
      title: "Stratégie Éprouvée",
      description: "Une méthode pas à pas pour créer des chaînes YouTube rentables, optimisées pour la croissance et la monétisation."
    },
    {
      icon: "coaching",
      title: "Coaching Personnalisé",
      description: "Bénéficiez d'un accompagnement individuel pour accélérer votre progression et éviter les erreurs courantes."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1033] py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          Notre Méthode d&apos;Excellence
        </motion.h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#2a1f43] rounded-2xl p-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
                className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6"
              >
                <span className="text-blue-500 text-2xl">
                  {feature.icon === 'automated' && '🤖'}
                  {feature.icon === 'strategy' && '📈'}
                  {feature.icon === 'coaching' && '🎯'}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}