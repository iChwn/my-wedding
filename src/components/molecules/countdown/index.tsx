import { background_image } from "assets/image";
import React from "react"
import Zoom from 'react-reveal/Zoom';

const BaseCountdown = ({days, hours, minutes, seconds, isCompleted}) => {
  return !isCompleted ? (
    <div className="flex flex-col items-center justify-center px-5 py-5 z-10">
      <span className="text-center font-merriweather text-md font-normal mb-7 px-5 text-[#FFFFFF]">
        Rangkaian Acara Yang Akan Diselenggarakan Pada :
      </span>
      <div className="md:text-6xl text-3xl text-center flex w-full items-center justify-center">
        <Zoom duration={500}>
          <div className="md:min-w-[100px] min-w-[70px] mx-1 p-2 shadow-md text-[#FFFFFF] bg-[#0F1C4F]/[0.85] rounded-lg border-white border-2 relative">
              <img src={background_image.astronot_flag} alt='' className="w-[30px] absolute top-[-20px] left-0 floating-element5s" />
              <div className="font-merriweather text-md">{days}</div>
              <div className="font-merriweather uppercase text-sm mt-2 leading-none">Hari</div>
          </div>
        </Zoom>
        <Zoom duration={1000}>
          <div className="md:min-w-[100px] min-w-[70px] mx-1 p-2 shadow-md text-[#FFFFFF] bg-[#0F1C4F]/[0.80] rounded-lg border-white border-2 relative">
              <img src={background_image.astronot_mancing} alt='' className="w-[30px] absolute top-[-20px] right-[-8px]" />
              <div className="font-merriweather text-md">{hours}</div>
              <div className="font-merriweather uppercase text-sm mt-2 leading-none">Jam</div>
          </div>
        </Zoom>
        <Zoom duration={1500}>
          <div className="md:min-w-[100px] min-w-[70px] mx-1 p-2 shadow-md text-[#FFFFFF] bg-[#0F1C4F]/[0.80] rounded-lg border-white border-2 relative">
              <img src={background_image.astronot_toilet} alt='' className="w-[30px] absolute top-[-20px] right-[-10px] scale-x-[-1.2] left-0" />
              <div className="font-merriweather text-md">{minutes}</div>
              <div className="font-merriweather uppercase text-sm mt-2 leading-none">Menit</div>
          </div>
        </Zoom>
        <Zoom duration={2000}>
        <div className="md:min-w-[100px] min-w-[70px] mx-1 p-2 shadow-md text-[#FFFFFF] bg-[#0F1C4F]/[0.80] rounded-lg border-white border-2 relative">
            <img src={background_image.astronot_dadah} alt='' className="w-[30px] absolute top-[-20px] right-[-10px] floating-element5s" />
            <div className="font-merriweather text-md">{seconds}</div>
            <div className="font-merriweather uppercase text-sm mt-2 leading-none">Detik</div>
        </div>
        </Zoom>
      </div>
    </div>
  ) : (
    <Zoom delay={500}>
      <span className="font-merriweather mt-2 text-3xl text-[#FFFFFF] z-10">Acara Telah Berlangsung</span>
    </Zoom>
  )
}

export default BaseCountdown