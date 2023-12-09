import { HiOutlineMail } from 'react-icons/hi';
import { BiLogoFacebook, BiLogoTwitter, BiTimeFive } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';

const TopBarContactInfo = () => {
    return (
        <section className="bg-[#212226] text-[#bcbdbe] lg:py-0 py-4 duration-300">
            <div className="container mx-auto flex items-center justify-center lg:justify-between">
                <div className="flex items-center sm:gap-3 gap-1 sm:flex-row flex-col text-base font-medium duration-300">
                    <div className="flex items-center">
                        {' '}
                        <div className="text-primaryColor text-xl">
                            <HiOutlineMail />
                        </div>
                        <div className="">
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {' '}
                        <div className="text-primaryColor text-xl">
                            <BiTimeFive />
                        </div>
                        <div>
                            <p>Open Hours: Mon - Fri 8.00 am - 6.00 pm</p>
                        </div>
                    </div>
                    <span className="hidden md:inline">|</span>
                    <div className="hidden md:block">
                        <BiLogoFacebook />{' '}
                    </div>
                    <div className="hidden md:block">
                        <AiOutlineInstagram />{' '}
                    </div>
                    <div className="hidden md:block">
                        <BiLogoTwitter />{' '}
                    </div>

                    <span className="hidden md:inline">|</span>
                </div>
                <div className="lg:block hidden">
                    <button
                        className="group bg-white   px-10 py-4 text-xl z-10 font-semibold capitalize 
        relative overflow-hidden
        ">
                        <span className="z-10 relative text-white group-hover:text-primaryColor duration-500">
                            book an table
                        </span>
                        <div className="absolute top-0 group-hover:left-60 left-0 duration-500 w-full h-full bg-primaryColor "></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TopBarContactInfo;
