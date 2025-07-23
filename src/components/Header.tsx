"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.div
      className="flex justify-between items-center py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
        <Link href="/" className="flex flex-row gap-2 items-center">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.2 }}
          >
            <Image
              src="/images/logo.png"
              width={30}
              height={30}
              alt="CreatorsLab logo"
            />
          </motion.div>
          <p className="text-lg">Creatorslab</p>
        </Link>
      </motion.div>
      <motion.div
        className="flex items-center justify-center gap-2 flex-row"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://app.creatorslab.cc/"
            className="rounded-lg py-2 px-4 bg-gradient-to-br from-primary to-secondary text-sm text-white hover:shadow-lg transition-all duration-300"
          >
            Get started
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
