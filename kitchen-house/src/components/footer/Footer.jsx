import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="font-myPoppinsFont  text-center   text-neutral-200 lg:text-left relative z-[2] -mt-10">
            <div className="-mb-[1px] overflow-hidden">
                <figure className="lg:w-full w-[80rem]">
                    <img
                        src="https://i.ibb.co/4dj0Q9V/shape-14.png"
                        alt="bg Design"
                    />
                </figure>
            </div>
            <div className="bg-[#212226] relative">
                <div className="container mx-auto text-white grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-14 gap-5 lg:gap-0">
                    <div className="sm:text-right text-center flex flex-col justify-center items-center order-1">
                        <ul>
                            <li>
                                <h2 className="text-2xl font-bold mb-5">
                                    Opening Times
                                </h2>
                            </li>
                            <li>
                                <p>Monday – Thursday: 08AM – 10PM</p>
                            </li>
                            <li>
                                <p>Friday – Saturday: 10AM–11:30PM</p>
                            </li>
                            <li>
                                <p>
                                    Sunday:{' '}
                                    <span className="text-primaryColor">
                                        {' '}
                                        Closed
                                    </span>{' '}
                                </p>
                            </li>
                            <li>
                                <p>Booking TIme: 24/7 Hours</p>
                            </li>
                        </ul>
                    </div>
                    {/* site logo information */}
                    <div className="flex flex-col justify-center items-center lg:order-2 lg:col-span-1 sm:col-span-2 sm:order-first">
                        <div>
                            <div className="flex flex-col items-center ">
                                <figure className="w-20 h-20">
                                    <img
                                        src="https://i.ibb.co/WxDF0nC/kitchen-house-logo-1.png"
                                        alt="Site Icon"
                                    />
                                </figure>
                                <div>
                                    <h2 className="font-iconFont text text-3xl mb-5">
                                        Kitchen House
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <p className="text-center lg:w-[20rem] mb-2">
                                    <span className="text-primaryColor ">
                                        Kitchen House
                                    </span>{' '}
                                    neque pretium lectus donec risus. Mauris mi
                                    tempor nunc orc leo consequat vitae erat
                                    gravida lobortis nec et sagittis.
                                </p>
                            </div>
                            <div className="text-xl flex items-center justify-center gap-2">
                                <div className="bg-[#4d4851] p-3 rounded-full hover:bg-primaryColor duration-300">
                                    <BiLogoFacebook />
                                </div>
                                <div className="bg-[#4d4851] p-3 rounded-full hover:bg-primaryColor duration-300">
                                    <FaInstagram />
                                </div>
                                <div className="bg-[#4d4851] p-3 rounded-full hover:bg-primaryColor duration-300">
                                    <BiLogoTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center order-3">
                        <ul>
                            <li>
                                <h2 className="text-2xl font-bold mb-5">
                                    Contact Info
                                </h2>
                            </li>
                            <li>
                                <p className="hover:text-primaryColor duration-300">
                                    {' '}
                                    <span className="text-primaryColor">
                                        Address:
                                    </span>{' '}
                                    New Hyde Park, NY 11040
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-primaryColor duration-300">
                                    {' '}
                                    <span className="text-primaryColor">
                                        Email:
                                    </span>{' '}
                                    example@info.com
                                </p>
                            </li>
                            <li>
                                <p className="hover:text-primaryColor duration-300">
                                    {' '}
                                    <span className="text-primaryColor">
                                        Call:
                                    </span>{' '}
                                    (+91)-213-666-0027
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Design of no footer  */}
                <div>
                    <div className="absolute sm:block hidden lg:top-6 top-16 left-14 2xl:left-[40rem] xl:left-[31rem] lg:left-[24.5rem]  z-[2]">
                        <figure>
                            <img
                                src="https://i.ibb.co/3htcdmj/shape-19.png"
                                alt="footer design left site"
                            />
                        </figure>
                    </div>
                    <div className="absolute sm:block hidden lg:top-6 top-16 right-14 2xl:right-[40rem] xl:right-[31rem] lg:right-[24.5rem] z-[2]">
                        <figure>
                            <img
                                src="https://i.ibb.co/GHj3Z4d/shape-20.png"
                                alt="footer design right site"
                            />
                        </figure>
                    </div>
                </div>
                {/* Design of no footer  */}
            </div>

            {/* <!--Copyright section--> */}
            <div className=" p-6 text-center bg-neutral-700">
                <span>© 2023 Copyright: </span>
                <a
                    className="font-semibold  text-neutral-400"
                    href="https://tailwind-elements.com/">
                    <span className="font-iconFont">Kitchen House</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
