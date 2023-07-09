import { lottie } from "assets/image";
import StyledButton from "components/atoms/button/styledButton";
import { lazy } from "react";
import { Fade, Zoom } from 'react-reveal'
const LottiePlayer = lazy(() => import('components/atoms/lottie'))
 
const Charity = () => {
  return (
    <div className="px-5 w-full mt-5 overflow-hidden">
      <div className="flex flex-col items-center gap-y-6 py-5 border-t-2 border-gray-500">
        <Fade bottom delay={500}>
          <span className="text-center font-black-hole text-5xl text-[#FFFFFF]">
            Wedding Gift
          </span>
        </Fade>
        <Fade bottom delay={500}>
          <div className="flex md:flex-row flex-col gap-6 relative">
            <div className="bottom-flower absolute top-0 opacity-50 md:w-full w-[800px]">
              <LottiePlayer lottieFile={lottie.GiftAstronaut} />
            </div>
            <Zoom delay={1000}>
              <div className="w-[360px] px-5 py-5 flex flex-col items-center max-w-sm overflow-hidden rounded-xl md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] shadow-md border-gray-300 border-2">
                <p className="text-medium text-white font-poppins text-center">
                  Bank BTPN A/N Ichwan Arif Pratama
                  <br />
                  No Rekening: 90012644367
                </p>
                <StyledButton
                  title="Salin No Rekening"
                  onClick={() => {
                    navigator.clipboard.writeText("90012644367")
                  }}
                  className="text-white bg-blue-800 duration-200 hover:scale-105 w-full py-2 mt-4"
                />
              </div>
            </Zoom>
            <Zoom delay={1000}>
              <div className="px-5 py-5 w-[360px] flex flex-col items-center max-w-sm overflow-hidden rounded-xl md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] shadow-md border-gray-300 border-2">
                <p className="text-medium text-white font-poppins text-center">
                  Bank BJB A/N Salma Juniarti
                  <br />
                  No Rekening: 2801543024
                </p>
                <StyledButton
                  title="Salin No Rekening"
                  onClick={() => {
                    navigator.clipboard.writeText("2801543024")
                  }}
                  className="text-white bg-blue-800 duration-200 hover:scale-105 w-full py-2 mt-4"
                />
              </div>
            </Zoom>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <span className="text-center font-poppins text-md font-normal max-w-2xl mt-5 text-[#FFFFFF]">
            Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan do'a restu kepada kami. Atas do'a
            restunya kami ucapkan terimakasih.
          </span>
          <span className="text-center font-poppins text-md font-bold max-w-2xl text-[#FFFFFF]">
            Hormat kami
          </span>
          <span className="text-center font-black-hole text-5xl text-[#FFFFFF]">
            Ichwan & Salma
          </span>
        </Fade>
      </div>
    </div>
  );
}

export default Charity;