import AnimesonBg from '../animesonBg/AnimesonBg';
import videoUrl from '../../assets/videos/homeProductSectonvideo.mp4';
import HomeProductItems from '../homeProductItems/HomeProductItems';
import BtnCustom from '../btnCustom/BtnCustom';
import { Link } from 'react-router-dom';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import PageLoading from '../pageLoading/PageLoading';

const ProductSection = () => {
    const axiosBasUrl = useAxiosBasUrl();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['food-items'],
        queryFn: async () => {
            try {
                const response = await axiosBasUrl.get('/top-sell');
                return response.data;
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            }
        },
    });

    if (isLoading) {
        return <PageLoading />;
    }
    return (
        <>
            <div className="  relative z-[1] w-full -mt-10 my-16 ">
                {/* bg deseigine start  */}
                <figure className="absolute top-0 left-0 z-[3]">
                    <img
                        src="https://i.ibb.co/SRncHs1/shape-5.png"
                        alt="desigine"
                    />
                </figure>
                <figure className="absolute bottom-28 right-10 z-[3]">
                    <img
                        src="https://i.ibb.co/KNmBtNN/shape-7.png"
                        alt="desigine"
                    />
                </figure>
                <div className="absolute text-green-50 top-28 left-12 animate-jump animate-infinite animate-duration-[10000ms] z-[3]">
                    <AnimesonBg />
                </div>
                <div className="h-full w-full absolute bottom-0 left-0 z-[1]">
                    <video
                        autoPlay
                        loop
                        muted
                        className="h-full w-full object-cover"
                        data-background-video="true">
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-[2]"></div>
                {/* bg deseigine end  */}
                {/* product section */}
                <div className="relative z-[4] pt-16">
                    <div className="text-center text-white">
                        <div className="">
                            <h3 className="font-iconFont text-3xl text-primaryColor">
                                Our Service
                            </h3>
                        </div>
                        <div className="py-4">
                            <h2 className="text-5xl font-bold my-5">
                                Our Top Selling Product
                            </h2>
                        </div>
                    </div>
                    <div className=" mx-auto">
                        <HomeProductItems data={data || []} refetch={refetch} />

                        <div className="py-8 pb-12 mx-auto w-fit">
                            <Link to="/food-items">
                                <BtnCustom>All Product</BtnCustom>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* product section */}
            </div>
        </>
    );
};

export default ProductSection;
