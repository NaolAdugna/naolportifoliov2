"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Toaster, toast } from "react-hot-toast";

const Footer: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      toast.loading("Sending...");
      emailjs
        .sendForm(
          "service_t2djff6",
          "template_qb3vfeu",
          form.current,
          "5m2U6F70b1gcFOXPB"
        )
        .then(
          () => {
            toast.dismiss();
            toast.success("Email sent successfully!");
          },
          (error) => {
            toast.dismiss();
            toast.error("Failed to send email.");
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <>
      <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full"></div>
        <div className="flex flex-col items-center">
          <Toaster position="top-center" reverseOrder={false} />
          <h1 className="heading lg:max-w-[45vw]">
            Contact <span className="text-purple">Me</span>
          </h1>
          <p className="text-white-200 md:mt-10 mb-5 text-center">
            Reach out to me today and let&apos;s discuss how I can help you.
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col items-start gap-3 justify-between w-1/2"
          >
            <label>Names</label>
            <input
              type="text"
              placeholder="Your Name"
              name="from_name"
              required
              className="text-[16px] rounded-lg border-4 w-full text-white-100 px-3 py-2 bg-gray-900"
            ></input>
            <label>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              required
              className="text-[16px] rounded-lg w-full border-4 text-white-100 px-3 py-2 bg-gray-900"
              name="from_email"
            />
            <label>Message</label>
            <textarea
              placeholder="Your Message"
              required
              name="message"
              className="text-[16px] rounded-lg w-full border-4 text-white-100 px-3 py-2 bg-gray-900"
              style={{ resize: "none" }}
              rows={5}
            />

            <button type="submit">
              {" "}
              <MagicButton
                title="Send Message"
                icon={<FaLocationArrow />}
                position="right"
              />
            </button>
          </form>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Naol Adugna
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
             <a href='https://www.linkedin.com/in/naoladugna47/' target="_blank">
            <FaLinkedinIn className="hover:cursor-pointer size-5" />
            
            </a> 
            
            </div>
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
             <a href='https://github.com/NaolAdugna' target="_blank">

            <FaGithub className="hover:cursor-pointer size-5" />
            </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
