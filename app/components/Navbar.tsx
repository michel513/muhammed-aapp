"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Formation" },
    { href: "/temoignages", label: "Témoignages" },
    { href: "/a-propos", label: "À propos" }
  ];

  const menuVariants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1033] px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => router.push("/")}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          4K Pro YouTube
        </motion.div>

        {/* Hamburger Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex flex-col justify-center items-center w-6 h-6">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-white mb-1.5"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-white mb-1.5"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-white"
            />
          </div>
        </motion.button>

        {/* Menu Mobile - Affichage vertical */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 w-full bg-[#1a1033] flex flex-col items-center py-4 space-y-4"
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  onClick={() => {
                    setIsOpen(false);
                    router.push(item.href);
                  }}
                  className="text-white hover:text-gray-300 cursor-pointer py-2 w-full text-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-purple-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
