/* eslint-disable react-hooks/exhaustive-deps */
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'utility/helper';
import "assets/css/custom.scss"
import { useLocation } from 'react-router';
import { decryptId } from 'utility/helper/generateInvitation';
import guest_list from 'constant/guestList';
// import { useNavigate } from 'react-router';

const Opening = ({callback}:any) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search);
  const decryptedId = decryptId(queryParams.get('userid'))
  const isValidGuset = guest_list.find((guest) => guest.id === decryptedId)
  const [isShow, setIsShow] = useState(true)
  const [isExit, setIsExit] = useState(false)
  const smQuery = useMediaQuery("only screen and (min-width: 700px)");
  // const mdQuery = useMediaQuery("only screen and (min-width: 1025px)");
  const { rive, RiveComponent } = useRive({
    src: smQuery ? '/invitation-2.riv' : '/invitation-mobile.riv',
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
        }, 1500);
      } else if(state === "OnReadyToFly") {
        setIsShow(false)
      }
    },
  });

  useEffect(() => {
    if (rive) {
      if (smQuery) {
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
  }, [rive, smQuery]);
 
  return (
    <div className="h-full w-full flex items-center justify-center flex-col relative bg-[#ffebc0]">
      <div id="transition" className={`circle-white circle-white-scale ${isExit && 'scale-circle'}`} style={{top: 30}}></div>
      <RiveComponent />
      {isShow && (
        <div className='bg-white font-black-hole text-black px-3 py-1 rounded-md absolute bottom-[10px] uppercase font-bold text-[20px] border-2 border-black'>Untuk {isValidGuset.name}</div>
      )}
    </div>
  )
}

export default Opening;