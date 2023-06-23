/* eslint-disable react-hooks/exhaustive-deps */
import { useRive, Layout, Fit, Alignment, useStateMachineInput } from '@rive-app/react-canvas';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'utility/helper';
import "assets/css/custom.scss"

const HomePage = () => {
  const [isExit, setIsExit] = useState(false)
  const { rive, RiveComponent, canvas } = useRive({
    src: '/invitation-2.riv',
    autoplay: true,
    stateMachines: "State Machine 1",
    animations: 'Idle',
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.BottomCenter,
    }),
    onStateChange: (event) => {
      const state = event.data[0]
      console.log(state )
      if(state === "exit") {
        setIsExit(true)
        canvas.style.display = "none";
      } 
    },
  });
  const lgQuery = useMediaQuery("only screen and (min-width: 1025px)");
  const isHoverInput = useStateMachineInput(rive, "State Machine 1", "PointerIn");

  useEffect(() => {
    if (rive) {
      if (lgQuery) {
        rive!.layout = new Layout({
          fit: Fit.Contain,
          alignment: Alignment.Center,
        });
      } else {
        rive!.layout = new Layout({
          fit: Fit.Cover,
          alignment: Alignment.Center,
        });
      }
    }
  }, [rive, lgQuery]);

  useEffect(() => {
    if (rive && isHoverInput) {
      isHoverInput.value = true;
    }
  }, [isHoverInput])
 
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div id="transition" className={`circle-white circle-white-scale ${isExit && 'scale-circle'}`} style={{top: 30}}></div>
      <RiveComponent
        onMouseEnter={() => console.log("mouse enter")}
      />
    </div>
  )
}

export default HomePage;