import '../../assets/css/hover.css';
import { useQuery } from '@tanstack/react-query';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import Swal from 'sweetalert2';
import Rating from '../../components/rating/Rating';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { useState } from 'react';
import ItemCartBtn from '../../components/itemCartBtn/ItemCartBtn';
import { Helmet } from 'react-helmet-async';
import PageLoading from '../../components/pageLoading/PageLoading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useAllFoodItem from '../../hooks/useAllFoodItem/useAllFoodItem';

const FoodItems = () => {
    const [gridCol, setGridCol] = useState('grid');

    const { data, isLoading } = useAllFoodItem();

    if (isLoading) {
        return <PageLoading />;
    }

    return (
        <>
            <Helmet>
                <title>Kitchen House | All Food Item </title>
            </Helmet>
            <div className="bg-[#f5f2ed] relative py-16 pb-20 overflow-hidden">
                {/* background Design */}
                <div className="absolute top-0 z-[1] w-fit h-fit overflow-hidden ">
                    <figure className="">
                        <img
                            src="https://i.ibb.co/BHJ1fbs/shape-15.png"
                            alt="Animation design shape"
                        />
                    </figure>
                </div>
                <div className="absolute top-60 right-0 z-[1] w-fit h-fit overflow-hidden ">
                    <figure className="">
                        <img
                            src="https://i.ibb.co/9Hxp9Vg/shape-18.png"
                            alt="Animation design shape"
                        />
                    </figure>
                </div>
                <div className="absolute top-0 lg:right-60 md:right-5 -right-28 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                    <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto w-fit">
                        <img
                            src="https://i.ibb.co/2yYpqLM/shape-17.png"
                            alt="Animation design right"
                        />
                    </figure>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                    <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto mt-10 w-fit">
                        <img
                            src="https://i.ibb.co/j5jMQPX/shape-16.png.png"
                            alt="Animation design left"
                        />
                    </figure>
                </div>
                {/* background Design */}

                <div className="relative z-[2] container mx-auto ">
                    <div className=" md:mb-14 mb-8 px-2 sm:px-0 sm:text-left text-center sm:flex sm:items-center sm:justify-between">
                        <div className="">
                            <h3 className="font-iconFont sm:text-5xl text-3xl">
                                Our All Food Items
                            </h3>
                        </div>
                        <div className="hidden sm:flex items-center gap-8">
                            <div>
                                <p className="font-semibold text-lg">
                                    Showing 1 - <span>{data?.length}</span> Of{' '}
                                    <span>{data?.length}</span> Items
                                </p>
                            </div>
                            <div className="flex items-center gap-6 text-xl font-bold">
                                <div
                                    onClick={() => setGridCol('grid')}
                                    className={`${
                                        gridCol === 'grid'
                                            ? 'bg-primaryColor'
                                            : ''
                                    } p-3`}>
                                    <BsFillGrid3X3GapFill />
                                </div>
                                <div
                                    onClick={() => setGridCol('col')}
                                    className={`${
                                        gridCol === 'col'
                                            ? 'bg-primaryColor'
                                            : ''
                                    } p-3`}>
                                    <FaList />
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div
                        className={`${
                            gridCol === 'grid'
                                ? 'lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 duration-300'
                                : gridCol === 'col'
                                ? 'grid-cols-1 duration-300'
                                : ''
                        } grid  grid-cols-1 gap-4 px-2 sm:px-0 `}>
                        {/* item start */}
                        {data?.map((item) => {
                            return (
                                <div
                                    key={item?._id}
                                    className={`${
                                        gridCol === 'col'
                                            ? 'flex sm:flex-row flex-col items-center sm:max-w-full max-w-xs'
                                            : ''
                                    }  rounded-md shadow-md bg-white text-black group relative mx-auto sm:mx-0 `}>
                                    <div
                                        className={`${
                                            gridCol === 'col' ? '' : ''
                                        } relative overflow-hidden`}>
                                        <figure
                                            className={`${
                                                gridCol === 'col'
                                                    ? 'sm:w-[25rem] sm:max-w-full max-w-xs'
                                                    : ''
                                            } h-72`}>
                                            <img
                                                src={item?.itemImage?.url1}
                                                alt={item?.itmeName}
                                                className="object-cover object-center w-full rounded-t-md h-full  bg-gray-500"
                                            />
                                        </figure>

                                        {gridCol === 'grid' && (
                                            <>
                                                {/* over lay */}
                                                <div className="absolute top-0 left-0 w-full h-full bg-white/40 group-hover:block hidden"></div>
                                                {/* button section */}
                                                <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-3 group-hover:scale-100 scale-0 duration-300">
                                                    <ItemCartBtn
                                                        itemId={item?._id}
                                                        itemQuantity={parseInt(
                                                            item?.itemQuantity
                                                        )}
                                                        buyCount={parseInt(
                                                            item?.buyCount
                                                        )}
                                                        uid={item?.postBy?.uid}
                                                    />
                                                </div>
                                                {/* button section */}
                                            </>
                                        )}
                                    </div>
                                    <div>
                                        {gridCol === 'grid' && (
                                            <div className="w-fit mx-auto mt-4 text-[#FAB421]">
                                                <Rating />
                                            </div>
                                        )}

                                        <div className="flex flex-col justify-between p-6 space-y-8">
                                            <div className="space-y-2">
                                                <p className="text-base font-medium">
                                                    Category:{' '}
                                                    <span> food </span>
                                                </p>
                                                <h2 className="text-3xl font-semibold ">
                                                    {item?.itemName}
                                                </h2>
                                                <p>
                                                    Price:
                                                    <span>$</span>
                                                    <span>
                                                        {item?.itemPrice}
                                                    </span>
                                                    .00
                                                </p>
                                                {gridCol === 'col' && (
                                                    <div className="w-fit text-[#FAB421]">
                                                        <Rating />
                                                    </div>
                                                )}
                                            </div>

                                            {gridCol === 'col' && (
                                                <div className="flex items-center gap-4">
                                                    <ItemCartBtn
                                                        itemId={item?._id}
                                                        itemQuantity={parseInt(
                                                            item?.itemQuantity
                                                        )}
                                                        buyCount={parseInt(
                                                            item?.buyCount
                                                        )}
                                                        uid={item?.postBy?.uid}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default FoodItems;
