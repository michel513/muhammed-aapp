'use client';

import React, { useState } from 'react';
import { Minus, PlayCircle, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import ImageProfil from "@/public/photos/photo-de-profil.jpg";
import Image from "next/image";
import { SignupModal } from '@/app/components/signupModal';


export const ProgramSection = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };
  
  const [openQuestionId, setOpenQuestionId] = useState<number | null>(null);

  const faqs = [
    {
        question: "Qu'est-ce que l'automatisation YouTube ?",
        answer: "L'automatisation YouTube est un ensemble de stratégies et d'outils permettant de :\n- Optimiser la création et la publication de contenu\n- Gérer efficacement votre chaîne sans perdre de temps\n- Utiliser des logiciels pour planifier, éditer et analyser vos vidéos\n- Maximiser votre productivité et votre croissance sur la plateforme"
    },
    {
        question: "Qui peut suivre la formation ?",
        answer: "La formation est adaptée à :\n- Créateurs YouTube débutants\n- Youtubeurs expérimentés souhaitant optimiser leur chaîne\n- Entrepreneurs voulant développer une présence vidéo\n- Freelances et professionnels du marketing digital\n- Étudiants et personnes en reconversion professionnelle"
    },
    {
        question: "Quels sont les avantages du coaching ?",
        answer: "Le coaching privé offre :\n- Suivi personnalisé par un expert YouTube\n- Analyse détaillée de votre chaîne actuelle\n- Stratégies adaptées à votre niche\n- Conseils sur mesure pour accélérer votre croissance\n- Accompagnement direct et personnalisé"
    },
    {
        question: "Comment fonctionne la formation ?",
        answer: "La formation comprend :\n- 50+ leçons vidéo (40h de contenu)\n- Modules progressifs et structurés\n- Accès illimité au contenu\n- Supports et ressources téléchargeables\n- Communauté et support technique"
    },
    {
        question: "Quels résultats puis-je attendre ?",
        answer: "Résultats potentiels :\n- Augmentation des vues et abonnés\n- Optimisation de votre stratégie de contenu\n- Monétisation améliorée de votre chaîne\n- Maîtrise des outils d'automatisation\n- Gain de temps dans la gestion de votre chaîne"
    },
    {
        question: "Comment accéder au contenu ?",
        answer: "Accès en 3 étapes :\n1. Choisissez votre formule (Formation ou Coaching)\n2. Procédez au paiement sécurisé\n3. Recevez immédiatement vos identifiants de connexion"
    }
];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-blue-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between mb-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
              Formation Avancée en Automatisation YouTube
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Découvrez 4K Pro YouTube, une formation complète pour booster 
              votre chaîne en moins d&apos;un mois. Que vous soyez débutant ou 
              créateur expérimenté, apprenez à automatiser votre contenu, 
              optimiser votre croissance et maximiser vos revenus.
            </p>
            <div className="flex space-x-4">
              <motion.button 
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center space-x-2"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Rejoindre la Formation maintenant ! 62€ / 40.000 Fcfa </span>
              </motion.button>
            </div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image 
              src={ImageProfil}
              alt="YouTube Automation"
              className="max-w-xs rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>

        <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
          À propos de 4K Pro YouTube...
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <motion.button 
                onClick={() => setOpenQuestionId(openQuestionId === index ? null : index)}
                whileHover={{ backgroundColor: '#f3f4f6' }}
                className="flex items-center justify-between w-full p-5 bg-gray-50 hover:bg-gray-100 text-left"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openQuestionId === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openQuestionId === index ? (
                    <Minus className="w-6 h-6 text-gray-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openQuestionId === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white">
                      <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <SignupModal isOpen={isModalOpen} onClose={handleModalClose} />
    </motion.div>
  );
};
