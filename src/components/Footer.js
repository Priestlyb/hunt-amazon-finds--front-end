import React, { useRef, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();
  const [done] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('hunt_amazon_finds', 'template_bassey', form.current, 'user_Kr7iGuivtEP0uR57DsGBa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Newsletter to receive latest amazon finds
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <form className='input-areas' ref={form} onSubmit={sendEmail}>
            <input
              className='footer-input'
              name='user_email'
              type='email'
              placeholder='Your Email'
            />
            <button className='btn-outline'>Subscribe</button>
            {done && "Sent Successful... 24hrs to reply, if Urgent, Contact me on my Socials"}
        </form>
      </section>

        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h2>How it works</h2>
            <Link to=''>It’s Affiliating Marketing, for every purchase made by you, I get a commission from Amazon as a marketer. <br /> <strong> Check out products & shop a lot!</strong></Link>
          </div>

        </div>

      <section class='social-media'>
        <div class='social-media-wrap'>

          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
                <img src='./logo-dark.png' alt='logo' style={{
            width: "100px",
            height: "100px"
            }} />
            </Link>
          </div>

          <small class='website-rights'>Hunt Amazon FInds © 2022</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;
