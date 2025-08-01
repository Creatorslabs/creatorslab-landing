"use client";

import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer 
      className="w-full text-center text-sm text-gray-500 dark:text-gray-400 py-6 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <motion.span 
          className="font-semibold dark:text-white"
          whileHover={{ color: "#5D3FD1" }}
          transition={{ duration: 0.3 }}
        >
          Creators Lab
        </motion.span>
        . All rights reserved.
      </motion.p>
    </motion.footer>
  );
}

export default Footer;