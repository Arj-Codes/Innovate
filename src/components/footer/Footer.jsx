import React from "react";

const Footer = () => {
  return (
    // <footer className="footer mt-[5rem] mb-2">
    //   <div className="container  text-white w-[100vw] flex sm:justify-center">
    //     <div className="row flex w-[70vw] justify-around">
    //       <div className="col-md-6">
    //         <p>&copy; 2023 Innovate. All Rights Reserved.</p>
    //       </div>
    //       <div className="col-md-6">
    //         <ul className="list-inline text-md-right flex w-[20vw] gap-4">
    //           <li className="list-inline-item">
    //             <a href="#">About</a>
    //           </li>
    //           <li className="list-inline-item">
    //             <a href="#">Privacy Policy</a>
    //           </li>
    //           <li className="list-inline-item">
    //             <a href="#">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-[#100f0f33] text-white py-5">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center">
            {/*  <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate justo ac urna aliquet, a consequat odio molestie.
            </p>
            <p className="mb-4">
              Vivamus in ipsum aliquam, efficitur justo eu, imperdiet mauris. In
              vel nulla quis magna bibendum maximus at sed dolor.
            </p> */}
            <img src="./logo1.png" alt="" />
          </div>
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Technology
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Sports
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Entertainment
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Food
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-gray-300">
                  Travel
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">123 Street Name</p>
            <p className="mb-4">Jaipur, IN 303007</p>
            <p className="mb-4">Phone: 555-555-5555</p>
            <p className="mb-4">Email: info@blogwebsite.com</p>
          </div>
        </div>
        <hr className="border-gray-600 my-8" />
        <p className="text-center">
          Copyright &copy; 2023 Innovate.
          <a href="#" className="hover:text-gray-300 ml-2">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300 ml-2">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
