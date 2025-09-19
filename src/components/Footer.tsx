"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook, Youtube, Instagram, Twitter, Linkedin } from "lucide-react";

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

      <motion.div
        className="flex justify-center gap-4 mt-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <Facebook size={18} />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600"
        >
          <Youtube size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <Instagram size={18} />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
        >
          <Twitter size={18} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <Linkedin size={18} />
        </a>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
