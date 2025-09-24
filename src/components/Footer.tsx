"use client";

import React from "react";
import { motion } from "framer-motion";
import { Twitter, Mail } from "lucide-react";
import { SiMedium, SiTelegram, SiDiscord } from "react-icons/si";

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
        className="flex justify-center gap-5 mt-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://medium.com/@creatorslabseed"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white"
        >
          <SiMedium size={20} />
        </a>
        <a
          href="https://discord.gg/HQb4BvhF"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600"
        >
          <SiDiscord size={22} />
        </a>
        <a
          href="https://x.com/creatorslabseed?t=yE69EEdVnMnsYQTaAHdA2w&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300"
        >
          <Twitter size={20} />
        </a>
        <a
          href="mailto:Creatorslabseed@gmail.com"
          className="hover:text-red-600"
        >
          <Mail size={20} />
        </a>
        <a
          href="https://t.me/+af4HKT5oss81MTQ0"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500"
        >
          <SiTelegram size={22} />
        </a>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
