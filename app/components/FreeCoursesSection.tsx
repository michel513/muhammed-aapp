'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import ImageProfil from "@/public/photos/photo-de-profil.jpg";
import Image from "next/image";

import { motion } from 'framer-motion';

const FreeCoursesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      title: "Débuter sur YouTube",
      description: "Découvrez les fondamentaux pour créer une chaîne YouTube qui cartonne. Apprenez les bases de l'automatisation et de la monétisation.",
      href: "https://youtu.be/n6KSGMVrbxk"
    },
    {
      title: "Secrets de Monétisation",
      description: "Maîtrisez les différentes sources de revenus sur YouTube et découvrez comment maximiser vos gains grâce à l'automatisation.",
      href: "https://youtu.be/n6KSGMVrbxk"
    },
    {
      title: "Optimisation SEO YouTube",
      description: "Apprenez à optimiser vos vidéos pour le référencement YouTube et augmentez votre visibilité naturellement.",
      href: "https://youtu.be/n6KSGMVrbxk"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-16 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 mb-2"
        >
          Vous voulez tester avant de vous lancer ?
        </motion.p>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl font-bold text-center text-navy-900 mb-4"
        >
          Nos ressources <span className="text-blue-500">gratuites</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Découvrez nos mini-formations gratuites pour apprendre les bases de YouTube, 
          de l&apos;automatisation et de la monétisation. Commencez votre journey vers le succès !
        </motion.p>

        <div className="relative">
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="overflow-hidden mx-12">
              <motion.div
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex items-center justify-center"
              >
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="w-full md:w-1/2 flex-shrink-0 px-4"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={ImageProfil}
                        alt={course.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                        <p className="text-gray-600 mb-6">{course.description}</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(course.href, "_blank")}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors w-full"
                        >
                          Accéder gratuitement
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {courses.map((_, index) => (
              <motion.button
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FreeCoursesSection