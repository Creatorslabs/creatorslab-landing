"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Sponsor() {
  return (
    <motion.div 
      className="text-center px-4 py-10 flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p 
        className="text-lg text-gray-600 dark:text-gray-400 font-medium"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Powered by:
      </motion.p>
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/Group.png"
            alt="Solana Foundation"
            width={120}
            height={60}
            className="h-auto object-contain"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/st-light.png"
            alt="Superteam NG"
            width={120}
            height={60}
            className="h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Sponsor;