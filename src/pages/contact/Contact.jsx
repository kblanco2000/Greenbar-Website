import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Slider from './../../components/Slider';
import { Button } from 'react-daisyui';
import image from "../../assets/house.png";



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
        <div className="bg-[rgb(238,238,238)]">
            <div class='form-control w-full max-w-xs h-[85%] lg:max-w-lg mx-auto my-10 px-6 bg-white'>
            <label class='label mt-4'>
                <span class='label-text text-xl text-black'>Please enter your Name</span>
            </label>
            <input
                type='text'
                placeholder='Your Name'
                class='input input-bordered max-w-xs lg:max-w-lg bg-slate-200 mb-6'
            />
            <label class='label'>
                <span class='label-text text-xl text-black'>Please enter your email address</span>
            </label>
            <input
                type='text'
                placeholder='Your email'
                class='input input-bordered max-w-xs lg:max-w-lg bg-slate-200 mb-6'
            />
            <label class='label'>
                <span class='label-text text-xl text-black'>Please enter your message</span>
            </label>
            <textarea class="textarea bg-slate-200 h-80 max-w-xs lg:max-w-lg" placeholder="Your Message"></textarea>
            <Button className='text-white mb-6  bg-customDarkBlue hover:bg-customMediumBlue mx-auto w-40 mt-10 outline-none lg:mb-0 '>Send</Button>
            </div>
        </div>
        // <form ref={form} onSubmit={sendEmail}>
        //     <label class="col-form-label">Name</label>
        //     <input type="text" name="user_name"></input>
        //     <label>Email</label>
        //     <input type="email" name="user_email"></input>
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send"></input>
        // </form>
  )
}