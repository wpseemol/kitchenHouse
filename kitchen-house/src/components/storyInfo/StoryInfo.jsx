import AnimesonBg from '../animesonBg/AnimesonBg';
import BtnCustom from '../btnCustom/BtnCustom';

const StoryInfo = () => {
    return (
        <>
            <div className="container mx-auto  md:px-0 px-2 overflow-hidden">
                <div className="flex gap-2 justify-center items-center">
                    <div className="md:w-1/2  lg:my-0 my-16">
                        <div>
                            <h3 className="font-iconFont text-3xl">
                                Our Story
                            </h3>
                        </div>
                        <div>
                            <h2 className="text-5xl font-bold my-5">
                                Traditional & Modern Service{' '}
                                <span className="text-primaryColor">
                                    Since 1970
                                </span>
                            </h2>
                        </div>
                        <div className="text-base">
                            <p>
                                Ut neque turpis dolor sit amet consectetur
                                adipiscing elit purus egestas diam sit vitae
                                egestas suspendisse amet ultricies eu. Eget at
                                porttitor morbi blandit ac vitae, dolor. Gravida
                                eu vel ac luctus. Hac a vel est malesuada tellus
                                sed nunc, etiam maecenas.
                            </p>
                        </div>
                        <div className="my-5">
                            <figure>
                                <img
                                    src="https://i.ibb.co/NYQbGFk/signature-1.png"
                                    alt="Signature"
                                />
                            </figure>
                        </div>
                        <div>
                            <BtnCustom>Our Story</BtnCustom>
                        </div>
                    </div>
                    <div className="relative mt-[12rem] md:block hidden">
                        <figure className="absolute top-56 left-0 z-[1]">
                            <img
                                src="https://i.ibb.co/wrZvxQw/vector-1.png"
                                alt="food Icon"
                            />
                        </figure>
                        <figure className="absolute top-56 -right-10 z-[1]">
                            <img
                                src="https://i.ibb.co/GQ98Z5y/about-2.png"
                                alt="food Icon"
                            />
                        </figure>

                        <figure className="relative" data-aos="fade-up">
                            <img
                                src="https://i.ibb.co/NCqWrm8/about-1.png"
                                alt="Shap Image"
                                className="relative z-[1]"
                            />
                            <div className="absolute -top-2 xl:left-[6rem] lg:left-[4.5rem] w-[28rem] h-[28rem] rounded-full bg-[#f3ebdf] z-0"></div>
                        </figure>

                        <div className="absolute top-28 -right-12 animate-jump animate-infinite animate-duration-[10000ms]">
                            <AnimesonBg />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoryInfo;
