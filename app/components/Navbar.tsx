"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  const navItems = [
    { href: "/", label: "Formation" },
    { href: "/temoignages", label: "Témoignages" },
    { href: "/a-propos", label: "À propos" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1033] px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => router.push("/")}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          4K Pro YouTube
        </motion.div>
        <div className="hidden lg:flex space-x-8">
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
