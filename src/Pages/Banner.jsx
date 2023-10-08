import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center m-2 rounded-3xl p-5"
      style={{
        backgroundImage: `url('https://i.ibb.co/hZGyvcJ/Untitled-design-2.png')`,
      // Red background color
      }}
    >
      <div className="flex justify-between items-center text-black p-5">
        <div>
          <h3 className="text-3xl font-semibold my-3 ">Hey James!</h3>
          <p className="mb-4 ">Let's create something awesome today</p>
          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 px-6 py-2 bg-white border-2 border-[#754DE8] rounded-2xl">Start Creating</button>
        </div>
        <div>
        <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-700 px-3 mb-6 mt-3 py-2 ml-96 bg-white border-2  rounded-2xl flex items-center gap-2"><span>Zara ventus</span> <span><AiFillCaretDown/></span></button>
          <h1 className="mb-4">
            You should have more engagement by 6 pm today, try posting then. 📆
          </h1>
          <h3 className="">Try our SEO optimization tool to increase engagement by 40% 🔥</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
