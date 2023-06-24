/* eslint-disable react-hooks/exhaustive-deps */
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'utility/helper';
import "assets/css/custom.scss"
// import { useNavigate } from 'react-router';

const Opening = ({callback}:any) => {
  const [isExit, setIsExit] = useState(false)
  // const navigate = useNavigate()
  const lgQuery = useMediaQuery("only screen and (min-width: 1025px)");
  const { rive, RiveComponent } = useRive({
    src: lgQuery ? '/invitation-2.riv' : '/invitation-mobile.riv',
    autoplay: true,
    stateMachines: "State Machine 1",
    animations: 'Idle',
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.BottomCenter,
    }),
    onStateChange: (event) => {
      const state = event.data[0]
      if(state === "exit") {
        setIsExit(true)
        setTimeout(() => {
          callback("mantap")
        }, 2000);
      } 
    },
  });
  // const isHoverInput = useStateMachineInput(rive, "State Machine 1", "PointerIn");

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

  // useEffect(() => {
  //   if (rive && isHoverInput) {
  //     isHoverInput.value = true;
  //   }
  // }, [isHoverInput])
 
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div id="transition" className={`circle-white circle-white-scale ${isExit && 'scale-circle'}`} style={{top: 30}}></div>
      <RiveComponent />
    </div>
  )
}

export default Opening;