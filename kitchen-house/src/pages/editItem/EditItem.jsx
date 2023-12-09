import { ToastContainer } from 'react-toastify';
import BtnCustom from '../../components/btnCustom/BtnCustom';

import useCategoryData from '../../hooks/useCategoryData/useCategoryData';

import { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import useSingleItem from '../../hooks/useSingleItem/useSingleItem';
import { useParams } from 'react-router-dom';
import PageLoading from '../../components/pageLoading/PageLoading';
import useAxiosBasUrl from '../../hooks/useAxiosBasUrl';
import Swal from 'sweetalert2';

const EditItem = () => {
    const { id: productId } = useParams();
    const { uniqCategory } = useCategoryData();

    const axiosBasUrl = useAxiosBasUrl();

    const { singleItem, isLoading, refetch } = useSingleItem(productId);

    // Category
    const [selectedCatOption, setSelectedCatOption] = useState(null);
    const handleSelectChange = (event) => {
        setSelectedCatOption(event.target.value);
    };

    // img Related function start

    const [previewImage, setPreviewImage] = useState(null);
    const [itemImageObj, setItemImageObj] = useState({});

    const [itemImageArr, setItemImageArr] = useState([]);
    const [imageEditUrl, setImageEditUrl] = useState(null);
    // img related state
    useEffect(() => {
        if (singleItem?.itemImage) {
            const imageUralObj = singleItem?.itemImage || {};
            const itemImages = Object.entries(imageUralObj).map(
                ([key, value]) => ({
                    [key]: value,
                })
            );

            setItemImageObj(imageUralObj);
            setItemImageArr(itemImages);

            if (singleItem?.itemImage?.url1) {
                setImageEditUrl({
                    imgUrl: singleItem?.itemImage?.url1,
                    imgName: 'url1',
                });

                setPreviewImage(singleItem?.itemImage?.url1);
            }

            if (!selectedCatOption) {
                setSelectedCatOption(singleItem?.category?.catId);
            }
        }
    }, [singleItem, selectedCatOption]);

    const handelImage = (e, clickImage) => {
        setImageEditUrl({ imgUrl: e.target.src, imgName: clickImage });
    };

    const handelChangeLink = (e, changeImageName) => {
        setItemImageObj({ ...itemImageObj, [changeImageName]: e.target.value });
        setPreviewImage(e.target.value);
    };

    console.log();

    const handelUploadItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const itemPrice = form.itemPrice.value;
        const itemQuantity = form.itemQuantity.value;
        const description = form.description.value;

        axiosBasUrl
            .put(`/item/${productId}`, {
                itemName,
                itemPrice,
                itemQuantity,
                description,
                category: uniqCategory.find(
                    (cat) => cat?.catId === selectedCatOption
                ),
                itemImage: itemImageObj,
            })
            .then(function () {
                Swal.fire({
                    title: 'Done!',
                    text: 'Product Update is Done',
                    icon: 'success',
                    confirmButtonText: 'Okay',
                });
                form.reset();
                refetch();
            })
            .catch(function (error) {
                Swal.fire({
                    title: 'Error!',
                    text: error,
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            });
    };

    // img related function end

    if (isLoading) {
        return <PageLoading />;
    }

    return (
        <div className="bg-[#f5f2ed] relative py-20 pb-24 overflow-hidden">
            {/* background Design */}
            <div className="absolute top-0 left z-[1] w-fit h-fit overflow-hidden ">
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
            <div className="absolute top-1/2 transform -translate-y-1/2 left-60 z-[1] w-[20rem] h-[20rem] overflow-hidden ">
                <figure className="animate-jump animate-infinite animate-duration-[10000ms] mx-auto mt-10 w-fit">
                    <img
                        src="https://i.ibb.co/j5jMQPX/shape-16.png.png"
                        alt="Animation design left"
                    />
                </figure>
            </div>
            {/* background Design */}
            {/* pre order section start */}
            <div
                onSubmit={handelUploadItem}
                className="relative z-[2] container  mx-auto">
                <div className="">
                    <div className="w-fit mx-auto bg-white text-[#797979] font-medium sm:p-16 px-2 py-6 ">
                        <div className="text-white mb-14">
                            <div className="flex items-center flex-wrap gap-3 font-iconFont md:text-5xl text-3xl text-primaryColor">
                                <div>
                                    <AiOutlineEdit />
                                </div>
                                <h3 className="">Item Update</h3>
                            </div>
                        </div>

                        <form className="grid md:grid-cols-2 grid-cols-1 gap-4  text-xl font-thin">
                            {/* itemName  */}
                            <div className="sm:w-[22rem] mb-4">
                                <label
                                    htmlFor="itemName"
                                    className=" font-semibold underline underline-offset-4">
                                    Product Name:
                                </label>
                                <input
                                    defaultValue={singleItem?.itemName}
                                    type="text"
                                    name="itemName"
                                    placeholder="Food item name"
                                    className="mt-3 border-b border-[#e5e5e5] w-full focus:outline-none pb-3 "
                                    id="upItemName"
                                />
                            </div>
                            {/* price */}
                            <div className="sm:w-[22rem] mb-4 flex items-center gap-3">
                                <div className=" ">
                                    <label
                                        htmlFor="itemPrice"
                                        className=" font-semibold underline underline-offset-4">
                                        Price:
                                    </label>
                                    <input
                                        defaultValue={singleItem?.itemPrice}
                                        type="number"
                                        name="itemPrice"
                                        placeholder="Item Price"
                                        className=" mt-3 border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                        id="upItemPrice"
                                    />
                                </div>
                                <div className=" ">
                                    <label
                                        htmlFor="itemQuantity"
                                        className=" font-semibold underline underline-offset-4">
                                        Quantity:
                                    </label>
                                    <input
                                        defaultValue={singleItem?.itemQuantity}
                                        type="number"
                                        name="itemQuantity"
                                        placeholder="Quantity"
                                        className=" mt-3 border-b border-[#e5e5e5] w-full focus:outline-none pb-3"
                                        id="upItemQuantity"
                                    />
                                </div>
                            </div>

                            {/* item picture start */}
                            <div className="w-full  md:col-span-2">
                                <label
                                    htmlFor="photos"
                                    className=" font-semibold underline underline-offset-4">
                                    {`Who's picture on Update click this picture.`}
                                </label>
                                <br />
                                <div className="h-16 flex gap-2 w-full overflow-x-auto my-2 p-1">
                                    {itemImageArr?.map((imgUrl, inx) => {
                                        const imgName = Object.keys(imgUrl);

                                        return (
                                            <figure
                                                onClick={(e) =>
                                                    handelImage(e, imgName[0])
                                                }
                                                key={inx}
                                                className={`w-24 ${
                                                    imgName[0] ===
                                                    imageEditUrl?.imgName
                                                        ? 'border-4 border-primaryColor'
                                                        : ''
                                                } `}>
                                                <img
                                                    src={
                                                        imgUrl[`url${inx + 1}`]
                                                    }
                                                    alt={imgName[0]}
                                                    className="w-full h-full object-cover object-center"
                                                />
                                            </figure>
                                        );
                                    })}
                                </div>
                                <div className="relative group">
                                    <input
                                        onChange={(e) =>
                                            handelChangeLink(
                                                e,
                                                imageEditUrl?.imgName
                                            )
                                        }
                                        type="text"
                                        name={imageEditUrl?.imgName}
                                        defaultValue={
                                            imageEditUrl
                                                ? imageEditUrl?.imgUrl
                                                : ''
                                        }
                                        placeholder="Photos"
                                        className="mt-3 border-b border-[#e5e5e5] w-full focus:outline-none pb-3 "
                                        id="photos"
                                    />
                                    {/* previewImage */}
                                    <div
                                        className="absolute duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-hover:bottom-20 -bottom-32 border-4 border-gray-300 rounded right-10
                                    ">
                                        <div className="h-64 bg-gray-300 relative z-[4]">
                                            <figure className="h-64 bg-gray-300 relative z-[4]">
                                                <img
                                                    src={previewImage}
                                                    alt="Preview Image"
                                                    className="w-full h-full object-cover object-center relative "
                                                />
                                            </figure>
                                            <div className="absolute -bottom-6 left-7 shadow-2xl rotate-45 w-16 h-16 z-[3] bg-gray-300"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* item picture end */}

                            {/* this is Category section */}

                            <div className="w-full mb-4 md:col-span-2">
                                <div className=" w-full flex flex-col gap-3">
                                    <label
                                        htmlFor="category"
                                        className=" font-semibold underline underline-offset-4">
                                        Category:
                                    </label>
                                    <select
                                        className="border-b border-[#e5e5e5] text-[#797979] w-full focus:outline-none pb-3"
                                        name="category"
                                        id="category"
                                        value={
                                            selectedCatOption
                                                ? selectedCatOption
                                                : singleItem?.category?.catId
                                        }
                                        onChange={handleSelectChange}>
                                        <option value="" disabled>
                                            No category select
                                        </option>
                                        {uniqCategory?.map((category) => {
                                            return (
                                                <option
                                                    key={category?.catId}
                                                    value={category?.catId}>
                                                    {category?.catName}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>

                            <div className="md:col-span-2">
                                <label
                                    htmlFor="description"
                                    className=" font-semibold underline underline-offset-4">
                                    Description:
                                </label>
                                <textarea
                                    defaultValue={singleItem?.description}
                                    name="description"
                                    id="description"
                                    cols=""
                                    rows="3"
                                    placeholder="Item description"
                                    className="mt-3 border-b border-[#e5e5e5] w-full focus:outline-none pb-3 resize-none"></textarea>
                            </div>
                            <div className="md:col-span-2 mt-3">
                                <div className="w-fit mx-auto ">
                                    <BtnCustom>Update</BtnCustom>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* pre order section end */}
            <ToastContainer />
        </div>
    );
};

export default EditItem;
