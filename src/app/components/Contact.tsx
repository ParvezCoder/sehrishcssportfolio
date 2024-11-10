import React from 'react'

const Contact = () => {
  return (
    <div>
      <div id="Contact">
  <section>
    <div>
      <div>
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7233.055427673222!2d67.0553232890428!3d24.982178386474374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e492e53bf9%3A0xe6e37a2048b34d88!2sSector%2011-A%20Sector%2011%20A%20North%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1729639294707!5m2!1sen!2s"
          style={{ filter: "contrast(1.2) opacity(0.4)" }}
        />
        <div>
          <div>
            <h2>ADDRESS</h2>
            <p>
              house # B102 Al Amina Avenue sector 11A North Karachi
            </p>
          </div>
          <div>
            <h2>EMAIL</h2>
            <a>sehrishahsan1121@gmail.com</a>
            <h2>PHONE</h2>
            <p>0318-2839079</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Contact</h2>
        <p>Feel free to contact</p>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>
        <button>
          Send Message
        </button>
        <p></p>
      </div>
    </div>
  </section>
</div>
    </div>
  )
}

export default Contact
