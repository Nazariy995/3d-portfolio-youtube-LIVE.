"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import Image from "next/image"
import rightArrow from "../../public/arrow-circle-right-gradient.svg";
import Highlight from "./Highlight";

const INTERESTS_ARR = ["development", "app", "ui", "branding"];

const INTERESTS: {
  [x: string]: string;
} = {
  development: "Development",
  app: "App From Scratch",
  ui: "UI/UX Design",
  branding: "Branding",
};

const Contact = () => {
  const [active, setActive] = useState(INTERESTS.development);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const sendEmail = () => {
    emailjs.send("service_lppx86r","template_nucm0ba",{
      name: formData.name,
      message: formData.message,
      reply_to: formData.email,
      interest: active,
    }, "q1Cpe3KmRxgl5Lpxu");
  }
  
  return (
    <div className="mt-28 ml-20">
      <h1 className="text-7xl">Let&#39;s get in Touch!</h1>
      <div className="mt-10 text-2xl">I&#39;m interested in</div>
      <div className="mt-5 interests-container flex gap-4">
        {INTERESTS_ARR.map((interest: string) => (
          <div
            key={interest}
            onClick={() => setActive(INTERESTS[interest])}
            className={`${
              active == INTERESTS[interest] && "selected"
            } interest cursor-pointer  py-2.5 px-5 bg-[#15191E] rounded-full`}
          >
            {INTERESTS[interest]}
          </div>
        ))}
      </div>
      <div className="form-container mt-5 flex flex-col gap-6">
          <input onChange={(e)=>setFormData({...formData, name:e.target.value}) } className="form-field outline-0 bg-transparent py-4 w-1/2 text-2xl" type="text" placeholder="Enter Your Name" value={formData.name} />
          <input onChange={(e)=>setFormData({...formData, email:e.target.value}) } className="form-field outline-0 bg-transparent py-4 w-1/2 text-2xl" type="email" placeholder="Enter Your Email" value={formData.email}/>
          <input onChange={(e)=>setFormData({...formData, message:e.target.value}) } className="form-field outline-0 bg-transparent py-4 w-1/2 text-2xl" type="text" placeholder="Tell Me About Your Project" value={formData.message} />
          <div className="flex">
            <button
              type="button"
              onClick={sendEmail}
              className="p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-3xl"
            >
              <div className="py-6 px-12 gap-1 bg-[#0E202D] rounded-3xl flex items-center justify-center">
                <Highlight className="text-xl">Submit</Highlight>
                <Image src={rightArrow} alt="" />
                </div>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Contact;
