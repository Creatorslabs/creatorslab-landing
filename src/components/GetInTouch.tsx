"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="px-4 py-12 md:px-14 flex flex-col gap-8 w-full max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-syne text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <motion.p
        className="text-center text-gray-300 text-sm sm:text-base max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have questions, feedback, or partnership inquiries? Send us a message
        and we&apos;ll get back to you.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-[#161616] border border-[#3F3F3F] text-white focus:outline-none focus:ring-2 focus:ring-[#03ABFF]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 rounded-md bg-[#161616] border border-[#3F3F3F] text-white focus:outline-none focus:ring-2 focus:ring-[#03ABFF]"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="px-4 py-3 rounded-md bg-[#161616] border border-[#3F3F3F] text-white focus:outline-none focus:ring-2 focus:ring-[#03ABFF]"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-md bg-[#03ABFF] text-black font-medium hover:bg-[#0295DB] transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}

export default GetInTouch;
