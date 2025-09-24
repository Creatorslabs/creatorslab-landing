"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fuel, Clock } from "lucide-react";

function GasPass() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

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
        onClick={() => setIsOpen(true)}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-[#03ABFF] to-[#7985FF] text-white rounded-xl font-medium flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Clock size={18} />
        How it works
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background rounded-2xl p-6 max-w-sm mx-4 shadow-lg text-center"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                GasPass in Progress
              </h3>
              <p className="text-gray-400 mb-4">
                The GasPass feature is still under development. Our team is
                working to let you borrow gas instantly, claim your airdrops
                without fees, and repay later with a small cost. We are moving
                rapidly to make this available soon.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-2 px-4 py-2 bg-[#03ABFF] text-white rounded-lg font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GasPass;
