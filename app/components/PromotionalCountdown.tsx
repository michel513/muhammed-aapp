'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


import { SignupModal } from '@/app/components/signupModal';

const PromotionalCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 11,
    seconds: 24
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalClose = (): void => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = prevTime.seconds - 1;
        let newMinutes = prevTime.minutes;
        let newHours = prevTime.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-gradient-to-br from-[#1a1033] via-[#2a1f43] to-[#1a1033] py-8 px-4 pt-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mb-8"
        >
          NE RATE PAS CETTE CHANCE, L&apos;OFFRE PROMOTIONNELLE 70% S&apos;EXPIRE DANS QUELQUES HEURES
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <h3 className="text-xl text-white mb-6">Cette Offre disparaît dans :</h3>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 w-24">
                <span className="text-3xl font-bold text-blue-500">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white mt-2">HEURES</span>
            </div>

            <span className="text-3xl font-bold text-white">:</span>

            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 w-24">
                <span className="text-3xl font-bold text-blue-500">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white mt-2">MINUTES</span>
            </div>

            <span className="text-3xl font-bold text-white">:</span>

            <div className="flex flex-col items-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 w-24">
                <span className="text-3xl font-bold text-blue-500">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
              <span className="text-white mt-2">SECONDES</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
          >
            Profiter de l&apos;Offre Maintenant
          </motion.button>
        </motion.div>
      </div>
      <SignupModal isOpen={isModalOpen} onClose={handleModalClose} />
    </motion.div>
  );
};

export default PromotionalCountdown;