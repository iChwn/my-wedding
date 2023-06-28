import { lottie } from "assets/image"
import LottiePlayer from "../lottie"

const Loading = () => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center font-poppins'>
      <div className="w-[200px]">
        <LottiePlayer lottieFile={lottie.LoadingPlane} />
      </div>
			<span>Loading...</span>
		</div>
	)
}

export default Loading
