import { Star } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

import { TestimonialType } from '@/types';

interface TestimonialProps {
  testimonial: TestimonialType
}

export function TestimonialCard({testimonial}: TestimonialProps) {

  // Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

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

const statsItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Card className="bg-[#2a1f43] border-0 hover:shadow-lg transition-shadow duration-300">
        <motion.div 
          className="p-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div 
            className="flex items-center mb-4"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="ml-4">
              <h3 className="text-white font-semibold">{testimonial.name}</h3>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
                <motion.span 
                  className="text-gray-400 text-sm ml-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {testimonial.date}
                </motion.span>
              </div>
            </div>
          </motion.div>

          <motion.h4 
            className="text-xl font-bold text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {testimonial.title}
          </motion.h4>
          
          <motion.p 
            className="text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {testimonial.text}
          </motion.p>

          <motion.div 
            className="grid grid-cols-3 gap-4 mb-6"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Object.entries(testimonial.stats).map(([key, value]) => (
              <motion.div
                key={key}
                variants={statsItemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1a1033] p-4 rounded-lg text-center"
              >
                <div className="text-blue-500 font-bold">{value}</div>
                <div className="text-sm text-gray-400">
                  {key === 'subscribers' ? 'Abonnés' :
                    key === 'revenue' ? 'Revenus' : 'Chaînes'}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="relative aspect-video mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center">
              <Image
                src={testimonial.video}
                alt="Résultats"
                width={400}
                height={400}
                className="rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}