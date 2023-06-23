import { useEffect, useState } from 'react'
import Opening from './opening'
import { Fade, Zoom, Flip } from 'react-reveal'
import 'assets/css/custom.scss'

const HomePage = () => {
	const [content, setContent] = useState('opening')
	const transitionCallback = () => {
		setContent('main-content')
		console.log('transitionCallback')
	}

	return (
		<div className='h-full w-full flex items-center justify-center flex-col'>
			{content === 'opening' && <Opening callback={transitionCallback} />}
			{content === 'main-content' && (
				<div className='h-full w-full bg-galaxy overflow-auto'>
					<div className='h-screen w-full flex items-center justify-center flex-col relative'>
						<div className='absolute top-0 w-full h-full z-10'>
							{/* <Snowfall color="white" snowflakeCount={100} /> */}
						</div>
						{/* <Slide top delay={1000} duration={1500}>
                  <img
                    src={BackgroundImage.Tree3}
                    alt=""
                    className="absolute md:top-[-375px] top-[-230px]"
                  />
                </Slide> 
            */}
						<div className='max-w-5xl h-full w-full flex flex-col items-center justify-center overflow-hidden'>
							<Fade top delay={1000} duration={1500} opa>
								<h1 className='font-greatVibes md:text-7xl mt-4 text-6xl text-[#bba25f] md:pb-[40px] pb-[15px] text-center'>
									Undangan Pernikahan
								</h1>
							</Fade>
							<div className='relative'>
								<Zoom delay={500}>
									{/* <div className="relative">
                <img
                  src={BackgroundImage.Tree2}
                  alt=""
                  className="img-accent-1 md:block hidden"
                />
                <img
                  src={BackgroundImage.Tree2}
                  alt=""
                  className="img-accent-1-mobile md:hidden block"
                />
                <img
                  src={BackgroundImage.Tree2}
                  alt=""
                  className="img-accent-2 md:block hidden"
                />
                <img
                  src={BackgroundImage.Tree2}
                  alt=""
                  className="img-accent-2-mobile md:hidden block"
                />
              </div> */}
								</Zoom>
								<Zoom duration={1000}>
									<div className='md:w-[400px] w-[200px] md:h-[400px] h-[200px] rounded-full shadow-lg overflow-hidden'>
										{/* <img
                  src={WeddingImage.WeddingPhoto1}
                  alt=""
                  className="w-full h-full object-cover"
                /> */}
									</div>
								</Zoom>
							</div>
							<Flip cascade top delay={1000}>
								<h1 className='font-poppins md:text-7xl mt-4 text-5xl text-[#bba25f]'>
									Ichwan & Salma
								</h1>
								<span className='font-merriweather text-center md:text-lg text-xs text-gray-500 tracking-[4px] mt-4'>
									AHAD, 24 JULI 2022
								</span>
							</Flip>
							<Fade delay={1500}>
								<div className='scroll-wrapper absolute'>
									<div className='chevron'></div>
									<div className='chevron'></div>
									<div className='chevron'></div>
									<span className='text'>Scroll Kebawah</span>
								</div>
							</Fade>
						</div>
					</div>
          <div className='h-[700px] w-full text-white'>zzzzz</div>
				</div>
			)}
		</div>
	)
}

export default HomePage
