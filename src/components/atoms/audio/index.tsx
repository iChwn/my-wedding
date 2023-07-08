/* eslint-disable react-hooks/exhaustive-deps */
// @ts-nocheck 
import { useEffect, useState } from "react";
import Sound from "assets/sound/suzuma.mp3"
import {Howl, Howler} from 'howler';
import StyledButton from "../button/styledButton";
import {
  PlayIcon,
  StopIcon
} from '@heroicons/react/solid'
import { Fade } from 'react-reveal'

function AudioMusic({isPlay}:any) {
  const [isPlaying, setIsPlaying] = useState(isPlay)
  const sound = new Howl({
    src: [Sound],
    volume: 0.3,
    loop: true
  });

  const playSound = (playSound) => {
    if(playSound) {
      sound.play();
    } else {
      Howler.stop();
    }
    setIsPlaying(playSound)
  }

  useEffect(() => {
    playSound(isPlay)
  }, [isPlay])

  return (
    <Fade duration={1500}>
      <div className="absolute top-3 right-6 z-20">
        <StyledButton onClick={() => playSound(!isPlaying)} className='md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] rounded-full border-2 border-gray-300 p-2 text-white text-md h-fit w-fit'>
          {isPlaying ? <StopIcon width={30} height={30} color="#FFFFFF"  /> : <PlayIcon width={30} height={30} color="#FFFFFF"  />}
        </StyledButton>
      </div>
    </Fade>
  );
}

export default AudioMusic;