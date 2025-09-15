"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is CreatorsLab?",
    answer:
      "CreatorsLab is a community-powered Web3 launchpad that helps creators earn, spend, and grow through engagement, rewards, and promotion.",
  },
  {
    question: "Who can join CreatorsLab?",
    answer:
      "Web3 creators, influencers, airdrop hunters, project founders, DAOs, and newcomers looking to collaborate and grow in Web3.",
  },
  {
    question: "How do I earn CLS?",
    answer:
      "Complete community tasks such as reading, sharing, engaging, or referring others. Every action earns CLS tokens.",
  },
  {
    question: "How can I spend CLS?",
    answer:
      "Use CLS to promote your content, referral links, or campaigns to amplify reach and grow your network.",
  },
  {
    question: "What is GasPass?",
    answer:
      "GasPass lets you instantly borrow a small amount of gas to claim airdrops even if you don’t hold the native token, then pay it back later safely.",
  },
  {
    question: "Are there fees to join?",
    answer:
      "No. Joining CreatorsLab is free. You only spend CLS when promoting content or campaigns.",
  },
  {
    question: "Which wallets are supported?",
    answer:
      "CreatorsLab supports Solana wallets like Phantom and Solflare, plus email-based sign-ins.",
  },
  {
    question: "Who backs CreatorsLab?",
    answer:
      "CreatorsLab is backed by Solana Foundation and SuperteamNG, ensuring trust, growth support, and Web3 reliability.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number | null) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-12 md:px-14 flex flex-col gap-6 w-full">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne text-center mb-6 text-white">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4 w-full max-w-full">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border rounded-lg p-4 cursor-pointer bg-[#161616] border-[#3F3F3F] w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-lg text-white">{faq.question}</p>
              <span className="text-xl text-white">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <motion.div
                className="mt-2 text-sm text-gray-300"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
