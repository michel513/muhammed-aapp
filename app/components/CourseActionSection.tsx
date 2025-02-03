'use client';

import React from "react";
import ImageProfil from "@/public/photos/photo-de-profil.jpg";
import Image from "next/image";


import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export function CourseActionSection() {
  const router = useRouter();
  const courses = [
    {
      category: "YouTube Automation",
      title: "Formation 4K Pro YouTube",
      description: "Transformez votre passion pour YouTube en revenus passifs ! Notre formation complète vous guide pas à pas dans la création et l'automatisation de chaînes YouTube rentables.",
      price: "62€ / 40.000 Fcfa",
      instructor: "4K Pro Coach",
      href: "/formations/youtube-automation"
    },
    {
      category: "Coaching Privé",
      title: "4K Pro Coaching YouTube",
      description: "Accélérez votre progression avec un accompagnement personnalisé. Nos coachs experts vous guident dans la mise en place de votre stratégie YouTube automatisée.",
      price: "150€ / 100.000 Fcfa",
      instructor: "4K Pro Coach",
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
          Lancez votre chaîne YouTube
          <br />
          dès maintenant !
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
                  width={400}
                  height={300}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#1a1033] to-transparent"
                >
                  <div className="text-3xl font-bold text-white">
                    {course.title}
                  </div>
                  <div className="text-white text-xl">{course.price}</div>
                </motion.div>
              </div>
              <div className="p-6">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4"
                >
                  {course.category}
                </motion.span>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-gray-300 mb-6"
                >
                  {course.description}
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push(course.href)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition text-lg font-semibold"
                >
                  Je me lance maintenant
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}