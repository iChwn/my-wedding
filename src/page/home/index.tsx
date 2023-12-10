import { lazy, useState } from 'react'
import { Fade, Zoom, Flip } from 'react-reveal'
import { background_image, lottie, wedding_image } from 'assets/image'
import {
	AudioMusic,
	BaseCountdown,
	CommentSection,
	Footer,
	ImageGallery,
	LottiePlayer,
	MapsEmbed,
} from 'components'
import {
	CalendarIcon,
	ClockIcon,
	LocationMarkerIcon,
} from '@heroicons/react/solid'
import 'assets/css/custom.scss'
import { useMediaQuery } from 'utility/helper'

const Opening = lazy(() => import('./opening'))
const Countdown = lazy(() => import('react-countdown'))
const ShootingStar = lazy(() => import('components/atoms/shootingStars'))
const Charity = lazy(() => import('components/molecules/gift'))

const HomePage = () => {
	const [content, setContent] = useState('opening')
	const [isAudioPlay, setAudioPlay] = useState(false)
  const smQuery = useMediaQuery("only screen and (min-width: 700px)");

	const transitionCallback = () => {
		setAudioPlay(true)
		setContent('main-content')
	}
	var current_date = Date.now()
	var finish_date = new Date('2023-12-24T08:00:00')
	var total_ms = finish_date.getTime() - current_date

	return (
		<div className='h-full w-full flex items-center justify-center flex-col'>
			  <div className={`h-full w-full   ${
						content === 'opening' ? 'block' : 'hidden'
					}`}>
					<Opening callback={transitionCallback} /> 
				</div>
		 
				<div
					className={`h-full w-full bg-galaxy overflow-auto ${
						content === 'main-content' ? 'block' : 'hidden'
					}`}
				>
					<AudioMusic isPlay={isAudioPlay} />
					<div className='h-screen w-full flex items-center justify-center flex-col relative'>
						<div className='absolute top-0 w-full h-full z-10 overflow-hidden'>
							<ShootingStar />
						</div>
						<div className='max-w-5xl h-full w-full flex flex-col items-center justify-center overflow-hidden gap-3'>
							<Fade top delay={1000} duration={1500}>
								<h1 className='font-black-hole md:text-7xl text-6xl text-[#FFFFFF] text-center'>
									Undangan Pernikahan
								</h1>
							</Fade>
							<div className='relative'>
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
									AHAD, 24 DESEMBER 2023
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
											<br /> Bapak Dudi Riyadi & Ibu Irma Noor Aini
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
											Bapak Eko Utomo & Ibu Sri Mulatsih
										</span>
									</div>
								</div>
							</Fade>
							<Countdown
								date={Date.now() + total_ms}
								renderer={({ days, hours, minutes, seconds, completed }) => {
									// console.log(total_ms)
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
										Graha Sangga Buana
									</span>
									<span>
										Jl. Phh. Mustofa, Cikutra,  <br /> Kec.
										Cibeunying Kidul, Kota Bandung, Jawa Barat
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
									<div className='grid col-span-4 relative md:w-[350px] w-full'>
										<div className='group shadow-md min-w-[250px] duration-200 delay-75 w-full px-6 py-4 md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] rounded-lg border-gray-300 border-2 relative'>
											{smQuery && (
												<div className='absolute w-[150px] right-[-10px] top-[-30px]'>
													<LottiePlayer lottieFile={lottie.Ufo}/>
												</div>
											)}
											<p className='font-poppins mb-2 text-2xl font-bold text-[#FFFFFF]'>
												Akad Nikah
											</p>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<CalendarIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													Ahad, 24 Desember 2023
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<ClockIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													08.00 - 10.00 WIB
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<LocationMarkerIcon
													width={20}
													height={20}
													color='#FFFFFF'
												/>
												<span className='ml-2 mt-[1px] font-semibold text-[#FFFFFF]'>
													Graha Sangga Buana
												</span>
											</div>
										</div>
									</div>
								</Zoom>
								<Zoom delay={300}>
									<div className='grid col-span-4 relative md:w-[350px] w-full'>
										<div className='group shadow-md min-w-[250px] duration-200 delay-75 w-full px-6 py-4 md:bg-[#0F1C4F]/[0.80] bg-[#0F1C4F]/[0.50] rounded-lg border-gray-300 border-2'>
											{smQuery && (
												<div className='absolute w-[150px] right-[-30px] top-[-30px]'>
													<LottiePlayer lottieFile={lottie.BlackHole}/>
												</div>
											)}
											<p className='font-poppins mb-2 text-2xl font-bold text-[#FFFFFF]'>
												Resepsi Nikah
											</p>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<CalendarIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													Ahad, 24 Desember 2023
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<ClockIcon width={20} height={20} color='#FFFFFF' />
												<span className='ml-2 mt-[1px] text-[#FFFFFF]'>
													11.00  - 14.00 WIB
												</span>
											</div>
											<div className='flex flex-row items-center font-poppins mb-2'>
												<LocationMarkerIcon
													width={20}
													height={20}
													color='#FFFFFF'
												/>
												<span className='ml-2 mt-[1px] font-semibold text-[#FFFFFF]'>
													Graha Sangga Buana
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
										<ol className="relative border-l border-gray-200 mt-5">
											{smQuery && (
												<div className='absolute w-full z-[-1] opacity-50'>
													<LottiePlayer lottieFile={lottie.BlackHoleSpin} />
												</div>                  
											)}
											<li className="mb-10 ml-4">
													<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
													<time className="mb-1 text-sm font-normal leading-none text-gray-400">Februari 2018</time>
													<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Awal kita bertemu secara online di Facebook grup Anime</h3>
													<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Kami hanya saling bertukar username instagram saja dan hanya cukup saling tau tidak pernah berbincang antara satu sama lain.</p>
											</li>
											<li className="mb-10 ml-4">
													<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
													<time className="mb-1 text-sm font-normal leading-none text-gray-400">Maret 2020</time>
													<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Awal kami saling mengenal dan berbincang</h3>
													<p className="text-base font-normal text-gray-500 dark:text-gray-400">Kamipun memiliki ketertatikan antara satu sama lain dan memutuskan untuk menjalin sebuah hubungan yang menuju jenjang pernikahan.</p>
											</li>
											<li className="ml-4">
													<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
													<time className="mb-1 text-sm font-normal leading-none text-gray-400">Desember 2023</time>
													<h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menikah</h3>
													<p className="text-base font-normal text-gray-500 dark:text-gray-400">Kami memutuskan untuk menikah di tahun ini, suatu langkah besar yang kami ambil untuk mengukir cerita bersama :).</p>
											</li>
									</ol>
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
									<div className='w-full mt-5'>
										<CommentSection />
									</div>
								</Zoom>
							</div>
							<Charity />
							{/* <GiftSection /> */}
          		<Footer />
							<div className='w-full h-3'></div>
						</div>
					</div>
				</div>
		 
		</div>
	)
}

export default HomePage
