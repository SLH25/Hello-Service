// src/components/ServicePage/ServicesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Laptop, ShoppingBag, Globe, HeartHandshake, Briefcase } from "lucide-react"; 

type Service = {
  name: string;
  description: string;
  icon: React.ElementType;
};

const services: Service[] = [
  { name: "Réparations", description: "Plomberie, électricité et maintenance rapide.", icon: Wrench },
  { name: "Informatique", description: "Support technique et développement sur mesure.", icon: Laptop },
  { name: "E-commerce", description: "Boutiques en ligne et solutions de paiement.", icon: ShoppingBag },
  { name: "Marketing", description: "Boostez votre visibilité avec nos experts.", icon: Globe },
  { name: "Consulting", description: "Accompagnement professionnel et stratégique.", icon: Briefcase },
  { name: "Bien-être", description: "Coaching, santé et accompagnement personnel.", icon: HeartHandshake },
];

const ServiceSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent"
          >
            Nos principaux services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            Découvrez nos solutions adaptées pour répondre à vos besoins.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ name, description, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mb-4">
                <Icon className="w-7 h-7 text-white" />
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
