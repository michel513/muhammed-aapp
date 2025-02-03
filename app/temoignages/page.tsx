'use client';

import React, { useState } from 'react';
import { FilterTabs } from './_components/FilterTabs';
import { CTASection } from './_components/CTASection';
import { TestimonialCard } from './_components/TestimonialCard';
import { MissionSection } from './_components/MissionSection';
import { Navbar } from '../components/Navbar';
import Resultat from "@/public/photos/resultat-1.jpg";
import Resultat2 from "@/public/photos/resultat-2.jpg";
import Resultat3 from "@/public/photos/resultat-3.jpg";
import Resultat4 from "@/public/photos/resultat-4.jpg";
import { RevenusSection } from './_components/RevenuSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function TemoignagesPage() {

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const [selectedFilter, setSelectedFilter] = useState('all');

  const testimonials = [
    {
      name: "Thomas Martin",
      date: "15/01/2024",
      rating: 5,
      type: "formation",
      title: "De 0 à 100K abonnés en 6 mois!",
      text: "La formation 4K Pro YouTube a complètement transformé ma vie. J'ai suivi la méthode d'automatisation pas à pas et aujourd'hui je gère 3 chaînes qui génèrent plus de 2000€/mois chacune. Le support est incroyable et la communauté très active.",
      stats: {
        subscribers: "100K",
        revenue: "6000€/mois",
        channels: 3
      },
      video: Resultat
    },
    {
      name: "Sarah Klein",
      date: "10/01/2024",
      rating: 5,
      type: "coaching",
      title: "Le coaching qui a tout changé",
      text: "Le coaching privé m'a permis d'éviter des mois d'erreurs. Mon coach m'a guidé dans la création de ma chaîne automatisée et m'a aidé à atteindre la monétisation en seulement 2 mois. L'investissement en valait vraiment la peine!",
      stats: {
        subscribers: "45K",
        revenue: "3500€/mois",
        channels: 2
      },
      video: Resultat2
    },
    {
      name: "Thomas Martin",
      date: "15/01/2024",
      rating: 5,
      type: "formation",
      title: "De 0 à 100K abonnés en 6 mois!",
      text: "La formation 4K Pro YouTube a complètement transformé ma vie. J'ai suivi la méthode d'automatisation pas à pas et aujourd'hui je gère 3 chaînes qui génèrent plus de 2000€/mois chacune. Le support est incroyable et la communauté très active.",
      stats: {
        subscribers: "100K",
        revenue: "6000€/mois",
        channels: 3
      },
      video: Resultat3
    },
    {
      name: "Sarah Klein",
      date: "10/01/2024",
      rating: 5,
      type: "coaching",
      title: "Le coaching qui a tout changé",
      text: "Le coaching privé m'a permis d'éviter des mois d'erreurs. Mon coach m'a guidé dans la création de ma chaîne automatisée et m'a aidé à atteindre la monétisation en seulement 2 mois. L'investissement en valait vraiment la peine!",
      stats: {
        subscribers: "45K",
        revenue: "3500€/mois",
        channels: 2
      },
      video: Resultat4
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033] min-h-screen">
      <Navbar />
      <RevenusSection />
      <FilterTabs onFilterChange={setSelectedFilter} />
      <motion.div 
        className="max-w-7xl mx-auto px-6 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={statsContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials
            .filter(t => selectedFilter === 'all' || t.type === selectedFilter)
            .map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </motion.div>
      </motion.div>
      <MissionSection />
      <CTASection />
      <Footer />
    </div>
  );
}