"use client";

import React from "react";
import { motion } from "framer-motion";
import { Fuel, Clock } from "lucide-react";

function GasPass() {
  return (
    <div className="relative px-4 py-16 md:px-14 flex flex-col items-center gap-6 text-center">
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-syne leading-tight max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Claim airdrops without gas fees
      </motion.h2>

      <motion.p
        className="text-base sm:text-lg text-gray-500 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Use GasPass to borrow gas instantly. Repay later with a small fee.
      </motion.p>

      <motion.div
        className="flex flex-col items-center gap-3"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Fuel size={42} className="text-[#03ABFF]" />
        <p className="text-base text-gray-400">Claim now, repay later.</p>
      </motion.div>

      <motion.button
        disabled
        className="mt-6 px-6 py-3 bg-gradient-to-r from-[#03ABFF] to-[#7985FF] text-white rounded-xl font-medium flex items-center gap-2 opacity-70 cursor-not-allowed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Clock size={18} />
        How it works – Coming Soon
      </motion.button>
    </div>
  );
}

export default GasPass;
