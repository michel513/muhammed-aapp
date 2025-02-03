"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function RevenusSection() {
  return (
    <div className="bg-[#1a1033] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="lg:w-1/2 grid grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="aspect-square bg-[#2a1f43] rounded-xl overflow-hidden"
              >
                <Image
                  src={`/photos/state-${i + 1}.jpeg`}
                  alt={`state ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Nos <span className="text-blue-500">statistiques</span>
            </h2>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Nos formations sont suivies par des milliers de personnes et conçues par plus de 30 experts francophones. Nous vous aidons à transformer votre chaîne YouTube en un outil puissant de succès et d&apos;accomplissement.
            </motion.p>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Rejoignez-nous pour une expérience unique d&apos;apprentissage et de coaching entièrement automatisé, conçu pour vous faire passer au niveau supérieur.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
