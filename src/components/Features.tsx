import Image from "next/image";
import React from "react";
import { Rocket, Heart, Link as LucideLink } from "lucide-react";

function Features() {
  return (
    <div className="relative px-4 py-8 md:px-14 flex flex-col gap-10">
      <Image
        src="/images/Ellipse 47.png"
        width={500}
        height={500}
        alt="bottom"
        className="absolute -left-20 -z-10"
      />

      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center gap-4 px-2">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-syne leading-tight max-w-4xl">
          Built on the lightning-fast, low-fee Solana blockchain
        </h2>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl">
          Creators Lab is backed by our powerhouse partners Solana Foundation
          and SuperteamNG. Together, we are crafting a digital playground where
          creators rule.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {/* Card 1 */}
        <div className="relative text-center rounded-lg">
          <div className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#03ABFF] rounded-sm -z-40"></div>
          <div className="px-6 py-8 flex flex-col items-center gap-4 rounded-lg border dark:bg-[#161616]/90 backdrop-filter backdrop-blur-sm shadow-md dark:border-[#3F3F3F]">
            <Rocket size={30} />
            <p className="text-lg font-medium">Fast & Smooth Transactions</p>
            <p className="text-sm text-gray-500 text-center">
              Solana&apos;s speed means no waiting around—transactions happen in the
              blink of an eye.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative text-center rounded-lg">
          <div className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#4CDE86] rounded-sm -z-40"></div>
          <div className="px-6 py-8 flex flex-col items-center gap-4 rounded-lg border dark:bg-[#161616]/90 backdrop-filter backdrop-blur-sm shadow-md dark:border-[#3F3F3F]">
            <Heart size={30} />
            <p className="text-lg font-medium">Earn & Grow</p>
            <p className="text-sm text-gray-500 text-center">
              Every like, comment, and share earns you Seeds. More Seeds = more
              visibility!
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative text-center rounded-lg">
          <div className="absolute top-[-3px] left-1/2 transform -translate-x-1/2 w-16 h-5 bg-[#7985FF] rounded-sm -z-40"></div>
          <div className="px-6 py-8 flex flex-col items-center gap-4 rounded-lg border dark:bg-[#161616]/90 backdrop-filter backdrop-blur-sm shadow-md dark:border-[#3F3F3F]">
            <LucideLink size={30} />
            <p className="text-lg font-medium">Wallet Integration</p>
            <p className="text-sm text-gray-500 text-center">
              Seamless sign-ins with Solflare, Phantom, or even your email—your
              call!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
