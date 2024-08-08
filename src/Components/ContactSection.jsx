import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactSection() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ogcgjob', 'template_b3vmfla', form.current, {
        publicKey: '12ibR_qWJW6y1ZLWO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }; 

  return (
  <div id="contact" className="w-full h-auto bg-[#391d5d]">
        <div className="max-w-[1320px] mx-auto lg:py-20 py-10 lg:px-0 md:px-8 sm:px-6 px-4 flex flex-col justify-center items-center">
          <div className="lg:w-[80%] mx-auto">
            <h2 className="lg:text-3xl text-[20px]   leading-[1.4em] font-medium text-white  text-center">Don't Wait Any Longer For Higher Rankings. Get Started today!</h2>
            <p className="lg:text-[18px] lg:leading-[1.8em] text-[16px] leading-[1.2em] text-white text-center">Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible
            </p>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10 mt-10 items-center justify-between w-full bg-transparent" action="">
                <div className="inputBox1 flex lg:flex-row flex-col justify-between gap-10 w-full">
                  <input className="placeholder:text-slate-400 bg-transparent p-3 lg:w-[50%] border-b-[1px] outline-none	" type="text" placeholder='Your Name' name="user_name" />
                  <input className="bg-transparent p-3 lg:w-[50%] border-b-[1px] outline-none" type="email"  placeholder="Your Email" name="user_email" />
                </div>
                <div className="inputBox2 lg:mt-10 mt-5 flex lg:flex-row flex-col justify-between gap-10 w-full">
                  <input className="bg-transparent py-7 px-3 lg:w-[50%] border-b-[1px] h-[16px] outline-none" type="text" name='user_subject' placeholder='Subject' />
                  <textarea className="bg-transparent p-3 lg:w-[50%] border-b-[1px] h-[150px] outline-none	"  placeholder='Your Message' name="message"></textarea>
                </div>
                <div className="subBtn relative mt-10">
                <input type="submit" value="Send Message" className="mssgBtn  bg-[#13a300] hover:bg-transparent cursor-pointer py-3 px-8 text-white text-[20px]" /></div>
            </form>
            </div>
        </div>
    </div>
  )

}

export default ContactSection