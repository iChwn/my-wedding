import { background_image, lottie } from "assets/image";
import { Fade, Zoom } from 'react-reveal'
import StyledButton from "components/atoms/button/basicButton";
import LottiePlayer from "components/atoms/lottie";
 
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
                  Bank BCA A/N Ichwan Arif Pratama
                  <br />
                  No Rekening: 5865266691
                </p>
                {/* <StyledButton
                  content="Salin No Rekening"
                  type="filled"
                  onClick={() => {
                    navigator.clipboard.writeText("5865266691")
                    toast.success("Berhasil menyalin no rekening")
                  }}
                  addClasses="button-salin duration-200 hover:scale-105"
                /> */}
              </div>
            </Zoom>
            <Zoom delay={1000}>
              <div className="px-5 py-5 w-[360px] flex flex-col items-center max-w-sm overflow-hidden rounded-xl md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] shadow-md border-gray-300 border-2">
                <p className="text-medium text-white font-poppins text-center">
                  Bank BJB A/N Salma
                  <br />
                  No Rekening: 0111035288101
                </p>
                {/* <BaseButton
                  content="Salin No Rekening"
                  type="filled"
                  onClick={() => {
                    navigator.clipboard.writeText("0111035288101")
                    toast.success("Berhasil menyalin no rekening")
                  }}
                  addClasses="button-salin duration-200 hover:scale-105"
                /> */}
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