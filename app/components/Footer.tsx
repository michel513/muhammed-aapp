"use client";

import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { Icon: Instagram, href: "#" },
    { Icon: Youtube, href: "#" },
    { Icon: Linkedin, href: "#" }
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-t-[2rem] px-6 py-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="text-3xl font-bold">4K Pro YouTube</div>
            <div>
              <p className="text-gray-600 mb-4">Suivez-nous:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-800 hover:text-gray-600"
                  >
                    <social.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {['Nos Services', 'Ressources'].map((title, sectionIndex) => (
            <motion.div
              key={title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 * (sectionIndex + 1) }}
            >
              <h3 className="text-lg font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {[
                  ...(title === 'Nos Services'
                    ? ['Formation 4K Pro YouTube', 'Coaching Privé YouTube', 'Ressources Gratuites', 'Blog']
                    : ['Se connecter', 'FAQ', 'À propos', 'Contact']
                  )
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="md:col-span-4"
          >
            <div className="pt-8 border-t border-gray-200">
              <ul className="flex flex-wrap gap-6 text-gray-600">
                {['Politique de confidentialité', 'Mentions légales', 'CGV'].map((item, index) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a href="#" className="hover:text-gray-800">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
