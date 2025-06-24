import Image from "next/image";
import React from "react";

function Sponsor() {
  return (
    <div className="text-center px-4 py-10 flex flex-col items-center gap-6">
      <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
        Powered by:
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Image
          src="/images/Group.png"
          alt="Solana Foundation"
          width={120}
          height={60}
          className="h-auto object-contain"
        />
        <Image
          src="/images/st-light.png"
          alt="Superteam NG"
          width={120}
          height={60}
          className="h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default Sponsor;
