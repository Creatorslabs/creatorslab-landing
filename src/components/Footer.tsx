import React from "react";

function Footer() {
  return (
    <footer className="w-full text-center text-sm text-gray-500 dark:text-gray-400 py-6 px-4">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-semibold dark:text-white">
          Creators Lab
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
