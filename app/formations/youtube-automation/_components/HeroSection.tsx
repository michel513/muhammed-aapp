'use client';

import { PlayCircle, Users, Laptop, Star } from 'lucide-react';
import ImageProfil from "@/public/photos/photo-de-profil-2.jpg";
import Image from "next/image";
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SignupModal } from '@/app/components/signupModal';
import PromotionalCountdown from '@/app/components/PromotionalCountdown';

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033] min-h-screen mt-10"
    >      
      <PromotionalCountdown />
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-white mb-8 md:mb-0"
        >
          <motion.h1 
            {...fadeInUp}
            className="text-5xl font-bold mb-6"
          >
            Maîtrisez l&apos;Automatisation YouTube en 30 Jours
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center mb-4"
          >
            <span className="mr-2">Excellent</span>
            <span className="font-bold mr-2">4.9 sur 5</span>
            <Star className="w-5 h-5 text-green-400" />
          </motion.div>

          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-gray-200 mb-8 mr-7"
          >
            4K Pro YouTube : Formation complète pour automatiser votre chaîne,
            augmenter vos revenus et libérer votre potentiel de créateur !
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors flex items-center space-x-2"
            >
              <span>Rejoindre la Formation maintenant ! 62€ / 40.000 Fcfa  </span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <Image
            src={ImageProfil}
            alt="Formation YouTube Automation"
            className="rounded-lg w-full"
          />
        </motion.div>
      </div>

      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white border-t border-gray-700"
      >
        {[
          { icon: <PlayCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />, title: "50+ Leçons", subtitle: "en vidéo (40h)" },
          { icon: <Laptop className="w-12 h-12 mx-auto mb-4 opacity-80" />, title: "Accès illimité", subtitle: "et immédiat" },
          { icon: <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />, title: "15+ Experts", subtitle: "YouTube Marketing" }
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
          >
            {item.icon}
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
      <SignupModal isOpen={isModalOpen} onClose={handleModalClose} />
    </motion.div>
  );
};