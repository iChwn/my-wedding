import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { Fade } from 'react-reveal';
import { HeartIcon } from '@heroicons/react/solid'

const Footer = () => {
  return (
    <Fade bottom>
      <div className="px-5 w-full">
        <div className="px-5 flex flex-col items-center pt-5 border-t-2 border-gray-300">
          <span className="text-center font-merriweather text-md font-normal max-w-2xl text-white">
            © 2023 Ichwan & Salma Wedding.
          </span>
          <span className="flex items-center text-center font-merriweather mt-5 text-md font-normal max-w-2xl text-white">
            Made with <HeartIcon className="mx-1 text-red-500" width={20} /> by <a className="ml-1 text-yellow-400 font-bold" href=" https://www.kyoora.id/" target="_blank" rel="noreferrer">Ichwan</a>
          </span>
        </div>
      </div>
    </Fade>
  );
}

export default Footer;