import '@dotlottie/player-component';

const style = {
  height: '100%',
  width: '100%',
};

const LottiePlayer = ({lottieFile}) => { 
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