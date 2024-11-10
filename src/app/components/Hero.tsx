import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Hero = () => {
  return (
    <div>
    <section>
      <div>
        <div>
          <h1>
            I Am Web Developer and Marketing Specialist
            <br />
          </h1>
          <p>
         A web developer and marketing specialist dedicated to crafting websites that drive results.<br/> I create user-friendly, responsive websites tailored to meet your business needs.  Lets collaborate to bring your digital presence to life  explore my work or contact me to get started!

</p>
          <div>
            <Link href="#Contact">
              <button>Contact</button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            alt="hero"
            width={300}
            height={300}
            src={require('../../../public/pic1.png')}
          />
        </div>
      </div>
    </section>
  </div>
);
}

export default Hero
