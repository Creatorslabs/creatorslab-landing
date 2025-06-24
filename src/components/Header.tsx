import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between items-center py-2">
      <Link href="/" className="flex flex-row gap-2 items-center">
        <Image
          src="/images/logo.png"
          width={30}
          height={30}
          alt="CreatorsLab logo"
        />
        <p className="text-lg">Creatorslab</p>
      </Link>
      <div className="flex items-center justify-center gap-2 flex-row">
        <Link
          href="/tasks"
          className="rounded-lg py-2 px-4 bg-gradient-to-br from-primary to-secondary text-sm text-white"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Header;
