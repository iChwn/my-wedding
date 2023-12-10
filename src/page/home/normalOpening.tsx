/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "assets/css/custom.scss"
import { useLocation } from 'react-router';
import { decryptId } from 'utility/helper/generateInvitation';
import guest_list from 'constant/guestList';
import { LottiePlayer, StyledButton } from 'components';
// import { useNavigate } from 'react-router';
import { Flip, Fade } from "react-reveal";
import { background_image, lottie, wedding_image } from 'assets/image';

const Opening = ({callback}:any) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const decryptedId = decryptId(queryParams.get('userid'))
  const isValidGuset = guest_list.find((guest) => guest.id === decryptedId)
  const [isExit, setIsExit] = useState(false)

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col bg-[#dfcda9] relative overflow-hidden z-20">
    <div id="transition" className={`circle-black circle-black-scale ${isExit && 'scale-circle'}`}></div>  
    <Fade right>
      <div className="accent-test-m1 md:hidden block">
        <LottiePlayer lottieFile={lottie.Tset} />
      </div>
      {/* <img
        src={background_image.tree4}
        alt=""
        className="accent-flower1 md:hidden block"
      /> */}
    </Fade>
    <Fade left>
      <div className="accent-test-m2 md:hidden block">
        <LottiePlayer lottieFile={lottie.Tset} />
      </div>
      {/* <img
        src={background_image.tree4}
        alt=""
        className="accent-flower2 md:hidden block"
      /> */}
    </Fade>
    <Fade duration={1500}>
      <div className="relative md:w-[400px] w-[200px] md:h-[400px] h-[200px] md:mb-[-55px] mb-[-25px]">
        <div className="accent-test md:block hidden">
          <LottiePlayer lottieFile={lottie.Tset} />
        </div>
        {/* <img
          src={background_image.tree4}
          alt=""
          className="accent-flower1 md:block hidden"
        /> */}
        <img
          src={wedding_image.Depan}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
    </Fade>
    
    <Flip cascade top delay={1000}>
      <h1 className="font-black-hole md:text-7xl mt-4 text-5xl text-[#bba25f]">
        Ichwan & Salma
      </h1>
    </Flip>

    <Fade delay={1000} duration={1500}> 
      <div className="mt-7 flex flex-col items-center">
        <span className="font-poppins text-center text-sm">
          Kepada Yth
        </span>
        <div className=" border-4 rounded-lg px-6 py-4 m-4 bg-white border-white text-center">
          <span className="font-poppins font-bold text-center text-xl mt-2 text-[#bba25f] capitalize">
            {isValidGuset.name}
          </span>
        </div>
        <div className='w-full flex items-center justify-center'>
          <StyledButton
            children={
              <div className="flex items-center">
                <span className="font-poppins text-center text-sm mr-2 font-semibold">
                  Buka Undangan
                </span>
                <img src={background_image.white_envelope} alt="" className='w-[20px]' />
              </div>
            }
            onClick={() => {
              setIsExit(true)
              setTimeout(() => {
                callback("mantap")
              }, 1500);
            }}
            className='min-w-max bg-[#f5c96a] border-2 border-black px-3 py-2 rounded-md'
          />
        </div>
      </div>
    </Fade>
    {/* <div className="animate-transition w-full bg-[#566261] absolute bottom-0 left-0"></div> */}
  </div>
  )
}

export default Opening;