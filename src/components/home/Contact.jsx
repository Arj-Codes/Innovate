import { motion } from "framer-motion";
import React from "react";
import { slideIn } from "../../utils/motion";
import EarthCanvas from "../canvas/Earth";
const Contact = () => {
  return (
    <div className="h-[100vh] contact_wrapper w-full flex flex-col items-center justify-center">
      <h2 className="block mb-2 text-4xl font-bold text-white">Contact Us</h2>
      <div className=" w-[90%] h-[80%] rounded-[50px] flex  flex-col items-center justify-center">
        <div className="w-[90%] h-[90%] bg-gray-200 rounded-[50px] flex lg:flex-row flex-col sm:justify-between md:items-end relative">
          {/* <img
            src="./contact.jpeg"
            alt="contact_img"
            className="md:h-[100%] h-[30%] lg:w-[60%] w-full object-cover rounded-lg"
          /> */}
          <EarthCanvas />

          <form
            action="#"
            className="lg:w-[40%] w-full h-full pl-2 flex flex-col justify-center px-[30px]"
          >
            <div className="mb-3">
              <h2
                for="email"
                class="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-800 text-center"
              >
                Email
              </h2>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-white dark:border-black-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="mb-3">
              <h2
                for="email"
                class="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-800 text-center"
              >
                Subject
              </h2>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div class="sm:col-span-2 mb-3">
              <h2
                for="email"
                class="block mb-2 text-lg font-bold text-gray-800 dark:text-gray-800 text-center"
              >
                Your Message
              </h2>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div class="grid place-items-center">
              <button
                type="submit"
                class="mt-5 py-3 px-5 text-sm font-bold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-violet-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800 "
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
