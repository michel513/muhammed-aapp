"use client";

import React from "react";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Thomas M.",
      date: "15/01/2024",
      text: "Grâce à la formation, j'ai pu créer 3 chaînes YouTube automatisées qui génèrent maintenant plus de 2000€/mois passifs!"
    },
    {
      name: "Sarah K.",
      date: "10/01/2024",
      text: "Le coaching privé m'a permis d'atteindre les 100K abonnés en seulement 6 mois. La stratégie d'automatisation est vraiment efficace."
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
          className="text-4xl font-bold text-center text-white mb-8"
        >
          Ils ont réussi avec <span className="text-blue-500">4K Pro YouTube</span>
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          <span className="text-white mr-2">Excellent</span>
          <span className="text-white mr-2">4.9 sur 5</span>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-yellow-400"
          >
            ★
          </motion.span>
          <span className="text-white ml-2">+500 élèves satisfaits</span>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#2a1f43] rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.2 }}
                  className="w-12 h-12 bg-gray-600 rounded-full mr-4"
                />
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.date}</div>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
