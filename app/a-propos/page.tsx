'use client';

import React from 'react';
import { Trophy, Target, Users, Laptop, Star, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SignupModal } from '@/app/components/signupModal';

import { SignupModalPrivate } from '@/app/components/signupModalPrivate';

import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalPrivateOpen, setIsModalPrivateOpen] = useState(false);

  const [activeTab, setActiveTab] = useState('formation');
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalPrivateClose = () => {
    setIsModalPrivateOpen(false);
  };

  const achievements = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, title: "1000+", description: "Étudiants Formés" },
    { icon: <Star className="w-8 h-8 text-yellow-500" />, title: "4.9/5", description: "Note Moyenne" },
    { icon: <Trophy className="w-8 h-8 text-orange-500" />, title: "95%", description: "Taux de Réussite" },
    { icon: <Target className="w-8 h-8 text-green-500" />, title: "30", description: "Jours de Formation" }
  ];

  return (
    <div className="bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033]">
      <Navbar />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 pt-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À Propos de 4K Pro YouTube
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous sommes passionnés par l&apos;automatisation YouTube et déterminés à vous 
            aider à réussir dans votre voyage de créateur de contenu.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Offerings Section */}
        <div className="mb-16">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('formation')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'formation'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Formation (62€ / 40.000 Fcfa)
            </button>
            <button
              onClick={() => setActiveTab('coaching')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'coaching'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Coaching Privé (150€ / 100.000 Fcfa)
            </button>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            {activeTab === 'formation' ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  4K Pro YouTube Formation
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <GraduationCap className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <span>50+ leçons vidéo avec 40 heures de contenu pratique</span>
                  </li>
                  <li className="flex items-start">
                    <Laptop className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <span>Accès illimité à la plateforme de formation</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <span>Communauté privée d&apos;entraide entre créateurs</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalOpen(true)}
                  className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Commencer la Formation
                </motion.button>
              </div>
            ) : (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  4K Pro Coaching Privé YouTube
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <span>Accompagnement personnalisé one-to-one</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <span>Stratégie sur mesure pour votre chaîne</span>
                  </li>
                  <li className="flex items-start">
                    <Trophy className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <span>Suivi hebdomadaire de vos progrès</span>
                  </li>
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsModalPrivateOpen(true)}
                  className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
                >
                  Réserver un Coaching
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </div>
      <SignupModal isOpen={isModalOpen} onClose={handleModalClose} />
      <SignupModalPrivate  isOpen={isModalPrivateOpen} onClose={handleModalPrivateClose} />
      <Footer />
    </div>
  );
};

export default AboutSection;