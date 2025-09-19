"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <motion.div
      className="relative m-6 md:m-8 rounded-lg overflow-hidden bg-black"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Frame 44.png"
          alt="creator-background"
          fill
          className="object-cover object-center opacity-60"
          loading="lazy"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#5D3FD1] via-[#03ABFF] to-[#F4B30C] mix-blend-soft-light opacity-80"
          animate={{
            background: [
              "linear-gradient(45deg, #5D3FD1, #03ABFF, #F4B30C)",
              "linear-gradient(90deg, #03ABFF, #F4B30C, #5D3FD1)",
              "linear-gradient(135deg, #F4B30C, #5D3FD1, #03ABFF)",
              "linear-gradient(45deg, #5D3FD1, #03ABFF, #F4B30C)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
      </div>

      <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <motion.div
          className="flex flex-col gap-4 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-xl font-syne font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The missing piece in Web3 growth is not just quests or rewards but a
            monetization loop that benefits both creators and projects.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join the movement, amplify your voice, earn, engage & expand your
            social presence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/tasks"
              className="mt-2 px-5 py-3 inline-block rounded-md bg-white bg-opacity-20 text-white text-sm hover:bg-opacity-30 transition-all"
            >
              Start Earning
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-auto flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src="/images/Group 11.png"
              width={240}
              height={180}
              alt="coin sack"
              className="w-[180px] md:w-[220px] lg:w-[240px] h-auto drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CTA;
