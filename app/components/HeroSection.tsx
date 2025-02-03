'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ImageProfil from "@/public/photos/photo-de-profil-2.jpg";

export function HeroSection() {
  const route = useRouter();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033] pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Devenez un YouTubeur à succès avec l&apos;automatisation
            </h1>
            <div className="flex items-center mb-6">
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="text-white mr-2"
              >
                Formation certifiée
              </motion.span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-white mr-2"
              >
                4.9 sur 5 ★
              </motion.span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="text-white ml-2"
              >
                +1000 élèves satisfaits
              </motion.span>
            </div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-300 text-lg mb-8"
            >
              Apprenez à créer, automatiser et monétiser votre chaîne YouTube avec nos formations 
              professionnelles et notre coaching personnalisé.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => route.push("/formations/youtube-automation")}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition"
              >
                Formation 4K Pro YouTube - 62€ / 40.000 Fcfa au lieu 150€ / 100.000 Fcfa
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => route.push("/formations/youtube-automation-coaching-private")}
                className="w-full sm:w-auto bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition"
              >
                Coaching Privé - 150€ / 100.000 Fcfa au lieu  450€ / 295.000 Fcfa
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <div className="bg-[#2a1f43] p-6 rounded-lg">
              <Image
                src={ImageProfil}
                alt="YouTube Success"
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
