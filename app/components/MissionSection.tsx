'use client';

import { motion } from "framer-motion";
import React from "react";

export function MissionSection() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1033] py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4"
          >
            {[
              {
                title: "Formation YouTube",
                items: ["Stratégie de contenu", "Optimisation SEO", "Automatisation des processus", "Monétisation avancée"],
                price: "62€ / 40.000 Fcfa"
              },
              {
                title: "Coaching Privé",
                items: ["Accompagnement personnalisé", "Analyse de votre chaîne", "Plan d'action sur mesure", "Suivi des résultats"],
                price: "150€ / 100.000 Fcfa"
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#2a1f43] p-4 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                <ul className="text-gray-300 space-y-2">
                  {card.items.map((item, i) => (
                    <li key={i}>✓ {item}</li>
                  ))}
                </ul>
                <div className="mt-4 text-center text-white font-bold">
                  {card.price}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Notre <span className="text-blue-500">expertise</span>
            </h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-300 mb-6"
            >
              Nous vous accompagnons dans la création et l&apos;automatisation de votre chaîne YouTube 
              avec des stratégies éprouvées.
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300"
            >
              Rejoignez notre communauté de créateurs de contenu et bénéficiez de notre 
              expertise pour développer votre présence sur YouTube.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}