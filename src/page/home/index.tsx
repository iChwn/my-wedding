import { useState } from 'react'
import Opening from './opening'
import { Fade, Zoom, Flip } from 'react-reveal'
import { background_image, lottie, wedding_image } from 'assets/image'
import {
	BaseCountdown,
	CommentSection,
	Footer,
	ImageGallery,
	LottiePlayer,
	MapsEmbed,
} from 'components'
import Countdown from 'react-countdown'
import {
	CalendarIcon,
	ClockIcon,
	LocationMarkerIcon,
} from '@heroicons/react/solid'
import 'assets/css/custom.scss'
import ShootingStar from 'components/atoms/shootingStars'

const HomePage = () => {
	const [content, setContent] = useState('opening')
	const transitionCallback = () => {
		setContent('main-content')
		console.log('transitionCallback')
	}
	var current_date = Date.now()
	var finish_date = new Date('2023-07-25T00:20:00')

	var total_ms = finish_date.getTime() - current_date

	return (
		<div className='h-full w-full flex items-center justify-center flex-col'>
			{content === 'opening' && <Opening callback={transitionCallback} />}
			{content === 'main-content' && (
				<div
					className={`h-full w-full bg-galaxy overflow-auto ${
						content === 'main-content' ? 'block' : 'hidden'
					}`}
				>
					<div className='h-screen w-full flex items-center justify-center flex-col relative'>
						<div className='absolute top-0 w-full h-full z-10 overflow-hidden'>
							<ShootingStar />
						</div>
						<div className='max-w-5xl h-full w-full flex flex-col items-center justify-center overflow-hidden gap-3'>
							<Fade top delay={1000} duration={1500} opa>
								<h1 className='font-black-hole md:text-7xl text-6xl text-[#FFFFFF] text-center'>
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
													<img
														src={background_image.spaceship}
														alt=''
														className='md:w-[30px] w-[15px] absolute top-[40px] left-[40px] rotate-[50deg]'
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
								<h1 className='font-black-hole md:text-7xl text-5xl text-[#FFFFFF]'>
									Ichwan & Salma
								</h1>
								<span className='font-poppins text-center md:text-lg text-xs text-gray-500 tracking-[4px]'>
									AHAD, 24 JULI 2022
								</span>
							</Flip>
							{/* <Fade delay={1500}>
								<div className='scroll-wrapper absolute'>
									<div className='chevron'></div>
									<div className='chevron'></div>
									<div className='chevron'></div>
									<span className='text'>Scroll Kebawah</span>
								</div>
							</Fade> */}
						</div>
					</div>
					<div className='w-full flex items-center justify-center flex-col relative overflow-hidden'>
						<div className='max-w-5xl w-full flex flex-col items-center gap-y-3'>
							<Fade bottom>
								<span className='text-center font-poppins text-md font-normal px-5 text-[#FFFFFF]'>
									Assalamualaikum Warahmatullahi Wabarakatuh
								</span>
								<span className='text-center font-poppins text-md font-normal mb-4 px-5 text-[#FFFFFF]'>
									Dengan Memohon Ridho Serta Rahmat Allah SWT. Kami Bermaksud
									Memohon Do'a Restu Serta Mengundang Bapak/Ibu/Saudara/I Pada
									Pernikahan Kami :
								</span>
								<div className='flex md:flex-row gap-10 flex-col mt-4 pb-4 border-b-2 border-gray-300 z-10'>
									<div className='flex flex-col items-center'>
										<div className='relative'>
											<Fade delay={500} duration={3000}>
												<div
													className='absolute z-[-1] w-[150px] h-[150px]'
													style={{ scale: '1.3' }}
												>
													<img
														src={background_image.planet_profile}
														alt=''
														className='relative animate-spin-slow-20s'
													/>
												</div>
											</Fade>
											<div className='rounded-full h-[150px] w-[150px] overflow-hidden'>
												<img
													src={wedding_image.JanakaPhoto}
													alt=''
													className='w-full h-full object-cover'
												/>
											</div>
										</div>
										<h1 className='font-black-hole text-center md:text-5xl text-4xl text-[#FFFFFF] my-4'>
											Ichwan Arif Pratama
										</h1>
										<span className='font-poppins text-center mt-2 w-[350px] text-[#FFFFFF]'>
											<span className='font-semibold'>Putra dari</span> <br />
											Bapak Iman Ramadhan & Ibu Sri Mustikawarni
										</span>
									</div>
									<div className='flex flex-col items-center'>
										<div className='relative'>
											<Fade delay={500} duration={3000}>
												<div
													className='absolute z-[-1] w-[150px] h-[150px]'
													style={{ scale: '1.3' }}
												>
													<img
														src={background_image.planet_profile}
														alt=''
														className='relative animate-spin-slow-20s'
													/>
												</div>
											</Fade>
											<div className='rounded-full h-[150px] w-[150px] overflow-hidden'>
												<img
													src={wedding_image.DereynaPhoto}
													alt=''
													className='w-full h-full object-cover'
												/>
											</div>
										</div>
										<h1 className='font-black-hole text-center md:text-5xl text-4xl text-[#FFFFFF] my-4'>
											Salma Juniarti
										</h1>
										<span className='font-poppins text-center mt-2 w-[350px] text-[#FFFFFF]'>
											<span className='font-semibold'>Putri dari</span>
											<br /> Bapak Herry Bosscha & Ibu Ida Syadiah
										</span>
									</div>
								</div>
							</Fade>
							<Countdown
								date={Date.now() + total_ms}
								renderer={({ days, hours, minutes, seconds, completed }) => {
									return (
										<BaseCountdown
											days={days}
											hours={hours}
											minutes={minutes}
											seconds={seconds}
											isCompleted={completed}
										/>
									)
								}}
							/>
							<Fade bottom>
								<div className='z-[1] flex flex-col text-center font-poppins mt-3 mb-5 gap-y-4 border-y-2 border-gray-300 py-3 text-[#FFFFFF] overflow-hidden'>
									<span className='font-semibold text-xl'>
										Gedung Graha Indah Karya
									</span>
									<span>
										Jl. Golf Raya No. 2A Cisaranten Bina Harapan, <br /> Kec.
										Arcamanik, Kota Bandung
									</span>
								</div>
							</Fade>
							<div className='relative flex md:flex-row flex-col gap-5 w-full items-center justify-center mb-5 p-3'>
								<Fade delay={500} duration={3000}>
									<div className='absolute brightness-50'>
										<LottiePlayer lottieFile={lottie.SolarOptimize}/>
									</div>
								</Fade>
								<Zoom>
									<div className='h-[200px] grid col-span-4 relative md:w-[350px] w-full'>
										<div className='group shadow-md min-w-[250px] duration-200 delay-75 w-full px-6 py-4 md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] rounded-lg border-gray-300 border-2 relative'>
											<div className='absolute w-[150px] right-[-10px] top-[-30px]'>
												<LottiePlayer lottieFile={lottie.Ufo}/>
											</div>
											<p className='font-poppins mb-2 text-2xl font-bold text-[#FFFFFF]'>
												Akad Nikah
											</p>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<CalendarIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													Ahad, 24 Juli 2022
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<ClockIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													08.00 Wib
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<LocationMarkerIcon
													width={20}
													height={20}
													color='#FFFFFF'
												/>
												<span className='ml-2 mt-[1px] font-semibold text-[#FFFFFF]'>
													Gedung Graha Indah Karya
												</span>
											</div>
										</div>
									</div>
								</Zoom>
								<Zoom delay={300}>
									<div className='h-[200px] grid col-span-4 relative md:w-[350px] w-full'>
										<div className='group shadow-md min-w-[250px] duration-200 delay-75 w-full px-6 py-4 md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] rounded-lg border-gray-300 border-2'>
											<div className='absolute w-[150px] right-[-30px] top-[-30px]'>
												<LottiePlayer lottieFile={lottie.BlackHole}/>
											</div>
											<p className='font-poppins mb-2 text-2xl font-bold text-[#FFFFFF]'>
												Resepsi Nikah
											</p>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<CalendarIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													Ahad, 24 Juli 2022
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<ClockIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													Sesi 1: 11.00 Wib - 12.30 Wib
													<br />
													Sesi 2: 12.30 Wib - 14.00 Wib
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<LocationMarkerIcon
													width={20}
													height={20}
													color='#FFFFFF'
												/>
												<span className='ml-2 mt-[1px] font-semibold text-[#FFFFFF]'>
													Gedung Graha Indah Karya
												</span>
											</div>
										</div>
									</div>
								</Zoom>
							</div>

							<Zoom delay={300}>
								<div className='px-3 w-full'>
									<MapsEmbed />
								</div>
							</Zoom>
							<div className='px-5 w-full'>
								<Fade bottom>
									<div className='flex flex-col items-center gap-y-3 mt-5 border-t-2 border-gray-300 pt-5 relative'>
										<div className='absolute md:w-[300px] w-[400px] top-[-40px] z-[-1] brightness-50'>
											<LottiePlayer lottieFile={lottie.LovePlanet}/>
										</div>
										<span className='text-center font-black-hole md:text-7xl text-4xl text-[#FFFFFF]'>
											Bismillahirrahmanirahiim
										</span>
										<span className='text-center font-poppins text-md font-normal max-w-2xl text-[#FFFFFF]'>
											"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
											menciptakan pasangan-pasangan untukmu dari jenismu
											sendiri, agar kamu cenderung dan merasa tenteram
											kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
											sayang" <br /> (Ar-Rum 30:21)
										</span>
									</div>
								</Fade>
								<Zoom>
									<div className='w-full mt-5'>
										<ImageGallery />
									</div>
								</Zoom>
							</div>
							<div className='w-full mt-5 px-5'>
								<div className='flex flex-col items-center gap-y-3 border-t-2 border-gray-300 pt-5'>
									<Fade bottom>
										<span className='text-center font-black-hole md:text-7xl text-5xl text-[#FFFFFF]'>
											Kiriman Ucapan dan Do'a
										</span>
									</Fade>
								</div>
								<Zoom>
									<div className='w-full mt-5 overflow-hidden'>
										<CommentSection />
									</div>
								</Zoom>
							</div>
							{/* <GiftSection /> */}
          		<Footer />
							<div className='w-full h-3'></div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default HomePage
