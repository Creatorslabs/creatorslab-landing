"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import TaskCard from "./TaskCard";

const demoTasks = [
  {
    _id: "task1",
    creator: "user123",
    title: "Retweet and Win $CLS",
    type: ["retweet"],
    platform: "twitter",
    image: "/images/Rectangle 3 copy.png",
    description:
      "Help us spread the word! Retweet our latest post to earn $CLS.",
    target: "https://twitter.com/example/status/123456789",
    rewardPoints: 50,
    maxParticipants: 100,
    status: "active",
    participants: [],
    createdAt: new Date("2025-06-15"),
    updatedAt: new Date("2025-06-15"),
  },
  {
    _id: "task2",
    creator: "user456",
    title: "Join Discord & Say Hello",
    type: ["join", "message"],
    platform: "discord",
    image: "/images/Rectangle 3 copy.png",
    description: "Join our Discord and introduce yourself in #introductions!",
    target: "https://discord.gg/example",
    rewardPoints: 30,
    maxParticipants: 50,
    status: "active",
    participants: [],
    createdAt: new Date("2025-06-18"),
    updatedAt: new Date("2025-06-18"),
  },
  {
    _id: "task3",
    creator: "user789",
    title: "Create a TikTok Video",
    type: ["video", "share"],
    platform: "tiktok",
    image: "/images/Rectangle 3 copy.png",
    description: "Make a short TikTok video about CreatorsLab and tag us!",
    target: "https://www.tiktok.com/@creatorslab",
    rewardPoints: 100,
    maxParticipants: 20,
    status: "inactive",
    participants: [],
    createdAt: new Date("2025-06-10"),
    updatedAt: new Date("2025-06-12"),
  },
];

function Task() {
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

  return (
    <div className="relative p-6 md:py-8 md:px-14 flex flex-col gap-8">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/Ellipse 49.png"
          width={500}
          height={500}
          alt="decor"
          className="absolute right-0 md:right-20 -z-10"
        />
      </motion.div>

      {/* Header */}
      <motion.div 
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="flex flex-col gap-2 w-full md:w-[45%]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-syne text-3xl md:text-5xl leading-tight">
            Join the fun
          </h3>
          <p className="text-gray-500 text-sm md:text-base">
            This is your moment. Jump into the Web3 revolution and make your
            mark.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/tasks"
            className="rounded-lg py-2 px-5 bg-gradient-to-br from-[#5D3FD1] to-[#03ABFF] text-white text-sm shadow-md hover:brightness-110 transition"
          >
            Get started
          </Link>
        </motion.div>
      </motion.div>

      {/* Section Title & Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between pb-4">
          <motion.p 
            className="flex-1 font-medium text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Engage
          </motion.p>
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="https://app.creatorslab.cc/tasks" className="text-gray-500 text-sm underline hover:text-gray-300 transition-colors">
              Show all ({demoTasks.length})
            </Link>
            <motion.div 
              className="rounded-full bg-gray-700 text-gray-300 w-6 h-6 flex justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#4a5568" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={16} />
            </motion.div>
            <motion.div 
              className="rounded-full bg-gray-700 text-gray-300 w-6 h-6 flex justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#4a5568" }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={16} />
            </motion.div>
          </motion.div>
        </div>

        {/* Task Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {demoTasks.slice(0, 3).map((task, index) => (
            <TaskCard task={task} key={index} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Task;