import { lottie } from "assets/image";
import { useLottie } from "lottie-react";
import { useRef } from "react";
import '@dotlottie/player-component';

const style = {
  height: '100%',
  width: '100%',
};

const LottiePlayer = ({lottieFile}) => {
  const wkwkw = useRef(null)
  const options = {
    animationData: lottie.SolarSystem,
    loop: true,
    autoplay: true,
    lottieRef: wkwkw
  };

  console.log(wkwkw.current)

  
  return (
    <dotlottie-player
      src={lottieFile}
      autoplay
      loop
      style={style}
    />
  );
};

export default LottiePlayer;