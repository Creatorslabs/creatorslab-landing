import Image from "next/image";
import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <div className="relative m-6 md:m-8 rounded-lg overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Frame 44.png"
          alt="creator-background"
          fill
          className="object-cover object-center opacity-60"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D3FD1] via-[#03ABFF] to-[#F4B30C] mix-blend-soft-light opacity-80" />
        <div className="absolute inset-0 bg-black opacity-30 z-10" />
      </div>

      <div className="relative z-20 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-syne font-bold leading-tight">
            Earn, Engage and Expand with Creators Lab
          </h3>
          <p className="text-sm sm:text-base">
            We are building more than just a platform — it&apos;s a decentralized
            social network where builders and content creators thrive.
          </p>
          <p className="text-sm sm:text-base">
            Expand your reach, grow your influence, and connect with a global
            Web3 community that values engagement.
          </p>
          <Link
            href="/tasks"
            className="mt-2 px-5 py-3 inline-block rounded-md bg-white bg-opacity-20 text-white text-sm hover:bg-opacity-30 transition-all"
          >
            Become a member
          </Link>
        </div>

        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <Image
            src="/images/Group 11.png"
            width={240}
            height={180}
            alt="coin sack"
            className="w-[180px] md:w-[220px] lg:w-[240px] h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
