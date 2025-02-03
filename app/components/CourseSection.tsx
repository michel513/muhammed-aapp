'use client';

import React from "react";
import ImageProfil from "@/public/photos/photo-de-profil.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function CourseSection() {
  const router = useRouter();
  const courses = [
    {
      category: "YouTube Automation",
      title: "Formation 4K Pro YouTube",
      description: "Maîtrisez l'art de l'automatisation YouTube et créez des chaînes rentables. Apprenez les stratégies qui fonctionnent en 2024 pour générer des revenus passifs.",
      instructor: "4K Pro Coach",
      price: "62€ / 40.000 Fcfa",
      href: "/formations/youtube-automation"
    },
    {
      category: "Coaching Privé",
      title: "4K Pro Coaching Privé YouTube",
      description: "Un accompagnement personnalisé pour accélérer votre croissance sur YouTube. Bénéficiez de l'expertise de nos coachs pour atteindre vos objectifs plus rapidement.",
      instructor: "4K Pro Coach",
      price: "150€ / 100.000 Fcfa",
      href: "/formations/youtube-automation-coaching-private"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033] py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Des <span className="text-blue-500">formations</span> conçues pour
          réussir sur YouTube
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-[#2a1f43] rounded-xl overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={ImageProfil}
                  alt={course.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#1a1033] to-transparent">
                  <div className="text-2xl font-bold text-white">
                    {course.title}
                  </div>
                  <div className="text-white">{course.price}</div>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4">
                  {course.category}
                </span>
                <p className="text-gray-300 mb-6">{course.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push(course.href)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                  En savoir plus
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
