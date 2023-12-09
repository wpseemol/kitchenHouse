import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import BtnCustom from '../btnCustom/BtnCustom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeHero() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);
    useEffect(() => {
        const slider = new Glide('.glide-06', {
            type: 'carousel',
            focusAt: 'center',
            perView: 1,
            autoplay: 4000,
            animationDuration: 700,
            gap: 0,
            classNames: {
                nav: {
                    active: '[&>*]:bg-wuiSlate-700',
                },
            },
            breakpoints: {
                1024: {
                    perView: 1,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            {/* Component: Card Carousel */}
            <div
                className="glide-06 relative w-full overflow-hidden rounded 
             lg:h-[48rem] 
            ">
                {/*     Slides */}
                <div className="overflow-hidden" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                        <li className="relative">
                            <img
                                src="https://i.ibb.co/4sHdX29/Enswell-Interior-by-J-Varney-2200x1237px.jpg"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* slider information  */}
                            <div className="absolute top-0 left-0 w-full z-[2] ">
                                <div className="lg:my-[16.5rem] md:my-[13rem] sm:my-[6rem] text-center    flex flex-col items-center justify-center text-white">
                                    <div>
                                        <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold">
                                            {' '}
                                            Over All Good Taste
                                        </h2>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="lg:text-2xl md:text-xl text-base font-medium lg:my-8 md:my-4 my-2">
                                            <p>
                                                Ut neque turpis, laoreet quis
                                                porttitor eu, scelerisque
                                                pellentesque
                                                <br />
                                                nec felis sagittis dui a.
                                            </p>
                                        </div>
                                        <div className="w-fit mx-auto">
                                            <BtnCustom>
                                                Make Reservation
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 bg-black/40 w-full h-full z-[1]"></div>
                        </li>
                        <li className="relative">
                            <img
                                src="https://i.ibb.co/JqZSfW8/pexels-min-an-1482803.jpg"
                                className="w-full h-full object-cover object-center"
                            />

                            {/* slider information  */}
                            <div className="absolute top-0 left-0 w-full z-[2] ">
                                <div className="lg:my-[16.5rem] md:my-[13rem] sm:my-[6rem] text-center    flex flex-col items-center justify-center text-white">
                                    <div>
                                        <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold">
                                            {' '}
                                            Best Ever Food Service
                                        </h2>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="lg:text-2xl md:text-xl text-base font-medium lg:my-8 md:my-4 my-2">
                                            <p>
                                                Quisque odio lectus, consequat
                                                id erat ut, consectetur
                                                convallis tortor <br />
                                                Nunc non tortor sed mi bibendum.
                                            </p>
                                        </div>
                                        <div className="w-fit mx-auto">
                                            <BtnCustom>
                                                Make Reservation
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 bg-black/40 w-full h-full z-[1]"></div>
                        </li>
                        <li className="relative">
                            <img
                                src="https://i.ibb.co/BLg914h/pexels-engin-akyurt-2673353.jpg"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* slider information  */}
                            <div className="absolute top-0 left-0 w-full z-[2] ">
                                <div className="lg:my-[16.5rem] md:my-[13rem] sm:my-[6rem] text-center    flex flex-col items-center justify-center text-white">
                                    <div>
                                        <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold">
                                            {' '}
                                            We Serve Quality Food{' '}
                                        </h2>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="lg:text-2xl md:text-xl text-base font-medium lg:my-8 md:my-4 my-2">
                                            <p>
                                                Maecenas posuere dolor sit amet,
                                                consectetur adipiscing elit
                                                <br />
                                                Turpis ridiculus tellus.
                                            </p>
                                        </div>
                                        <div className="w-fit mx-auto">
                                            <BtnCustom>
                                                Make Reservation
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 bg-black/40 w-full h-full z-[1]"></div>
                        </li>
                        <li className="relative">
                            <img
                                src="https://i.ibb.co/svmGRn4/pexels-jonathan-borba-2983101.jpg"
                                className="w-full h-full object-cover object-center"
                            />

                            {/* slider information  */}
                            <div className="absolute top-0 left-0 w-full z-[2] ">
                                <div className="lg:my-[16.5rem] md:my-[13rem] sm:my-[6rem] text-center    flex flex-col items-center justify-center text-white">
                                    <div>
                                        <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold">
                                            {' '}
                                            Best Ever Food{' '}
                                        </h2>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="lg:text-2xl md:text-xl text-base font-medium lg:my-8 md:my-4 my-2">
                                            <p>
                                                Maecenas posuere dolor sit amet,
                                                consectetur adipiscing elit
                                                <br />
                                                Turpis ridiculus tellus.
                                            </p>
                                        </div>
                                        <div className="w-fit mx-auto">
                                            <BtnCustom>
                                                Make Reservation
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 bg-black/40 w-full h-full z-[1]"></div>
                        </li>
                        <li className="relative">
                            <img
                                src="https://i.ibb.co/j48ccvC/pexels-engin-akyurt-2347311.jpg"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* slider information  */}
                            <div className="absolute top-0 left-0 w-full z-[2] ">
                                <div className="lg:my-[16.5rem] md:my-[13rem] sm:my-[6rem] text-center    flex flex-col items-center justify-center text-white">
                                    <div>
                                        <h2 className="lg:text-7xl md:text-5xl text-3xl font-bold">
                                            {' '}
                                            Best Ever Food{' '}
                                        </h2>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="lg:text-2xl md:text-xl text-base font-medium lg:my-8 md:my-4 my-2">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Architecto, asperiores.
                                            </p>
                                        </div>
                                        <div className="w-fit mx-auto">
                                            <BtnCustom>
                                                Make Reservation
                                            </BtnCustom>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 left-0 bg-black/40 w-full h-full z-[1]"></div>
                        </li>
                    </ul>
                </div>
                {/*     Controls */}
                <div
                    className="absolute left-0 top-1/2 md:flex h-0 w-full items-center justify-between px-4 hidden"
                    data-glide-el="controls">
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 transition duration-300  hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5">
                            <title>prev slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full  bg-white text-slate-700 transition duration-300  hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5">
                            <title>next slide</title>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
                {/*     Indicators */}

                <div className="absolute bottom-0 left-0 w-full  z-[2] overflow-hidden -mb-1">
                    <div className="lg:w-full w-[80rem]">
                        <img
                            src="https://i.ibb.co/cJXxX6s/shape-1.png"
                            alt="shapeImage"
                            className="w-full h-6  -mb-[1px]"
                        />
                    </div>
                    <div className="w-full h-4 bg-white"></div>
                </div>
            </div>
            {/* End Card Carousel */}
        </>
    );
}
