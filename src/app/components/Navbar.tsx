import React from 'react'
import Link from 'next/link'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
    <header>
      <div>
        <a>
          <span>Sehrish Khan</span>
        </a>
        <nav>
          <Link href="/">Home</Link>
          <Link href="#About">About</Link>
          <Link href="#Contact">Contact</Link>
        </nav>
        <a href="/sehrish khan resume.pdf">
          <button>
            Download Resume
            <FaCloudDownloadAlt />
          </button>
        </a>
      </div>
    </header>
  </div>
);
};

export default Navbar
