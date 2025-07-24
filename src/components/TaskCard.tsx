"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { motion } from "framer-motion";

function TaskCard({ task, index }: { task: any; index: number }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href={`https://app.creatorslab.cc/tasks`}
        className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-xl overflow-hidden shadow-lg w-full max-w-md mx-auto transition hover:shadow-xl block"
      >
        {/* Image Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={task.image || "/images/Rectangle 3.png"}
              alt={task.title}
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-[-20px] right-4 z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Image
              src="/default-avatar.png"
              alt="creator avatar"
              quality={75}
              loader={({ src, width, quality }) =>
                `${src}?w=${width}&q=${quality || 75}`
              }
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2 border-black"
            />
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-4 pt-6 flex flex-col gap-2">
          <motion.h3
            className="text-white font-bold text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {task.title}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {task.description}
          </motion.p>

          {/* Footer Section */}
          <motion.div
            className="mt-4 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Reward Tag */}
            <motion.div
              className="px-3 py-1 text-sm rounded-md bg-[#6d28d9] text-white flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
              transition={{ duration: 0.2 }}
            >
              {task.rewardPoints} $CLS
            </motion.div>

            {/* Stats */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1, color: "#ef4444" }}
                transition={{ duration: 0.2 }}
              >
                <Heart size={14} fill="white" className="text-white" />
                1.5k
              </motion.div>
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1, color: "#3b82f6" }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle size={14} />
                10k
              </motion.div>
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1, color: "#10b981" }}
                transition={{ duration: 0.2 }}
              >
                <Share2 size={14} />
                120
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export default TaskCard;
