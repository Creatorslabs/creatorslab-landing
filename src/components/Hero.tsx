import Image from "next/image";
import Link from "next/link";
import React from "react";

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
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-6 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-syne font-extrabold leading-tight">
            Empowering Global Creativity with{" "}
            <span className="bg-gradient-to-br from-[#5D3FD1] to-[#03ABFF] bg-clip-text text-transparent">
              Web3
            </span>
          </h1>
          <p className="text-base text-gray-500 max-w-md">
            Join the movement to enable creators worldwide to grow, engage, and
            earn.
          </p>

          <Link
            href="/tasks"
            className="rounded-lg py-2 px-5 bg-gradient-to-br from-[#5D3FD1] to-[#03ABFF] text-white text-sm shadow-md"
          >
            Get started
          </Link>
        </div>

        {/* Right Image Section (hidden on mobile) */}
        <div className="flex-1 hidden md:flex justify-end items-center relative">
          <div
            className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[110%] h-[40%] bg-gradient-to-br from-[#03ABFF] via-[#2DB865] to-[#5D3FD1] 
              blur-[60px] opacity-30 rounded-full rotate-45 z-[-1]"
          />
          <Image
            src="/images/Group 266.png"
            width={400}
            height={400}
            alt="coins"
            className="drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
