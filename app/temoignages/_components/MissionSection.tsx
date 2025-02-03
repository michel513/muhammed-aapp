import { motion } from "framer-motion";

export function MissionSection() {

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

  const stats = [
    { value: "500+", label: "Élèves" },
    { value: "100K+", label: "Abonnés cumulés" },
    { value: "2M€+", label: "Revenus générés" },
    { value: "4.9/5", label: "Satisfaction" },
    { value: "30+", label: "Chaînes créées" }
  ];

  return (
    <div className="bg-[#1a1033] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#2a1f43] p-4 rounded-lg text-center"
                >
                  <div className="text-blue-500 text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Notre Mission
            </h2>
            <motion.p 
              className="text-gray-300 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Nous formons la nouvelle génération de créateurs YouTube à générer des revenus passifs grâce à des chaînes automatisées et évolutives.
            </motion.p>
            <motion.ul 
              className="space-y-4 text-gray-300"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Des formations concrètes basées sur des résultats prouvés",
                "Un accompagnement personnalisé pour maximiser vos chances de réussite",
                "Une communauté active de créateurs qui s'entraident"
              ].map((text, i) => (
                <motion.li 
                  key={i}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <span className="text-blue-500 mr-2">•</span>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
