"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Blurred background image for mobile */}
      <div className="absolute inset-0 md:hidden z-[-1]">
        <Image
          src="/images/Group 266.png"
          alt="background"
          fill
          className="object-cover blur-lg opacity-20"
        />
      </div>

      <div className="flex flex-col md:flex-row px-4 py-10 md:px-16 md:py-20 max-w-7xl mx-auto items-center gap-10">
        {/* Left Text Section */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering Global Creativity with{" "}
            <motion.span
              className="bg-gradient-to-br from-[#5D3FD1] to-[#03ABFF] bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Web3
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-base text-gray-500 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join the movement to enable creators worldwide to grow, engage, and
            earn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://app.creatorslab.cc/"
              className="rounded-lg py-2 px-5 bg-gradient-to-br from-[#5D3FD1] to-[#03ABFF] text-white text-sm shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get started
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image Section (hidden on mobile) */}
        <motion.div
          className="flex-1 hidden md:flex justify-end items-center relative"
          initial={{ opacity: 0, x: 50, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.div
            className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[110%] h-[40%] bg-gradient-to-br from-[#03ABFF] via-[#2DB865] to-[#5D3FD1] 
              blur-[60px] opacity-30 rounded-full rotate-45 z-[-1]"
            animate={{
              rotate: [45, 55, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/images/Group 266.png"
              width={400}
              height={400}
              alt="coins"
              className="drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
