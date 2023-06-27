import { lottie } from "assets/image";
import { useLottie } from "lottie-react";
import { useRef } from "react";

const style = {
  height: '100%',
};

const LottiePlayer = () => {
  const wkwkw = useRef(null)
  const options = {
    animationData: lottie.SolarSystem,
    loop: true,
    autoplay: true,
    lottieRef: wkwkw
  };

  console.log(wkwkw.current)

  const { View } = useLottie(options, style);
  
  return View;
};

export default LottiePlayer;