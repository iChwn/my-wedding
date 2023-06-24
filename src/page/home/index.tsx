import { useState } from 'react'
import Opening from './opening'
import { Fade, Zoom, Flip } from 'react-reveal'
import 'assets/css/custom.scss'
import { background_image, wedding_image } from 'assets/image'
import Snowfall from 'react-snowfall'

const HomePage = () => {
	const [content, setContent] = useState('main-content')
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
							<Snowfall color="white" snowflakeCount={100} radius={[1,2]} wind={[0,0]} />
						</div>
						<div className='max-w-5xl h-full w-full flex flex-col items-center justify-center overflow-hidden'>
							<Fade top delay={1000} duration={1500} opa>
								<h1 className='font-black-hole md:text-7xl text-6xl text-[#FFFFFF] md:pb-[40px] pb-[15px] text-center'>
									Undangan Pernikahan
								</h1>
							</Fade>
							<div className='relative'>
								{/* <Zoom delay={500}>
									<div className='relative'>
										<img
											src={background_image.Tree2}
											alt=''
											className='img-accent-1 md:block hidden'
										/>
										<img
											src={background_image.Tree2}
											alt=''
											className='img-accent-1-mobile md:hidden block'
										/>
										<img
											src={background_image.Tree2}
											alt=''
											className='img-accent-2 md:block hidden'
										/>
										<img
											src={background_image.Tree2}
											alt=''
											className='img-accent-2-mobile md:hidden block'
										/>
									</div>
								</Zoom> */}
								<Zoom duration={1000}>
									<div className='p-4 rounded-full border-white relative bg-[#0F1C4F]'>
										<div className='w-full h-full rounded-full absolute top-0 left-0 animate-spin-slow-20s md:p-[30px] p-[20px]'>
											<img
												src={background_image.planet_1}
												alt=''
												className='md:w-[30px] w-[15px] animate-spin-slow-30s absolute top-[40px]'
											/>
											<img
												src={background_image.ufo}
												alt=''
												className='md:w-[20px] w-[15px] animate-spin-slow-20s absolute top-[10px] left-[60]'
											/>
											<img
												src={background_image.satelit}
												alt=''
												className='md:w-[30px] w-[15px] animate-spin-slow-30s absolute bottom-[40px] right-[40px]'
											/>
										</div>
										<Zoom duration={1000}>
											<div className='p-4 rounded-full border-white bg-[#551E63] relative'>
												<div className='w-full h-full rounded-full absolute top-0 left-0 animate-spin-slow-30s md:p-[30px] p-[20px]'>
													<img
														src={background_image.rocket}
														alt=''
														className='md:w-[30px] w-[15px] absolute bottom-[40px] right-[40px] rotate-180'
													/>
												</div>
												<Zoom duration={1000}>
													<div className='p-4 rounded-full border-white bg-[#a71d5d7c] relative'>
														<Zoom duration={1000}>
															<div className='md:w-[400px] w-[200px] md:h-[400px] h-[200px] rounded-full shadow-lg overflow-hidden'>
																<img
																	src={wedding_image.WeddingPhoto1}
																	alt=''
																	className='w-full h-full object-cover'
																/>
															</div>
														</Zoom>
													</div>
												</Zoom>
											</div>
										</Zoom>
									</div>
								</Zoom>
							</div>
							<Flip cascade top delay={1000}>
								<h1 className='font-black-hole md:text-7xl mt-4 text-5xl text-[#FFFFFF]'>
									Ichwan & Salma
								</h1>
								<span className='font-poppins text-center md:text-lg text-xs text-gray-500 tracking-[4px] mt-4'>
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
