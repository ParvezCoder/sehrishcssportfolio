import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <div id="About">
      <section>
        <div>
          <div>
            <Image
              alt="hero"
              src="/pic1.png" 
              width={300}
              height={300}
            />
          </div>
          <div>
            <h1>About Me</h1>
            <p>Hi, I am Sehrish Khan, a passionate web developer with expertise in HTML, CSS, JavaScript, and Next js. With a background in marketing, I bring a unique perspective to web development, ensuring my designs are both visually appealing and strategically optimized.
            </p>
            <div>
              <Link href={"/sehrish khan resume.pdf"}>
                <button>View Resume</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  
  )
}

export default About
