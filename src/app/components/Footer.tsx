import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
  <div>
    <footer>
      <div>
        <a>
          <span></span>
        </a>
        <p>
          © 2024 Sehrish Khan. All Rights Reserved.
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" target="_blank"></a>
        </p>
        <span>
          <Link target="_blank" href={"https://www.gmail.com/"}>
            <MdOutlineMarkEmailRead />
          </Link>
          
          <Link target="_blank" href={"https://www.linkedin.com/"} className="ml-3">
            <CiLinkedin />
          </Link>
          
          <Link target="_blank" href={"https://github.com/"} className="ml-3">
            <FaGithub />
          </Link>
          
          <a></a>
        </span>
      </div>
    </footer>
  </div>
</div>

  )
}

export default Footer
