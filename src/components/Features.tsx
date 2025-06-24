"use client";

import Image from "next/image";
import React from "react";
import { Rocket, Heart, Link as LucideLink } from "lucide-react";
import { motion } from "framer-motion";

function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative px-4 py-8 md:px-14 flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/Ellipse 47.png"
          width={500}
          height={500}
          alt="bottom"
          className="absolute -left-20 -z-10"
        />
      </motion.div>

      {/* Header */}
      <motion.div 
        className="text-center flex flex-col justify-center items-center gap-4 px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-syne leading-tight max-w-4xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Built on the lightning-fast, low-fee Solana blockchain
        </motion.h2>
        <motion.p 
          className="text-base sm:text-lg text-gray-500 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Creators Lab is backed by our powerhouse partners Solana Foundation
          and SuperteamNG. Together, we are crafting a digital playground where
          creators rule.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Card 1 */}
        <motion.div 
          className="relative text-center rounded-lg group"
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div 
            className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#03ABFF] rounded-sm -z-40"
            whileHover={{ width: 80, transition: { duration: 0.3 } }}
          />
          <div className="px-6 py-8 flex flex-col items-center gap-4 rounded-lg border dark:bg-[#161616]/90 backdrop-filter backdrop-blur-sm shadow-md dark:border-[#3F3F3F] group-hover:shadow-xl transition-all duration-300">
            <motion.div variants={iconVariants} whileHover="hover">
              <Rocket size={30} />
            </motion.div>
            <p className="text-lg font-medium">Fast & Smooth Transactions</p>
            <p className="text-sm text-gray-500 text-center">
              Solana&apos;s speed means no waiting around—transactions happen in the
              blink of an eye.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          className="relative text-center rounded-lg group"
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div 
            className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#4CDE86] rounded-sm -z-40"
            whileHover={{ width: 80, transition: { duration: 0.3 } }}
          />
          <div className="px-6 py-8 flex flex-col items-center gap-4 rounded-lg border dark:bg-[#161616]/90 backdrop-filter backdrop-blur-sm shadow-md dark:border-[#3F3F3F] group-hover:shadow-xl transition-all duration-300">
            <motion.div variants={iconVariants} whileHover="hover">
              <Heart size={30} />
            </motion.div>
            <p className="text-lg font-medium">Earn & Grow</p>
            <p className="text-sm text-gray-500 text-center">
              Every like, comment, and share earns you Seeds. More Seeds = more
              visibility!
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          className="relative text-center rounded-lg group"
          variants={cardVariants}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
        >
          <motion.div 
            className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#7985FF] rounded-sm -z-40"
            whileHover={{ width: 80, transition: { duration: 0.3 } }}
          />
          <div className="px-6 py-8 flex flex-col items-center gap-4 rounded-lg border dark:bg-[#161616]/90 backdrop-filter backdrop-blur-sm shadow-md dark:border-[#3F3F3F] group-hover:shadow-xl transition-all duration-300">
            <motion.div variants={iconVariants} whileHover="hover">
              <LucideLink size={30} />
            </motion.div>
            <p className="text-lg font-medium">Wallet Integration</p>
            <p className="text-sm text-gray-500 text-center">
              Seamless sign-ins with Solflare, Phantom, or even your email—your
              call!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Features;