'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Calendar,
    Users,
    CheckCircle,
    Star,
    Target,
    Zap,
    TrendingUp,
    MessageCircle,
} from 'lucide-react';
import Footer from '@/app/components/Footer';
import PricingCard from './_components/princing-card';
import { Navbar } from '@/app/components/Navbar';

import { SignupModalPrivate } from '@/app/components/signupModalPrivate';
import PromotionalCountdownPrivate from '@/app/components/PromotionalCountdownPrivate';


const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const benefits = [
    {
        title: "Sessions Personnalisées",
        description: "Coaching adapté à vos objectifs spécifiques et à votre niche YouTube avec suivi personnalisé",
        icon: Users
    },
    {
        title: "Suivi Régulier",
        description: "Points hebdomadaires pour suivre votre progression et ajuster la stratégie en temps réel",
        icon: Calendar
    },
    {
        title: "Expertise Dédiée",
        description: "Accès direct à un expert en automatisation YouTube avec plus de 5 ans d'expérience",
        icon: Star
    },
    {
        title: "Objectifs Ciblés",
        description: "Définition claire des KPIs et des objectifs de croissance pour votre chaîne",
        icon: Target
    },
    {
        title: "Optimisation Continue",
        description: "Amélioration constante basée sur l'analyse des données et des performances",
        icon: TrendingUp
    },
    {
        title: "Solutions Rapides",
        description: "Résolution rapide des problèmes et adaptation agile des stratégies",
        icon: Zap
    }
];

const features = [
    {
        title: "Audit Complet",
        points: [
            "Analyse approfondie de votre chaîne",
            "Identification des opportunités de croissance",
            "Évaluation de votre positionnement"
        ]
    },
    {
        title: "Stratégie d'Automatisation",
        points: [
            "Plan personnalisé d'automatisation",
            "Sélection des outils adaptés",
            "Formation aux meilleures pratiques"
        ]
    },
    {
        title: "Optimisation du Contenu",
        points: [
            "Amélioration des titres et miniatures",
            "Optimisation du référencement",
            "Stratégie de mots-clés"
        ]
    },
    {
        title: "Croissance de l'Audience",
        points: [
            "Techniques d'engagement",
            "Stratégies de fidélisation",
            "Développement communautaire"
        ]
    }
];

const testimonials = [
    {
        text: "Le coaching m'a permis de passer de 1000 à 10 000 abonnés en seulement 3 mois. Les stratégies d'automatisation ont complètement transformé ma façon de créer du contenu.",
        author: "Alexandre D.",
        role: "Créateur Tech",
        rating: 5
    },
    {
        text: "L'accompagnement personnalisé a été la clé de ma réussite. J'ai pu automatiser 80% de mon processus de création et multiplier mes revenus par 4.",
        author: "Sophie M.",
        role: "YouTubeuse Lifestyle",
        rating: 5
    }
];



export default function YouTubeAutomationCoaching() {

     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
      const handleModalClose = (): void => {
        setIsModalOpen(false);
      };

    const coachingFeatures = [
        "2 sessions de coaching privé par mois",
        "Accès illimité au support par email",
        "Audit mensuel de performance",
        "Accès aux outils premium",
        "Templates et ressources exclusives",
        "Garantie de satisfaction"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033]">
            {/* Hero Section */}
            <Navbar />
            <PromotionalCountdownPrivate />
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="pt-24 pb-20 px-4"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Devenez un Expert de
                        <span className="text-blue-400"> l&apos;Automatisation YouTube</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                        Transformez votre chaîne YouTube avec un accompagnement personnalisé
                        et des stratégies d&apos;automatisation qui ont fait leurs preuves auprès
                        de centaines de créateurs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                        >
                            Réserver Mon Coaching (150€) /100.000 fr
                        </motion.button>
                    </div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4 bg-black bg-opacity-30"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={fadeIn} className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                            <div className="text-gray-300">Créateurs Accompagnés</div>
                        </motion.div>
                        <motion.div variants={fadeIn} className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">85%</div>
                            <div className="text-gray-300">de Croissance Moyenne</div>
                        </motion.div>
                        <motion.div variants={fadeIn} className="text-center">
                            <div className="text-4xl font-bold text-blue-400 mb-2">30M+</div>
                            <div className="text-gray-300">Vues Générées</div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Pourquoi Choisir Notre Coaching ?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-navy-800 bg-opacity-50 p-6 rounded-xl hover:bg-opacity-70 transition-all"
                            >
                                <benefit.icon className="w-12 h-12 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-300">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Features Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4 bg-black bg-opacity-30"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Ce Que Vous Allez Apprendre
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white bg-opacity-5 p-6 rounded-xl"
                            >
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {feature.title}
                                </h3>
                                <ul className="space-y-3">
                                    {feature.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                            <span className="text-gray-300">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Ce Que Disent Nos Clients
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-white bg-opacity-5 p-8 rounded-xl"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-lg italic mb-4">
                                    {testimonial.text}
                                </p>
                                <div className="text-white font-semibold">
                                    {testimonial.author} - {testimonial.role}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Pricing Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4 bg-black bg-opacity-30"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Commencez Votre Transformation
                    </h2>
                    <PricingCard
                        price={150}
                        features={coachingFeatures}
                        onSelect={() => setIsModalOpen(true)}
                    />
                </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Questions Fréquentes
                    </h2>
                    <div className="space-y-6">
                        <motion.div variants={fadeIn} className="bg-white bg-opacity-5 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Combien de temps dure le programme de coaching ?
                            </h3>
                            <p className="text-gray-300">
                                Le programme initial est de 3 mois avec 2 sessions de coaching par mois.
                                Vous pouvez ensuite choisir de continuer avec un suivi mensuel selon vos besoins.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn} className="bg-white bg-opacity-5 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Comment se déroulent les sessions de coaching ?
                            </h3>
                            <p className="text-gray-300">
                                Les sessions se déroulent en visioconférence et durent 1h30.
                                Chaque session est enregistrée et vous est envoyée avec un récapitulatif
                                des points abordés et des actions à mettre en place.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn} className="bg-white bg-opacity-5 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Ai-je besoin d&apos;une chaîne existante ?
                            </h3>
                            <p className="text-gray-300">
                                Non, nous pouvons vous accompagner que vous ayez déjà une chaîne ou que vous partiez de zéro.
                                Le coaching sera adapté à votre situation et vos objectifs spécifiques.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn} className="bg-white bg-opacity-5 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Quels sont les prérequis techniques ?
                            </h3>
                            <p className="text-gray-300">
                                Vous aurez besoin d&apos;un ordinateur avec une connexion internet stable pour les sessions de coaching.
                                Nous vous guiderons pour l&apos;installation et l&apos;utilisation des outils d&apos;automatisation nécessaires.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn} className="bg-white bg-opacity-5 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Y a-t-il une garantie de résultats ?
                            </h3>
                            <p className="text-gray-300">
                                Bien que nous ne puissions pas garantir des résultats spécifiques, nous nous engageons à vous fournir
                                toutes les stratégies et outils qui ont fait leurs preuves auprès de centaines de créateurs.
                                Si vous n&apos;êtes pas satisfait après votre première session, nous vous remboursons intégralement.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4 bg-black bg-opacity-30"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Encore des Questions ?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        N&apos;hésitez pas à nous contacter pour en savoir plus sur notre programme de coaching
                    </p>
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                    >
                        <button
                            className="flex items-center space-x-2 bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg transition-colors"
                            onClick={() => window.location.href = 'mailto:muhammadbenyallib@gmail.com'}
                        >
                            <MessageCircle className="w-5 h-5" />
                            <span>muhammadbenyallib@gmail.com</span>
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Footer CTA */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="py-16 px-4"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        variants={fadeIn}
                        className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 rounded-2xl"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Prêt à Transformer Votre Chaîne YouTube ?
                        </h2>
                        <p className="text-xl text-white opacity-90 mb-8">
                            Rejoignez notre programme de coaching privé et bénéficiez d&apos;un accompagnement
                            personnalisé pour atteindre vos objectifs plus rapidement
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors"
                        >
                            Réserver Mon Coaching (150€)/ 100.000 fr
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>
            <PromotionalCountdownPrivate />
            <Footer />
            <SignupModalPrivate  isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
    );
}